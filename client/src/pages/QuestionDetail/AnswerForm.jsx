import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
// import { IoMdAlert } from "react-icons/io";
import Button from "../../components/ui/Button";

// 답변 작성 폼
const StyledAnswerForm = styled.div`
  padding: 1.5rem;
  .answer-submit {
    margin-top: 1rem;
  }
`;
// 마크다운 박스컨테이너
const MarkDownEditor = styled.div`
  box-shadow: none;
  position: relative;

  .md-editor {
    margin: 0.6rem 0 0.6rem 0;
    padding: 0.4rem 0.5rem;
  }
  .md-editor:focus {
    border: 1px solid #59a4de;
    box-shadow: 0 0 0 0.2rem #59a4de30;
  }
`;

const ButtonSubmit = Button({
  bg: "var(--btn-bg-color)",
  fontColor: "#fff",
  border: "none",
  hoverBg: "var(--al-color)",
  padding: "0.7rem 0.7rem",
});

function AnswerForm({ on }) {
  const [answerValue, setAnswerValue] = useState("");

  const handledAnswerValue = newValue => {
    setAnswerValue(newValue);
  };

  return (
    <StyledAnswerForm>
      <MarkDownEditor>
        <div data-color-mode="light">
          <MDEditor className="md-editor" value={answerValue} onChange={handledAnswerValue} />
          <MDEditor.Markdown source={answerValue} style={{ whiteSpace: "pre-wrap" }} />
        </div>
      </MarkDownEditor>
      <div className="answer-submit">
        <ButtonSubmit>
          <Link to="/">Post Your Answer</Link>
        </ButtonSubmit>
      </div>
    </StyledAnswerForm>
  );
}

export default AnswerForm;
