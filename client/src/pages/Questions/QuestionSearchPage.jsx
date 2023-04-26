import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/ui/Pagination";
import Main from "../../layouts/Main/Main";
import QuestionHeaderSection from "./QuestionHeaderSection";
import MainItem from "../Main/MainItem";
import { setData } from "../../features/dataSlice";

function QuestionSearchPage() {
  const questions = useSelector(s => s.data);
  const [curPage, setCurPage] = useState(1);
  const currentUser = useSelector(s => s.user);
  const search = useSelector(s => s.search);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (search.length === 0 || !currentUser) return navigation("/");
    (async () => {
      const { data } = await axios(`${process.env.REACT_APP_API_URL}/questions`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      dispatch(setData(data.filter(a => a.title.includes(search) || a.body.includes(search))));
    })();
  }, [search]);

  const onPageChange = el => {
    setCurPage(el);
  };
  return (
    <Main>
      <QuestionHeaderSection title={`${search}에 대한 검색결과...`} />
      {questions.slice((curPage - 1) * 10, (curPage - 1) * 10 + 10).map(question => (
        <MainItem key={question.question_id} data={question} />
      ))}
      <Pagination curPage={curPage} onPageChange={onPageChange} />
    </Main>
  );
}

export default QuestionSearchPage;
