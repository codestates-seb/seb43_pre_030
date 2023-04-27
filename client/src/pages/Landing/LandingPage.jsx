import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import SmallBubble from "./SmallBubble";
import Content from "./Content";
import Record from "./Record";
import BigBubble from "./BigBubbleContainer";

const LandingPageContainer = styled.div`
  padding: 6rem 3rem 3rem 3rem;
  background-color: var(--question-page-bg-color);
  overflow: hidden;

  .grayBox {
    position: relative;
    margin: 0 auto;
    max-width: 1854px;
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
    background: linear-gradient(#232629, #464b51);

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .box {
    height: 50rem;
  }

  .hr {
    width: 5rem;
    height: 0.6rem;
    margin: 4.5rem;
    background-color: #69727c;
    border-radius: 0.5rem;
  }

  .circle {
    position: absolute;
    top: 88%;
    background-color: var(--question-page-bg-color);
    width: 360vw;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    .box {
      height: 100rem;
    }
  }

  @media (max-width: 650px) {
    padding: 5rem 1rem 1rem 1rem;

    .grayBox {
      border-radius: 0.5rem;
      padding: 0rem;
    }
  }
`;

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LandingPageContainer>
      <div className="grayBox">
        <SmallBubble />
        <Content />
        <div className="hr"> </div>
        <Record />
        <BigBubble />
        <div className="circle"> </div>
      </div>
      <div className="box"> </div>
    </LandingPageContainer>
  );
}

export default LandingPage;
