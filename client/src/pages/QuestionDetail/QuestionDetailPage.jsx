import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
`;

// 답변 리스트 헤더
function AnswersHeader({ count }) {
  return (
    <AnswerHeaderWrapper>
      <h2>{count > 0 && count + (count === 1 ? "answer" : "answers")}</h2>
    </AnswerHeaderWrapper>
  );
}

// 상세페이지
function QuestionDetailPage() {
  const { id } = useParams();
  // 질문글 id에 따른 데이터 요청 주소
  const url = `http://localhost:3001/question/${id}`;
  // 답변글 id에 따른 데이터 요청 주소
  const url2 = `http://localhost:3001/answer/${id}`;

  // 서버에서 받아온 질문 데이터 상태
  const [questionData, setQuestionData] = useState({});
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const { data } = await axios(url);
        console.log(data);
        setQuestionData({ ...data });
      } catch (err) {
        console.error(err);
      }
      setIsPending(false);
    };
    fetchData();
  }, [url]);

  console.log(questionData);

  return (
    <>
      {isPending && <Loading />}
      {questionData && (
        <Main>
          <QuestionHeaderSection
            title={questionData.title}
            createAt={questionData.created_at}
            updateAt={questionData.modified_at}
            tags={questionData.tag}
          />
          {/* 내용 */}
          <QuestionContentSection
            id={questionData.id}
            userId={questionData.user_id}
            body={questionData.body}
            createdAt={questionData.created_at}
            updatedAt={questionData.modified_at}
          />
          {/* 답변들 */}
          {questionData.answer.length > 0 && (
            <>
              <AnswersHeader count={questionData.answer} />
              {questionData.answers.map((answer, idx) => (
                <QuestionContentSection key={idx} />
              ))}
            </>
          )}
          {/* 답변 작성폼 */}
          <AnswerCreateSection />
        </Main>
      )}
    </>
  );
}

export default QuestionDetailPage;
