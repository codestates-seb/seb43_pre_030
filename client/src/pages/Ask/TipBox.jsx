import React, { useState } from "react";
import styled from "styled-components";
import monami from "./monami.jpg"


const TipBoxContainer = styled.div`
  position: absolute;
  top: -1rem;
  left: 72%;
  width: 28%;
  border-radius: 0.2rem;
  background-color:var(--question-page-bg-color);
  margin-top: 1rem;
  border: 1px solid #D6D9DC;
  box-shadow: 0 2px 5px 1px #D6D9DC;

  h1{
    font-size: 1.1rem;
    font-weight: bold;
    padding: 1rem;
  }

  & .divContainer{
    background-color: #fff;
    padding: 1rem;
    font-size: 0.9rem;
    border-top: 1px solid #D6D9DC;
    border-bottom-right-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    display: flex;
  }

  div{
    margin-bottom: 0.5rem;
  }

  img{
    width: 5rem;
    height: 5rem;
    margin-right: 2rem;
  }

  @media (max-width: 1024px){
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }
`


function TipBox({tipTitle, tipContent}) {


  return (
    <TipBoxContainer>
      <h1>{tipTitle}</h1>
      <div className="divContainer">
        {/* 경로가 이상해 */}
        <img src={monami} alt="monami" />
        <div>
          {tipContent ? tipContent.split(`\n`).map((el, idx) => (
            <div key={idx}>{el}</div>
          ))
          : null
          }
        </div>
      </div>
    </TipBoxContainer>
  );
}

export default TipBox;
