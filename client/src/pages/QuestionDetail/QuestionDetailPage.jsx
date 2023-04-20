import React, { useState } from "react";
import styled from "styled-components";
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
  // 서버에서 받아온 질문 데이터 상태
  const [questionData, setQuestionData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  if (isPending && questionData === null) {
    return <Loading />; // 로딩 이미지 추가
  }
  if (questionData) {
    return (
      <Main>
        <QuestionHeaderSection
          title={questionData.title}
          createAt={questionData.createdAt}
          updateAt={questionData.updateAt}
          views={questionData.views}
        />
        {/* 내용 */}
        <QuestionContentSection />
        {/* 답변들 */}
        {questionData.answers.length > 0 && (
          <>
            <AnswersHeader count={questionData.answers.length} />
            {questionData.answers.map((answer, idx) => (
              <QuestionContentSection key={idx} />
            ))}
          </>
        )}
        {/* 답변 작성폼 */}
        <AnswerCreateSection />
      </Main>
    );
  }
}

export default QuestionDetailPage;
