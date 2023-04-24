import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import Main from "../../layouts/Main/Main";
import QuestionHeaderSection from "./QuestionHeaderSection";
import QuestionContentSection from "./QuestionContentSection";
import AnswerCreateSection from "./AnswerCreateSection";
import Loading from "../../components/ui/Loading";

// 답변 리스트 헤더 래퍼
const AnswerHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

// 답변 리스트 헤더
function AnswersHeader({ count }) {
  return (
    <AnswerHeaderWrapper>
      <h2>{count > 0 && `${count} ${count === 1 ? "answer" : "answers"}`}</h2>
    </AnswerHeaderWrapper>
  );
}

// 상세페이지
function QuestionDetailPage() {
  const { id } = useParams();
  // 질문글 id에 따른 데이터 요청 주소
  const url = `http://localhost:3001/questions/${id}`;
  // 답변글 id에 따른 데이터 요청 주소
  const url2 = `http://localhost:3001/answers`;

  // 서버에서 받아온 질문과 답변 데이터 상태
  const [questionData, setQuestionData] = useState({});
  const [answerData, setAnswerData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const { user } = useSelector(state => state.data);

  // 데이터 패칭
  useEffect(() => {
    (async () => {
      setIsPending(true);
      const res = await axios(url); // 질문데이터
      const res2 = await axios(url2); // 답변데이터

      const resQuestion = res.data;
      const resAnswer = res2.data;
      setQuestionData(resQuestion);
      setAnswerData(resAnswer);
    })();
    setIsPending(false);
  }, [url, url2]);

  // 새로운 답변 추가하기
  const handleAnswerSubmit = content => {
    const data = { body: content }; // 새로운 답변글 body에 추가
    axios(`http://localhost:3001/answers/${id}`, {
      method: "post",
      headers: {
        Authorization: user.token, // 인증받은 토큰 보내기
      },
      data,
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      {isPending && <Loading />}
      {questionData && answerData && (
        <Main>
          <QuestionHeaderSection
            title={questionData.title}
            createAt={questionData.created_at}
            modifiedAt={questionData.modified_at}
          />
          {/* 내용 */}
          <QuestionContentSection
            type="question"
            id={questionData.id}
            userId={questionData.user_id}
            body={questionData.body}
            tags={questionData.tags}
            createdAt={questionData.created_at}
            modifiedAt={questionData.modified_at}
          />
          {/* 답변들 */}
          {answerData.length > 0 && (
            <>
              <AnswersHeader count={answerData.length} />
              {answerData.map(answer => {
                return (
                  <QuestionContentSection
                    type="answer"
                    key={answer.id}
                    id={answer.id}
                    userId={answer.user_id}
                    body={answer.body}
                    createAt={answer.created_at}
                    modifiedAt={answer.modified_at}
                  />
                );
              })}
            </>
          )}
          {/* 답변 작성폼 */}
          <AnswerCreateSection handleAnswerSubmit={handleAnswerSubmit} />
        </Main>
      )}
    </>
  );
}

export default QuestionDetailPage;
