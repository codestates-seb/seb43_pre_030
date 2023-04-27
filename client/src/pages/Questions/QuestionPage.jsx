import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Pagination from "../../components/ui/Pagination";
import Main from "../../layouts/Main/Main";
import QuestionHeaderSection from "./QuestionHeaderSection";
import MainItem from "../Main/MainItem";
import { setData } from "../../features/dataSlice";
import Loading from "../../components/ui/Loading";

function QuestionPage() {
  const questions = useSelector(s => s.data);
  const [curPage, setCurPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    (async () => {
      try {
        const { data } = await axios(`${process.env.REACT_APP_API_URL}/questions`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        dispatch(setData(data));
      } catch (err) {
        alert("질문을 불러오지 못했습니다.");
      }
      setIsLoading(false);
    })();
  }, []);
  const onPageChange = el => {
    setCurPage(el);
  };
  return (
    <>
      {isLoading && <Loading />}
      <Main>
        <QuestionHeaderSection title="All Questions" />
        {questions.slice((curPage - 1) * 10, (curPage - 1) * 10 + 10).map(question => (
          <MainItem key={question.question_id} data={question} />
        ))}
        <Pagination curPage={curPage} onPageChange={onPageChange} />
      </Main>
    </>
  );
}

export default QuestionPage;
