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
  border: 2px solid red;

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
      isDoneYet:false,
      isButtonBlocked:false,
      isFormBlocked:false,
    },
    { component: ContentForm,
      title:`What are the details of your problem?`,
      content:`Introduce the problem and expand on what you put in the title. Minimum 20 characters.`,
      isDoneYet:true,
      isButtonBlocked:true,
      isFormBlocked:true,
    },
    { component: ContentForm,
      title:`What did you try and what were you expecting?`,
      content:`Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.`,
      isDoneYet:true,
      isButtonBlocked:true,
      isFormBlocked:true,
    },
    { component: VersatileForm,
      title:`Tags`,
      content:`Add up to 5 tags to describe what your question is about. Start typing to see suggestions.`,
      placeholder:`e.g (.net json vba)`,
      isDoneYet:true,
      isButtonBlocked:true,
      isFormBlocked:true,
    },
    { component: VersatileForm,
      title:`Review questions already on Stack Overflow to see if your question is a duplicate.`,
      content:`Clicking on these questions will open them in a new tab for you to review. Your progress here will be saved so you can come back and continue.`,
      isDoneYet:true,
      isButtonBlocked:true,
      isFormBlocked:true,
    },   
  ]);

  const askController = {
    currentForm,
    infoArr,
    setCurrentForm,
    setInfoArr,
    clickForm: (idx) => {
      setCurrentForm(idx + 1)
    },
    focusForm: (idx) => {
      setCurrentForm(idx)
    },
    clickButton: (idx) => {
      const newInfoArr = [...infoArr];
      newInfoArr[idx].isDoneYet = true; 
      newInfoArr[idx+1].isDoneYet = false; 
      newInfoArr[idx+1].isFormBlocked = false; 

      setInfoArr(newInfoArr); 
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
