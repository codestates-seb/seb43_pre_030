import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

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


const ContentContainer = styled.div`
  text-align: center;
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
  line-height: 5rem;

  .mainContant{
    color: var(--primary-color);
    /* animation: ${rotate} 2s linear infinite;  */
  }

  @media (max-width: 1024px){
    div{
      display: inline;
    }
    .mainContant{
      display:block
    }
    .subContent{
      display:block
    }
  }

  @media (max-width: 650px){
    font-size: 2.5rem;
    line-height: 3.2rem;
  }
`;

function Content(){


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
    <ContentContainer>
      <div>
        <span>Every </span>  
        <span className="mainContant">{contentList[count]}</span> 
        <span> has a</span>  
      </div>
      <span>tab open to </span> 
      <span className="subContent">Stack Overflow</span> 
  

  </ContentContainer>
  )
}
export default Content;
