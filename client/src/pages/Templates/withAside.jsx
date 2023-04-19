import styled from "styled-components";
import Aside from "../../layouts/Aside/Aside";

const StyledContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

function withAside(Component) {
  return function ({ children, rest }) {
    return (
      <StyledContainer>
        <Component {...rest}>{children}</Component>
        <Aside />
      </StyledContainer>
    );
  };
}

export default withAside;
