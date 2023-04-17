import styled from "styled-components";

const StyledContainer = styled.div`
  flex: 1 0 0;
  margin-top: 1rem;
`;

function Main({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Main;
