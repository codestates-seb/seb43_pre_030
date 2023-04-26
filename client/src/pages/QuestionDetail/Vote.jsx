import styled from "styled-components";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

// 투표 기능 박스
const StyledVoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0.6rem;
  div {
    margin-top: 1rem;
    padding: 0.5rem 0;
    text-align: center;
    color: var(--font-color-light);
    font-size: 1.4rem;
    font-weight: 400;
  }

  button {
    display: flex;
    width: 2.25rem;
    height: 2.25rem;
    margin: 0.25rem;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;

    .vote-up,
    .vote-down {
      color: var(--userInfo-bg-color);
      width: 3rem;
      height: 3rem;
    }
  }
`;

function Vote() {
  return (
    <StyledVoteWrapper>
      <button type="button">
        <GoTriangleUp className="vote-up" />
      </button>
      <div>0</div>
      <button type="button">
        <GoTriangleDown className="vote-down" />
      </button>
    </StyledVoteWrapper>
  );
}

export default Vote;
