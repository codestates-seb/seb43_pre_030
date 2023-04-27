import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledMainSection = styled.div`
  padding-top: 63px;
  display: flex;
  width: 97.2307692rem;
  max-width: 97vw;
  position: relative;
`;

function withPageWrapper(Component) {
  return function ({ children, rest }) {
    return (
      <StyledWrapper>
        <StyledMainSection>
          <Component {...rest}>{children}</Component>
        </StyledMainSection>
      </StyledWrapper>
    );
  };
}

export default withPageWrapper;
