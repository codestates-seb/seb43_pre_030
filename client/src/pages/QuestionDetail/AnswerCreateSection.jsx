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
function AnswerCreateSection({ question_id }) {
  return (
    <>
      <YourAnswerHeader>Your Answer</YourAnswerHeader>
      <AnswerForm question_id={question_id} />
    </>
  );
}

export default AnswerCreateSection;
