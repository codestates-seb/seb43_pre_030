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
  // const [answerData, setAnswerData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const { user } = useSelector(state => state.data);

  // 데이터 패칭
  useEffect(() => {
    (async () => {
      setIsPending(true);
      const res = await axios(`${process.env.REACT_APP_API_URL}/questions/${id}`); // 질문데이터
      console.log(res);
      setQuestionData(res.data);
    })();
    setIsPending(false);
  }, []);

  // 새로운 답변 추가하기
  // const handleAnswerSubmit = content => {
  //   const data = { body: content }; // 새로운 답변글 body에 추가
  //   axios(`http://localhost:3001/answers/${id}`, {
  //     method: "post",
  //     headers: {
  //       Authorization: user.token, // 인증받은 토큰 보내기
  //     },
  //     data,
  //   })
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => console.error(err));
  // };
  const updateAnswer = (id, data) => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}/answer/${id}`, data)
      .then(_ => {
        setQuestionData(prev => {
          const answerInd = prev.answers.findIndex(a => a.id === id);
          const newAnswerArr = [
            ...prev.answers.slice(0, answerInd),
            { ...prev.answers[answerInd], body: data },
            ...prev.answers.slice(answerInd + 1),
          ];
          return { ...prev, answers: newAnswerArr };
        });
      })
      .catch(err => {
        setQuestionData(prev => {
          const answerInd = prev.answers.findIndex(a => a.id === id);
          const newAnswerArr = [
            ...prev.answers.slice(0, answerInd),
            { ...prev.answers[answerInd], body: data },
            ...prev.answers.slice(answerInd + 1),
          ];
          return { ...prev, answers: newAnswerArr };
        });
      });
  };

  const updateQuestion = (id, data) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/questions/${id}`, { ...questionData, body: data })
      .then(_ => {
        setQuestionData(prev => ({ ...prev, body: data }));
      })
      .catch(err => {
        setQuestionData(prev => ({ ...prev, body: data }));
      });
  };

  return (
    <>
      {isPending && <Loading />}
      {Object.keys(questionData).length > 0 && (
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
            updateHandler={updateQuestion}
          />
          {/* 답변들 */}
          {questionData.answers.length > 0 && (
            <>
              <AnswersHeader count={questionData.answers.length} />
              {questionData.answers.map(answer => {
                return (
                  <QuestionContentSection
                    type="answer"
                    key={answer.id}
                    id={answer.id}
                    userId={answer.user_id}
                    body={answer.body}
                    createAt={answer.created_at}
                    modifiedAt={answer.modified_at}
                    updateHandler={updateAnswer}
                  />
                );
              })}
            </>
          )}
          {/* 답변 작성폼 */}
          <AnswerCreateSection setQuestionData={setQuestionData} />
        </Main>
      )}
    </>
  );
}

export default QuestionDetailPage;
