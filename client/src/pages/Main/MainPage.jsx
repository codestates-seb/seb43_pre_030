import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Pagination from "../../components/ui/Pagination";
import Main from "../../layouts/Main/Main";
import MainHeaderSection from "./MainHeaderSection";
import MainItem from "./MainItem";
import { setData } from "../../features/dataSlice";
import Loading from "../../components/ui/Loading";

function MainPage() {
  const questions = useSelector(s => s.data);
  const [isLoading, setIsLoading] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    (async () => {
      const { data } = await axios(`${process.env.REACT_APP_API_URL}/questions/newest`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setIsLoading(false);
      dispatch(setData(data));
    })();
  }, []);
  // const onPageChange = el => {
  //   setCurPage(el);
  // };
  return (
    <Main>
      <MainHeaderSection />

      {isLoading ? (
        <Loading />
      ) : (
        questions
          .slice((curPage - 1) * 10, (curPage - 1) * 10 + 10)
          .map(question => <MainItem key={question.id} data={question} />)
      )}
      {/* <Pagination curPage={curPage} onPageChange={onPageChange} /> */}
    </Main>
  );
}

export default MainPage;
