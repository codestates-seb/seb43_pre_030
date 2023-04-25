import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const VersatileBlueButtonContainer = styled.div`
  button {
    background-color: var(--btn-bg-color);
    border: var(--btn-bg-color);
    border-radius: 0.2rem;
    color: #fff;
    padding: 0.7rem;
    cursor: pointer;
  }
`;

function VersatileBlueButton({ text, idx, askController, data }) {
  const currentUser = useSelector(s => s.user);
  const navigation = useNavigate();
  const { id, title, body1, body2, tags } = data;

  const body = body1 + body2;
  const user_id = currentUser.id;
  const created_at = new Date();
  const modified_at = new Date();
  const answers = [];

  const postData = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/questions`, {
      title,
      body,
      created_at,
      modified_at,
      user_id,
      answers,
      tags: tags || [],
    });
    navigation("/");
  };

  const { clickForm, clickButton } = askController;

  return (
    <VersatileBlueButtonContainer>
      <button
        type="button"
        onClick={() => {
          clickForm(idx);
          clickButton(idx);
          idx === 4 && postData();
        }}
      >
        {text}
      </button>
    </VersatileBlueButtonContainer>
  );
}

export default VersatileBlueButton;
