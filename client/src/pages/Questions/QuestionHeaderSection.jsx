import HeaderContentSection from "../../components/HeaderContentSection";
import FilterButtons from "../../components/FilterButtons";

function QuestionHeaderSection() {
  return (
    <HeaderContentSection title="All Questions">
      <FilterButtons buttons={["hottest", "newest", "oldest"]} />
    </HeaderContentSection>
  );
}

export default QuestionHeaderSection;
