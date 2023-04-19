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

function WritingGuideBox({el}) {
  let title;
  let content;
  let currentForm;

  if(el !== undefined){
    ({ title, content } = el);
  } 

  return (
    <WritingGuideBoxContainer>
      <h1>{title}</h1>
      {content ? content.split(`\n`).map((innerEl, index) => (
        <div key={index}>{innerEl}</div>
      ))
      : null
      }
    </WritingGuideBoxContainer>
  );
}

export default WritingGuideBox;
