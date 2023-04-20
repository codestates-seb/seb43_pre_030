import styled from "styled-components";
import Aside from "../../layouts/Aside/Aside";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
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

// withAside(Login) -> 어사이드가 붙은 컴포넌트가 리턴

// 컴포지션 -> 합성 : 자바스크립트 프로그래밍에서 함수형 프로그래밍 :
