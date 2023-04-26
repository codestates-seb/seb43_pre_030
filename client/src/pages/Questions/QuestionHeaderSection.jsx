import { useSelector } from "react-redux";
import styled from "styled-components";
import HeaderContentSection from "../../components/HeaderContentSection";
import FilterButtons from "../../components/FilterButtons";

const StyledText = styled.h2`
  font-size: 1.5rem;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

function QuestionHeaderSection({ title }) {
  const data = useSelector(s => s.data);
  return (
    <HeaderContentSection title={title}>
      <StyledText>{data.length}개의 질문이 있습니다.</StyledText>
      <FilterButtons buttons={["hottest", "newest", "oldest"]} />
    </HeaderContentSection>
  );
}

export default QuestionHeaderSection;
