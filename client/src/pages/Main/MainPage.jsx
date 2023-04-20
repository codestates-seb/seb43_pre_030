import { useEffect } from "react";
import axios from "axios";
import Pagination from "../../components/ui/Pagination";
import Main from "../../layouts/Main/Main";
import MainHeaderSection from "./MainHeaderSection";
import MainItem from "./MainItem";

function MainPage() {
  useEffect(() => {
    (async () => {
      const { data } = await axios("http://localhost:3001/question");
      console.log(data);
    })();
  });
  return (
    <Main>
      <MainHeaderSection />
      {[1, 2, 4, 5].map(id => (
        <MainItem id={id} />
      ))}
      <Pagination />
    </Main>
  );
}

export default MainPage;
