import React, { useState } from "react";
import styled from "styled-components";


const QuestionPageContainer = styled.main`
  border: 2px solid red;

  //해더 마진
  margin: 62px 0 auto;
  max-width: 1264px;
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
  background-color: var(--question-page-bg-color);

  h1{
    font-size: 2rem;
    font-weight: bold;
  }
`


function QuestionPage() {


  return (
    <QuestionPageContainer>
      <h1>Ask a public question</h1>
    </QuestionPageContainer>
  );
}

export default QuestionPage;
