import Pagination from "../../components/ui/Pagination";
import Main from "../../layouts/Main/Main";
import MainHeaderSection from "./MainHeaderSection";
import MainItem from "./MainItem";

function MainPage() {
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
