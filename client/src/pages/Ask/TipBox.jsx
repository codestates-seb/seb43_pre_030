import React, { useState } from "react";
import styled from "styled-components";


const TipBoxContainer = styled.div`
  position: absolute;
  top: -1rem;
  left: 110%;
  width: 30%;
  border: 1px solid var(--question-page-form-border-color);
  border-radius: 0.2rem;
  background-color:var(--question-page-bg-color);
  margin-top: 1rem;
  border: 1px solid #D6D9DC;
  box-shadow: 0 2px 5px 1px #D6D9DC;

  h1{
    font-size: 1rem;
    font-weight: normal;
    padding: 1rem;
  }

  & .divContainer{
    background-color: #fff;
    padding: 1rem;
    font-size: 0.8rem;
    border-top: 1px solid #D6D9DC;
    border-bottom-right-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
  }
`


function TipBox({tipTitle, tipContent}) {


  return (
    <TipBoxContainer>
      <h1>{tipTitle}</h1>
        <div className="divContainer">
        {tipContent ? tipContent.split(`\n`).map((el, idx) => (
          <div key={idx}>{el}</div>
        ))
        : null
        }
      </div>
    </TipBoxContainer>
  );
}

export default TipBox;