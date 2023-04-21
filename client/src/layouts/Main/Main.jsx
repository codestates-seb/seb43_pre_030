import styled from "styled-components";

const StyledContainer = styled.div`
  flex: 1 0 0;
  margin-top: 1rem;
  margin-right: 1rem;
  height: 100%;
`;

function Main({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Main;
