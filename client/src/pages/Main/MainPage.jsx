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
    </Main>
  );
}

export default MainPage;
