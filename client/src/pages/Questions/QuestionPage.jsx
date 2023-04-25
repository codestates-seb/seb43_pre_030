import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Pagination from "../../components/ui/Pagination";
import Main from "../../layouts/Main/Main";
import MainHeaderSection from "./QuestionHeaderSection";
import MainItem from "../Main/MainItem";
import { setData } from "../../features/dataSlice";

function QuestionPage() {
  const questions = useSelector(s => s.data);
  const [curPage, setCurPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      const { data } = await axios("http://localhost:3001/questions");
      dispatch(setData(data));
    })();
  }, []);
  const onPageChange = el => {
    setCurPage(el);
  };
  return (
    <Main>
      <MainHeaderSection />
      {questions.slice((curPage - 1) * 10, (curPage - 1) * 10 + 10).map(question => (
        <MainItem key={question.id} data={question} />
      ))}
      <Pagination curPage={curPage} onPageChange={onPageChange} />
    </Main>
  );
}

export default QuestionPage;
