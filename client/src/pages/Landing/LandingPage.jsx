import { useState, useEffect } from "react";
import styled from "styled-components";
import lock from "./1.png";
import glass from "./2.png";
import stackOverflow from "./3.svg";
import forTeams from "./4.svg";
import Logo from "../../layouts/Header/Logo";

const LandingPageWrapper = styled.div`
  position: relative;
  padding: 7rem 4rem;
  padding-bottom: 50rem;
  background-color: var(--question-page-bg-color);

  main {
    max-width: 1854px;
    margin: 0 auto;
  }
`;

const LandingPageContainer = styled.div`
  background-color: #3b4045;
  border-radius: 1rem;
  height: 950px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .hr {
    margin: 5rem;
    width: 5rem;
    height: 0.6rem;
    background-color: #69727c;
    border-radius: 0.5rem;
  }
`;
const SmallBubbleContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;

  & > div {
    margin-top: 2rem;
    border: 1px solid blue;
    max-width: 948px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .lSmallBubble,
  .rSmallBubble {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    margin: 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;

    img {
      width: 5rem;
      height: 5rem;
    }

    span {
      color: #232629;
      margin: 1rem;
    }

    button {
      border: none;
      border-radius: 0.2rem;
      width: 14rem;
      color: #fff;
      padding: 0.8rem 2rem;
      margin-bottom: 1rem;
    }

    a {
      font-size: 0.8rem;
      color: #535b60;
      text-decoration: underline;
    }
  }

  .lSmallBubble {
    background-color: #fde3cd;
    button {
      background-color: var(--primary-color);
    }
  }

  .rSmallBubble {
    background-color: #cce8fe;
    button {
      background-color: var(--btn-bg-color);
    }
  }
`;
const ContentContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;

  & > div {
    margin-top: 8rem;
    text-align: center;
    border: 1px solid green;
    max-width: 948px;
    width: 100%;

    div {
      color: #fff;
      font-size: 4rem;
      font-weight: bold;
      span {
        color: var(--primary-color);
      }
    }
  }
`;
const Record = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    border: 1px solid red;
    max-width: 948px;
    width: 100%;
    display: flex;

    div {
      flex: 1;
      border: 1px solid blue;
      text-align: center;
      color: #9ea6ac;
      padding: 0 2rem;

      h2 {
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
    }
  }
`;
const BigBubbleContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, 0);

  border: 2px solid blue;
  max-width: 1104px;
  width: 100%;
  display: flex;
  justify-content: center;

  .lBigBubble,
  .rBigBubble {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    margin: 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;

    img {
      width: 100%;
      margin: 4rem 0;
    }

    span {
      color: #232629;
      margin: 2rem 0;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
    }

    button {
      border: none;
      border-radius: 0.2rem;
      width: 14rem;
      color: #fff;
      padding: 0.8rem 2rem;
      margin-bottom: 1rem;
    }

    a {
      font-size: 0.8rem;
      color: #535b60;
      text-decoration: underline;
    }
  }

  .lBigBubble {
    background-color: #fde3cd;
    button {
      background-color: var(--primary-color);
    }
  }

  .rBigBubble {
    background-color: #cce8fe;
    button {
      background-color: var(--btn-bg-color);
      width: auto;
      margin: 0 1rem;
    }
  }
`;

function LandingPage() {
  const contentList = ["developerdata", "scientistsystem", "adminmobile", "developergame", "developer"];
  const [mainContent, setContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(prev => {
        const nextContent = prev + 1;
        if (nextContent >= contentList.length) {
          return 0;
        }
        return nextContent;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LandingPageWrapper>
      <main>
        <LandingPageContainer>
          <SmallBubbleContainer>
            <div>
              <div className="lSmallBubble">
                <img src={glass} alt="" />
                <span>Find the best answer to your technical question, help others answer theirs</span>
                <button type="button">Join the community</button>
                <a href="/">or search content</a>
              </div>
              <div className="rSmallBubble">
                <img src={lock} alt="" />
                <span>Want a secure, private space for your technical knowledge?</span>
                <button type="button">Discover Teams</button>
              </div>
            </div>
          </SmallBubbleContainer>

          <ContentContainer>
            <div>
              <div className="topContent">
                Every <span className="mainContant">{contentList[mainContent]}</span> has a
              </div>
              <div className="bottomContent">tab open to Stack Overflow</div>
            </div>
          </ContentContainer>

          <div className="hr"> </div>

          <Record>
            <div>
              <div>
                <h2>100+ million</h2>
                <span>monthly visitors to Stack Overflow & Stack Exchange</span>
              </div>
              <div>
                <h2>45.1+ billion</h2>
                <span>Times a developer got help since 2008</span>
              </div>
              <div>
                <h2>191% ROI</h2>
                <span>from companies using Stack Overflow for Teams</span>
              </div>
              <div>
                <h2>5,000+</h2>
                <span>Stack Overflow for Teams instances active every day</span>
              </div>
            </div>
          </Record>

          <BigBubbleContainer>
            <div className="lBigBubble">
              <Logo />
              <img src={stackOverflow} alt="" />
              <h1>public platform building the definitive collection of coding questions & answers </h1>
              <span>
                A community-based space to find and contribute answers to technical challenges, and one of the most
                popular websites in the world.
              </span>
              <button type="button">Join the community</button>
              <a href="/">or search content</a>
            </div>
            <div className="rBigBubble">
              <Logo />
              <img src={forTeams} alt="" />
              <h1>A private collaboration & knowledge sharing SaaS platform for companies</h1>
              <span>
                A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and
                protect institutional knowledge
              </span>
              <div>
                <button type="button">Discover Teams</button>
                <button type="button">Discover Teams</button>
              </div>
            </div>
          </BigBubbleContainer>
        </LandingPageContainer>
      </main>
    </LandingPageWrapper>
  );
}

export default LandingPage;
