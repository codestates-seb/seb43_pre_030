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
  const user_name = currentUser.name;
  const answers = [];
  console.log(tags);
  const postData = async () => {
    console.log("test");
    await axios.post(
      `${process.env.REACT_APP_API_URL}/questions`,
      {
        question: {
          title,
          body,
          user_id,
          user_name,
        },
        tag: typeof tags === "object" ? tags : [],
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
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
          idx === 3 && postData();
        }}
      >
        {text}
      </button>
    </VersatileBlueButtonContainer>
  );
}

export default VersatileBlueButton;
