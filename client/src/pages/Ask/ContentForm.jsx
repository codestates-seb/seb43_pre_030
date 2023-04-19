import React, { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import styled from "styled-components";
import VersatileBlueButton from "./VersatileBlueButton";
import TipBox from "./TipBox";
import ContentBlocker from "./ContentBlocker";

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
  }

  .MDEditor{
    width: 100%;
    height: 200px;
    margin: 0.6rem 0 0.6rem 0;
    padding: 0.4rem 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid #BABFC4;
    outline: none;
  }

  .MDEditor:focus{
    border: 1px solid #59A4DE;
    box-shadow: 0 0 0 0.2rem #59a4de30;
  }

  .buttonDiv{
    display: inline-block;
    position: relative;
  }
`


function ContentForm({idx, el, askController}) {

  // 받아온 프롭스 구조분해 할당
  const { title, content, isDoneYet, isButtonBlocked, isFormBlocked, tipTitle, tipContent} = el;
  const { currentForm, focusForm, changeWord } = askController;


  // 폼 value 관리 state
  const [QuestionFormValue, setQuestionFormValue] = useState(``)

  const setFormValue = (newValue) => {
    setQuestionFormValue(newValue)
    changeWord(idx, QuestionFormValue)
  }


  // 버튼 제어 
  const nextButton = !isDoneYet ? <VersatileBlueButton text='Next' idx={idx} askController={askController} /> : null;
  const formBlocker = isFormBlocked ? <ContentBlocker /> : null;
  const buttonBlocker = isButtonBlocked ? <ContentBlocker /> : null;

  return (
    <ContentFormContainer>
      {formBlocker}
      <h1>{title}</h1>
      {content ? content.split(`\n`).map((innerEl, index) => (
        <div key={index}>{innerEl}</div>
      ))
      : null
      }
      <MDEditor className="MDEditor" value={QuestionFormValue} onChange={setFormValue} onFocus={()=>{focusForm(idx)}} />

      {currentForm === idx ? (
        <>
          <TipBox tipTitle={tipTitle} tipContent={tipContent} />
          <div className="buttonDiv">
            {buttonBlocker}
            {nextButton}
          </div>
        </>
      ) : null}        
    </ContentFormContainer>
  );
}

export default ContentForm;
