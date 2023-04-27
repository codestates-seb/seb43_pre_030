import styled from "styled-components";
import { StyledTitle } from "../../styles/StyledTItle";
import SolutionItem from "./SolutionItem";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledDescription = styled.p`
  font-size: 1.5rem;
`;

function Content() {
  return (
    <StyledContainer>
      <StyledTitle>Page not found</StyledTitle>
      <StyledDescription>{`We're sorry, we couldn't find the page you requested.`}</StyledDescription>
      <SolutionItem />
    </StyledContainer>
  );
}

export default Content;
