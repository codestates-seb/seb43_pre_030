import React, { useState } from "react";
import styled from "styled-components";


const VersatileBlueButtonContainer = styled.div`
  button{
    background-color: var(--btn-bg-color);
    border: var(--btn-bg-color);
    border-radius: 0.2rem;
    color: #fff;
    padding: 0.7rem;
    cursor: pointer;
  }
`


function VersatileBlueButton({text, idx, askController}) {

  let clickForm;
  let clickButton;

  if(askController !== undefined){
    ({ clickForm, clickButton } = askController);
  } 

  return (
    <VersatileBlueButtonContainer>
      <button type="button" onClick={()=>{clickForm(idx); clickButton(idx);}}>{text}</button>
    </VersatileBlueButtonContainer>
  );
}

export default VersatileBlueButton;
