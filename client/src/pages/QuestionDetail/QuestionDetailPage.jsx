import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import Main from "../../layouts/Main/Main";
import QuestionHeaderSection from "./QuestionHeaderSection";
import QuestionContentSection from "./QuestionContentSection";
import AnswerCreateSection from "./AnswerCreateSection";
import Loading from "../../components/ui/Loading";
import { setData } from "../../features/dataSlice";

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

  // 서버에서 받아온 질문과 답변 데이터 상태
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(s => s.data);
  const questionData = data.find(a => a.question_id === +id);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 답변수정
  const updateAnswer = (answer_id, answer_data) => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/answer/${answer_id}`,
        { body: answer_data },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(_ => {
        const ind = data.findIndex(a => a.question_id === +id);
        const answer_ind = data[ind].answers.findIndex(a => a.id === answer_id);
        const newAnswers = [
          ...data[ind].answers.slice(0, answer_ind),
          { ...data[ind].answers[answer_ind], body: answer_data },
          ...data[ind].answers.slice(answer_ind + 1),
        ];
        const newData = [...data.slice(0, ind), { ...data[ind], answers: newAnswers }, ...data.slice(ind + 1)];
        dispatch(setData(newData));
      })
      .catch(err => {
        alert("답변을 수정하지 못했습니다.");
      });
  };

  // 질문 수정
  const updateQuestion = (id, body) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/questions/${id}`,
        { ...questionData, body },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(_ => {
        const ind = data.findIndex(a => a.question_id === id);
        const newData = [...data.slice(0, ind), { ...data[ind], body }, ...data.slice(ind + 1)];
        dispatch(setData(newData));
      })
      .catch(err => {
        alert("질문을 수정하지 못했습니다.");
      });
  };

  // 답변 삭제
  const deleteAnswer = answer_id => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/answer/${answer_id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(_ => {
        const ind = data.findIndex(a => a.question_id === +id);

        const newAnswers = data[ind].answers.filter(a => a.id !== answer_id);
        const newData = [...data.slice(0, ind), { ...data[ind], answers: newAnswers }, ...data.slice(ind + 1)];
        dispatch(setData(newData));
      })
      .catch(err => {
        alert("답변을 삭제하지 못했습니다.");
      });
  };

  // 질문 삭제
  const deleteQuestion = id => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/questions/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(_ => {
        const newData = data.filter(a => a.question_id !== +id);
        dispatch(setData(newData));
        navigation("/");
      })
      .catch(err => {
        alert("질문을 삭제하지 못했습니다.");
      });
  };

  return (
    <>
      {isPending && <Loading />}
      {questionData && (
        <Main>
          <QuestionHeaderSection
            title={questionData.title}
            createdAt={questionData.created_at}
            updatedAt={questionData.updated_at}
          />
          {/* 내용 */}
          <QuestionContentSection
            type="question"
            id={questionData.question_id}
            userId={questionData.user_id}
            userName={questionData.user_name}
            body={questionData.body}
            tags={questionData.tags}
            createdAt={questionData.created_at}
            updatedAt={questionData.updated_at}
            updateHandler={updateQuestion}
            deleteHandler={deleteQuestion}
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
                    userName={answer.user_name}
                    body={answer.body}
                    createdAt={answer.created_at}
                    updatedAt={answer.updated_at}
                    updateHandler={updateAnswer}
                    deleteHandler={deleteAnswer}
                  />
                );
              })}
            </>
          )}
          {/* 답변 작성폼 */}
          <AnswerCreateSection question_id={questionData.question_id} />
        </Main>
      )}
    </>
  );
}

export default QuestionDetailPage;
