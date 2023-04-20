import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Pagination from "../../components/ui/Pagination";
import Main from "../../layouts/Main/Main";
import MainHeaderSection from "./MainHeaderSection";
import MainItem from "./MainItem";
import { setData } from "../../features/dataSlice";

function MainPage() {
  const questions = useSelector(s => s.data);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const { data } = await axios("http://localhost:3001/question");
      dispatch(setData(data));
    })();
  });
  return (
    <Main>
      <MainHeaderSection />
      {questions.map(question => (
        <MainItem id={question.id} />
      ))}
      <Pagination />
    </Main>
  );
}

export default MainPage;
