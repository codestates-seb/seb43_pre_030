import React, { useState } from "react";
import styled from "styled-components";


const VersatileFormContainer = styled.div`
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

  input{
    width: 100%;
    padding: 0.4rem 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid #BABFC4;
    outline: none;
  }

  input:focus{
    border: 1px solid #59A4DE;
    box-shadow: 0 0 0 0.2rem #59a4de30;
  }
`


function VersatileForm({title, content, placeholder}) {

  const [QuestionFormValue, setQuestionFormValue] = useState(``)
  const setFormValue = (e) => {
    setQuestionFormValue(e.target.value)
  }

  return (
    <VersatileFormContainer>
      <h1>{title}</h1>
      {content.split(`\n`).map((el, idx) => (
        <div key={idx}>{el}</div>
      ))}
      <input type="text" placeholder={placeholder}
      value={QuestionFormValue} onChange={(e) => (setFormValue(e))}/>
    </VersatileFormContainer>
  );
  
}

export default VersatileForm;
