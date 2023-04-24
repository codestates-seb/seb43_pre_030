import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import SearchHint from "./SearchHint";
import useInput from "../../hooks/useInput";

const StyledInputContainer = styled.div`
  position: relative;

  color: var(--font-color-bold);
  > div:first-child {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 15%;
    left: 0.5rem;
    font-size: 1.5rem;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
const StyledForm = styled.form`
  flex: 1 0 0;
`;
const StyledInput = styled.input`
  border: 1.5px solid #babfc4;
  outline: none;
  width: 100%;
  border-radius: 3px;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;
function SearchBar() {
  const [valProps, setValue] = useInput("");

  const [showHint, setShowHint] = useState(false);
  const onSubmitHandler = e => {
    e.preventDefault();
    setValue("");
  };

  const invertShowState = () => {
    setShowHint(prev => !prev);
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledInputContainer>
        <div>
          <AiOutlineSearch color="#838c95" />
        </div>
        <StyledInput placeholder="Search..." onFocus={invertShowState} onBlur={invertShowState} {...valProps} />
        {showHint && <SearchHint />}
      </StyledInputContainer>
    </StyledForm>
  );
}

export default SearchBar;
