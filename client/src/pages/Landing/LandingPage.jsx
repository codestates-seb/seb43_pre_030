import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import lock from './1.png'
import glass from './2.png'
import stackOverflow from './3.svg'
import forTeams from './4.svg'
import Logo from "../../layouts/Header/Logo";

  const rotate = keyframes`
  0%{
      opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{

  }
  `;


const LandingPageWrapper = styled.div`
  position: relative;
  padding: 7rem 4rem;
  padding-bottom: 50rem;
  background-color: var(--question-page-bg-color);
  overflow: hidden;
`

const LandingPageContainer = styled.div`
  background-color: #3B4045;
  border-radius: 1rem;
  height: 940px;
  max-width: 1854px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hr{
    margin: 4.5rem;
    width: 5rem;
    height: 0.6rem;
    background-color: #69727C;
    border-radius: 0.5rem;
  }

  .cricle{
    position: absolute;
    top:53.1%;
    background-color: var(--question-page-bg-color);
    width: 360vw;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }
`
const SmallBubbleContainer = styled.div`
  display: flex;
  justify-content: center;

  & > div{
    margin-top: 2rem;
    max-width: 948px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .lSmallBubble, .rSmallBubble{
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    margin: 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;

    img{
      width: 5rem;
      height: 5rem;
    }

    span{
      color: #232629;
      margin: 1rem;
      line-height: 1.5rem;
    }

    button{
      border: none;
      border-radius: 0.2rem;
      width: 14rem;
      color: #fff;
      padding: 0.8rem 2rem; 
      margin-bottom: 1rem;
    }

    a{
      font-size: 0.8rem;
      color: #535B60;
      text-decoration: underline;
    }
  }

  .lSmallBubble{
    background-color: #FDE3CD;
    button{
      background-color: var(--primary-color);
    }
  }

  .rSmallBubble{
    background-color: #CCE8FE;
    button{
      background-color: var(--btn-bg-color)
    }
  }

`
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  transition: 1s;

  & > div{
    margin-top: 7rem;
    text-align: center;
    max-width: 948px;
    width: 100%;
    transition: 1s;

    div{
      color: #fff;
      font-size: 4rem;
      font-weight: bold;
      line-height: 5rem;
      transition: 1s;

      span{
        display: inline-block;
        color: var(--primary-color);
        /* animation: ${rotate} 2s linear infinite;  */
      }
    }
  }

`
const Record = styled.div`
  display: flex;
  justify-content: center;

  & > div{
    max-width: 948px;
    width: 100%;
    display: flex;

    div{
      flex: 1;
      text-align: center;
      color: #9EA6AC;
      padding: 0 2rem;

      span{
        line-height: 1.3rem;
      }

      h2{
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
    }
  }
`
const BigBubbleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);

  max-width: 1104px;
  width: 100%;
  display: flex;
  justify-content: center;

  .lBigBubble, .rBigBubble{
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    margin: 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05), 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 1rem 3rem rgba(0, 0, 0, 0.1);


    img{
      width: 100%;
      margin: 4rem 0;
    }

    span{
      color: #232629;
      margin: 2rem 0;
      line-height: 1.5rem;
    }

    h1{
      font-size: 2rem;
      font-weight: bold;
      line-height: 2.5rem;
    }
    
    button{
      border: none;
      border-radius: 0.2rem;
      width: 14rem;
      color: #fff;
      padding: 0.8rem 2rem; 
      margin-bottom: 1rem;
    }

    a{
      font-size: 0.8rem;
      color: #535B60;
      text-decoration: underline;
    }

  }

  .lBigBubble{
    background-color: #FDE3CD;
    button{
      background-color: var(--primary-color);
    }
  }

  .rBigBubble{
    background-color: #CCE8FE;
    button{
      background-color: var(--btn-bg-color);
      width: auto;
      margin: 0 1rem;
    }
  }
`

function LandingPage(){

  const contentList = ['developerdata', 'scientistsystem', 'adminmobile', 'developergame', 'developer'];
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 매 1초마다 count를 1씩 증가시킵니다.
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount+1) % contentList.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return(
    <LandingPageWrapper> 
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
            Every <span className="mainContant">{contentList[count]}</span> has a
          </div>
          <div className="bottomContent">
            tab open to Stack Overflow
          </div>
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

      <div className="cricle"> </div>

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

      </LandingPageContainer>
    </LandingPageWrapper>
  )
}

export default LandingPage;
