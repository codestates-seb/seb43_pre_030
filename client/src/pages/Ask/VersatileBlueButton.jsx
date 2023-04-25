import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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


function VersatileBlueButton({text, idx, askController, data}) {

  const { id, title, body1, body2, tags} = data;

  const body = body1 + body2;
  const user_id = null;
  const created_at = new Date();
  const modified_at = new Date()


  const postData = async() => {
    console.log(data)
    await axios.post(`http://localhost:3001/questions`, {id, title, body, created_at, modified_at, user_id, tags})
  }


  const { clickForm, clickButton } = askController;
  

  return (
    <VersatileBlueButtonContainer>
      <button type="button" onClick={() => { clickForm(idx); clickButton(idx); idx === 4 && postData() }}>{text}</button>
    </VersatileBlueButtonContainer>
  );
}

export default VersatileBlueButton;
