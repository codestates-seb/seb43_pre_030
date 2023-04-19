import { useState } from 'react';
import styled from "styled-components";
import WritingGuideBox from "./WritingGuideBox";
import VersatileForm from "./VersatileForm";
import ContentForm from './ContentForm';

const QuestionPageWapper = styled.main`
  min-height: 100vh;
  background-color: var(--question-page-bg-color);
`;

const QuestionPageContainer = styled.main`

  //해더 마진
  margin: 0 auto;
  max-width: 1264px;
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;

  & > h1 {
    margin-top: 70px;
    font-size: 2rem;
    font-weight: bold;
  }
`;


function AskPage() {

  // 현재 페이지 state
  const [currentForm, setCurrentForm] = useState(1)

  const [infoArr, setInfoArr ] = useState([
    { component: WritingGuideBox,
      title:`Writing a good question`,
      content:`You’re ready to ask a programming-related question and this form will help guide you through the process. \nLooking to ask a non-programming question? See the topics here to find a relevant site.`,
    },
    { component: VersatileForm,
      title:`Title`,
      content:`Be specific and imagine you’re asking a question to another person.`,
      placeholder:`e.g. ls there an R function for finding the index of an element in a vector?`,
      tipTitle:`Writing a good title`,
      tipContent:`Your title should summarize the problem.\nYou might find that you have a better idea of your title after writing out the rest of the question.`,
      isDoneYet:false,
      isButtonBlocked:false,
      isFormBlocked:false,
    },
    { component: ContentForm,
      title:`What are the details of your problem?`,
      content:`Introduce the problem and expand on what you put in the title. Minimum 20 characters.`,
      tipTitle:`Introduce the problem`,
      tipContent:`Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.`,
      isDoneYet:true,
      isButtonBlocked:true,
      isFormBlocked:true,
    },
    { component: ContentForm,
      title:`What did you try and what were you expecting?`,
      content:`Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.`,
      tipTitle:`Expand on the problem`,
      tipContent:`Show what you’ve tried, tell us what happened, and why it didn’t meet your needs.\nNot all questions benefit from including code, but if your problem is better understood with code you’ve written, you should include a minimal, reproducible example.\nPlease make sure to post code and errors as text directly to the question (and not as images), and format them appropriately.`,
      isDoneYet:true,
      isButtonBlocked:true,
      isFormBlocked:true,
    },
    { component: VersatileForm,
      title:`Tags`,
      content:`Add up to 5 tags to describe what your question is about. Start typing to see suggestions.`,
      placeholder:`e.g (.net json vba)`,
      tipTitle:`Adding tags`,
      tipContent:`Tags help ensure that your question will get attention from the right people.\nTag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.\nLearn more about tagging`,
      isDoneYet:true,
      isButtonBlocked:false,
      isFormBlocked:true,
    },
    { component: VersatileForm,
      title:`Review questions already on Stack Overflow to see if your question is a duplicate.`,
      content:`Clicking on these questions will open them in a new tab for you to review. Your progress here will be saved so you can come back and continue.`,
      isDoneYet:true,
      isButtonBlocked:false,
      isFormBlocked:true,
    },   
  ]);

  const askController = {
    currentForm,
    infoArr,
    setCurrentForm,
    setInfoArr,

    // 폼을 클릭했을 때 클릭 한 폼을 현재 폼으로 변경하는 함수
    focusForm: (idx) => {
      setCurrentForm(idx)
    },

    // Next를 클릭했을 때 다음 오는 폼을 현재 폼으로 변경하는 함수
    clickForm: (idx) => {
      setCurrentForm(idx + 1)
    },

    // Next를 눌렸을 때 다음 폼의 버튼을 생성하고, 폼을 활성화 시키는 함수 
    clickButton: (idx) => {
      const newInfoArr = [...infoArr];
      newInfoArr[idx].isDoneYet = true; 
      newInfoArr[idx+1].isDoneYet = false; 
      newInfoArr[idx+1].isFormBlocked = false; 

      setInfoArr(newInfoArr); 
    },

    // 폼의 value가 바뀔 때  Regex로 변경
    changeWord: (idx, QuestionFormValue) => {
      if((idx === 1 || 2 || 3) && QuestionFormValue.length >= 15){
        const newInfoArr = [...infoArr];
        newInfoArr[idx].isButtonBlocked = false; 

        setInfoArr(newInfoArr); 
      }
    }
  }

  return (
    <QuestionPageWapper>
      <QuestionPageContainer>
        <h1>Ask a public question</h1>
        
        {infoArr.map((el, idx) => {
          const Component = el.component;
          return <Component key={idx} idx={idx} el={el} askController={askController}/>;
        })}
        
      </QuestionPageContainer>
    </QuestionPageWapper>
  );
}

export default AskPage;
