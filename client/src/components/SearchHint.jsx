import styled from "styled-components";
import SearchHintItem from "./SearchHintItem";

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06), 0 3px 8px hsla(0, 0%, 0%, 0.09);
  background-color: #fff;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  transform: translateY(1rem);
  &::after {
    content: "";
    width: 15px;
    height: 15px;
    background-color: #fff;
    transform: rotate(45deg);
    position: absolute;
    top: -7.25px;
    box-shadow: -1px -1px 1px 0 hsla(0, 0%, 0%, 0.12);
  }
`;

function SearchHint() {
  const test = [1, 2, 3];
  return (
    <StyledContainer>
      {test.map(a => (
        <SearchHintItem key={a} />
      ))}
    </StyledContainer>
  );
}

export default SearchHint;
