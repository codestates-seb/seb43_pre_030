import Main from "../layouts/Main";
import MainHeaderSection from "../components/MainHeaderSection";
import MainItem from "../components/MainItem";

function MainPage() {
  return (
    <Main>
      <MainHeaderSection />
      {[1, 2, 4, 5].map(_ => (
        <MainItem />
      ))}
    </Main>
  );
}

export default MainPage;
