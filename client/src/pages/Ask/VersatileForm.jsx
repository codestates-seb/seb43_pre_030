import React, { useState } from "react";
import styled from "styled-components";
import TipBox from "./TipBox";
import VersatileBlueButton from "./VersatileBlueButton";
import ContentBlocker from "./ContentBlocker";

const VersatileFormContainer = styled.div`
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

  .div{
    font-size: 0.8rem;
  }

  input{
    width: 100%;
    margin: 0.6rem 0 0.6rem 0;
    padding: 0.4rem 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid #BABFC4;
    outline: none;
  }

  input:focus{
    border: 1px solid #59A4DE;
    box-shadow: 0 0 0 0.2rem #59a4de30;
  }

  .buttonDiv{
    display: inline-block;
    position: relative;
  }
`


function VersatileForm({idx, el, askController}) {

  // 받아온 프롭스 구조분해 할당
  const { title, content, placeholder, isDoneYet, isButtonBlocked, isFormBlocked, tipTitle, tipContent } = el;
  const { currentForm, focusForm} = askController;


  // 폼 value 관리 state
  const [QuestionFormValue, setQuestionFormValue] = useState(``)
  
  const setFormValue = (e) => {
    setQuestionFormValue(e.target.value)
  }


  // 버튼 제어 
  const nextButton = !isDoneYet ? <VersatileBlueButton text='Next' idx={idx} askController={askController}/> : null;
  const formBlocker = isFormBlocked ? <ContentBlocker /> : null;
  const buttonBlocker = isButtonBlocked ? <ContentBlocker /> : null;

  return (
    <VersatileFormContainer>
      {formBlocker}
      <h1>{title}</h1>
      {content ? content.split(`\n`).map((innerEl, index) => (
        <div key={index}>{innerEl}</div>
      ))
      : null
      }
      <input type="text" placeholder={placeholder}
      value={QuestionFormValue} onChange={(e) => (setFormValue(e))} 
      onFocus={() => {focusForm(idx)}} />

      {currentForm === idx ? (
        <>
          <TipBox tipTitle={tipTitle} tipContent={tipContent} />
          <div className="buttonDiv">
            {buttonBlocker}
            {nextButton}
          </div>
        </>
      ) : null}    
  </VersatileFormContainer>
  );
  
}

export default VersatileForm;
