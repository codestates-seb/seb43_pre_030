import FilterButtons from "../../components/FilterButtons";
import HeaderContentSection from "../../components/HeaderContentSection";

function MainHeaderSection() {
  return (
    <HeaderContentSection title="Top Questions">
      <FilterButtons buttons={["hottest", "newest", "oldest"]} />
    </HeaderContentSection>
  );
}

export default MainHeaderSection;
