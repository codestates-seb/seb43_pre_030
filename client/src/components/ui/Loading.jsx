import React from "react";
import styled from "styled-components";
import LoadingSpinner from "../../images/LoadingSpinner.gif";

const StyledBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
`;

const LoadingText = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
`;

// 로딩화면
function Loading() {
  return (
    <StyledBg>
      <LoadingText>Loading...</LoadingText>
      <img src={LoadingSpinner} alt="Loading" width="5%" />
    </StyledBg>
  );
}

export default Loading;
