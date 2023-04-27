import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import stackOverflow from './3.svg'
import forTeams from './4.svg'
import Logo from "../../layouts/Header/Logo";

const BigBubbleContainer = styled.div`
  position: absolute;
  top: 80%;
  display: flex;
  z-index: 1;
  
  .lBigBubble,
  .rBigBubble {
    max-width: 37rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 3rem;
    margin: 1rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05), 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 1rem 3rem rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      margin: 4rem 0;
    }

    span {
      color: #232629;
      margin: 2rem 0;
      line-height: 1.5rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
      line-height: 2.5rem;
    }

    button {
      color: #fff;
      width: 14rem;
      padding: 0.8rem 2rem;
      margin-bottom: 1rem;
      border: none;
      border-radius: 0.2rem;
    }

    a {
      color: #535b60;
      font-size: 0.8rem;
      text-decoration: underline;
    }
  }

  .lBigBubble {
    background:linear-gradient(#fff, #fde3cd);
    button {
      background-color: var(--primary-color);
    }
  }

  .rBigBubble {
    background:linear-gradient(#fff, #cce8fe);
    button {
      background-color: var(--btn-bg-color);
      width: auto;
      margin: 0 1rem;
    }
  }

  @media (max-width: 768px){
    display: block;
    max-width: 100%;
    top: 85%;
  }
`;

function BigBubble(){
  return(
    <BigBubbleContainer>
    <div className="lBigBubble">
      <Logo />
      <img src={stackOverflow} alt="" />
      <h1>public platform building the definitive collection of coding questions & answers </h1>
      <span>A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.</span>
      <button type="button">Join the community</button>
      <a href="/">or search content</a>
    </div>
    <div className="rBigBubble">
      <Logo />
      <img src={forTeams} alt="" />
      <h1>A private collaboration & knowledge sharing SaaS platform for companies</h1>
      <span>A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge</span>
      <div>
        <button type="button">Discover Teams</button>
        <button type="button">Discover Teams</button>
      </div>
    </div>
  </BigBubbleContainer>
  )
}
export default BigBubble;