import React from "react";
import styled from "styled-components";
import AnswerForm from "./AnswerForm";

// Your Answer header
const YourAnswerHeader = styled.h2`
  margin: 0 0 1rem;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

// 답변 작성 섹션
function AnswerCreateSection() {
  return (
    <>
      <YourAnswerHeader>Your Answer</YourAnswerHeader>
      <AnswerForm />
    </>
  );
}

export default AnswerCreateSection;
