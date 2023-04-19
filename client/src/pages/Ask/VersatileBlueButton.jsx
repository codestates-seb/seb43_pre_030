import React, { useState } from "react";
import styled from "styled-components";


const VersatileBlueButtonContainer = styled.div`
  button{
    background-color: var(--btn-bg-color);
    border: var(--btn-bg-color);
    border-radius: 0.2rem;
    color: #fff;
    padding: 0.7rem;
    margin-top: 0.7rem;
    cursor: pointer;
  }
`


function VersatileBlueButton({text, idx, askController}) {

  let clickForm;
  let clickButton;
  let infoArr;

  if(askController !== undefined){
    ({infoArr, clickForm, clickButton } = askController);
  } 

  console.log(infoArr[idx].isDone)

  return (
    <VersatileBlueButtonContainer>
      <button type="button" onClick={()=>{clickForm(idx); clickButton(idx);}}>{text}</button>
    </VersatileBlueButtonContainer>
  );
}

export default VersatileBlueButton;
