import styled from "styled-components";
import { BsFillPencilFill } from "react-icons/bs";

const TipBoxContainer = styled.div`
  position: absolute;
  top: -1rem;
  left: 72%;
  width: 28%;
  border-radius: 0.2rem;
  background-color: var(--question-page-bg-color);
  margin-top: 1rem;
  border: 1px solid #d6d9dc;
  box-shadow: 0 2px 5px 1px #d6d9dc;

  h1 {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 1rem;
  }

  & .divContainer {
    background-color: #fff;
    display: flex;
    padding: 1rem;
    font-size: 0.9rem;
    gap: 1rem;
    border-top: 1px solid #d6d9dc;
    border-bottom-right-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    display: flex;
  }

  div {
    margin-bottom: 0.5rem;
  }

  img {
    width: 5rem;
    height: 5rem;
    margin-right: 2rem;
  }

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }
`;
const StyledIcon = styled.div`
  font-size: 2rem;
`;

function TipBox({ tipTitle, tipContent }) {
  return (
    <TipBoxContainer>
      <h1>{tipTitle}</h1>
      <div className="divContainer">
        <StyledIcon>
          <BsFillPencilFill />
        </StyledIcon>
        <div>{tipContent ? tipContent.split(`\n`).map((el, idx) => <div key={idx}>{el}</div>) : null}</div>
      </div>
    </TipBoxContainer>
  );
}

export default TipBox;
