import React, { useState } from "react";
import styled from "styled-components";
import VersatileBlueButton from "./VersatileBlueButton";
import TipBox from "./TipBox";

const ContentFormContainer = styled.div`
  position: relative;
  width: 70%;
  border: 1px solid var(--question-page-form-border-color);
  border-radius: 0.2rem;
  background-color: #fff;
  padding: 1.5rem;
  margin-top: 1rem;

  h1{
    font-size: 1rem;
    font-weight: bolder;
    margin-bottom: 0.4rem;
  }

  div{
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  textarea{
    width: 100%;
    height: 200px;
    padding: 0.4rem 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid #BABFC4;
    outline: none;
  }

  textarea:focus{
    border: 1px solid #59A4DE;
    box-shadow: 0 0 0 0.2rem #59a4de30;
  }
`


function ContentForm({idx, el, askController}) {
  let title;
  let content;
  let isDone;
  let tipTitle;
  let tipContent;
  let currentForm;
  let focusForm;

  if(el !== undefined){
    ({ title, content, isDone, tipTitle, tipContent } = el);
    ({ currentForm, focusForm } = askController)
  } 

  // 버튼 제어 
  const nextButton = isDone ? <VersatileBlueButton text='Next' idx={idx} askController={askController} /> : null;

  return (
    <ContentFormContainer>
      <h1>{title}</h1>
      {content ? content.split(`\n`).map((innerEl, index) => (
        <div key={index}>{innerEl}</div>
      ))
      : null
      }
      <textarea onFocus={()=>{focusForm(idx)}}> </textarea>
      {currentForm === idx ? (
        <>
          <TipBox tipTitle={tipTitle} tipContent={tipContent} />
          {nextButton}
        </>
      ) : null}        
    </ContentFormContainer>
  );
}

export default ContentForm;
