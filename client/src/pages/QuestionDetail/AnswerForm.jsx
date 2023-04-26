import { useState } from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize"; // npm i rehype-sanitize 묘듈 설치 필요
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/ui/Button";
import { setData } from "../../features/dataSlice";

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

// 마크다운 답변 생성 폼
function AnswerForm({ question_id }) {
  const [answerValue, setAnswerValue] = useState("");
  const data = useSelector(s => s.data);
  const dispatch = useDispatch();
  const currentUser = useSelector(s => s.user);
  const { id } = useParams();
  const onSubmit = () => {
    const newAnswer = {
      body: answerValue,
      user_id: currentUser.id,
      question_id: +id,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/answer`, newAnswer, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(res => {
        const ind = data.findIndex(a => a.question_id === question_id);

        const newData = [
          ...data.slice(0, ind),
          { ...data[ind], answers: [...data[ind].answers, res.data] },
          ...data.slice(ind),
        ];
        dispatch(setData(newData));
        setAnswerValue("");
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <StyledAnswerForm>
      <MarkDownEditor>
        <div data-color-mode="light">
          <MDEditor
            className="md-editor"
            value={answerValue}
            onChange={setAnswerValue}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
          />
        </div>
      </MarkDownEditor>
      <div className="answer-submit">
        <ButtonSubmit onClick={onSubmit}>Post Your Answer</ButtonSubmit>
      </div>
    </StyledAnswerForm>
  );
}

export default AnswerForm;
