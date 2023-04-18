import React, { useState } from "react";
import styled from "styled-components";


const WritingGuideBoxContainer = styled.div`
  width: 70%;
  border: 1px solid #A5CFED;
  border-radius: 0.2rem;
  background-color:#EBF4FA;
  padding: 1.5rem;
  margin-top: 1rem;

  h1{
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }
`

function WritingGuideBox({title, content}) {


  return (
    <WritingGuideBoxContainer>
      <h1>{title}</h1>
      {content.split(`\n`).map((el, index) => (
        <div key={index}>{el}</div>
      ))}
    </WritingGuideBoxContainer>
  );
}

export default WritingGuideBox;

