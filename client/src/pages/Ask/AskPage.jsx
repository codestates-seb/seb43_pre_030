import styled from "styled-components";
import WritingGuideBox from "./WritingGuideBox";
import VersatileForm from "./VersatileForm";

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
  const WritingGuideTitle = `Writing a good question`;
  const WritingGuideContent = `You’re ready to ask a programming-related question and this form will help guide you through the process.
  \nLooking to ask a non-programming question? See the topics here to find a relevant site.`;

  const titleTitle = `Title`;
  const titleContent = `Be specific and imagine you’re asking a question to another person.`;
  const titlePlaceholder = `e.g. ls there an R function for finding the index of an element in a vector?`;

  const tagsTitle = `Tags`;
  const tagsContent = `Add up to 5 tags to describe what your question is about. Start typing to see suggestions.`;
  const tagsPlaceholder = `e.g (.net json vba)`;

  const ReviewTitle = `Review questions already on Stack Overflow to see if your question is a duplicate.`;
  const ReviewContent = `Clicking on these questions will open them in a new tab for you to review. Your progress here will be saved so you can come back and continue.`;

  const tipTitle = `Tip!`;
  const tipContent = `Tip!Review Be specific and imagine you’re asking a question to another person. \nLooking to ask a non-programming question? See the topics here to `;

  return (
    <QuestionPageWapper>
      <QuestionPageContainer>
        <h1>Ask a public question</h1>
        <WritingGuideBox title={WritingGuideTitle} content={WritingGuideContent} />
        <VersatileForm
          title={titleTitle}
          content={titleContent}
          placeholder={titlePlaceholder}
          tipTitle={tipTitle}
          tipContent={tipContent}
        />
        <VersatileForm title={tagsTitle} content={tagsContent} placeholder={tagsPlaceholder} />
        <VersatileForm title={ReviewTitle} content={ReviewContent} />
      </QuestionPageContainer>
    </QuestionPageWapper>
  );
}

export default AskPage;
