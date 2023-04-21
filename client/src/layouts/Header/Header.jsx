import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderButtonContainer from "./HeaderButtonContainer";
import HeaderMenu from "./HeaderMenu";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9f9;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-top: 3px solid var(--primary-color);
  z-index: 100;
`;
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 97.2307692rem;
  max-width: 97vw;
  gap: 1rem;
`;
function Header({ logIn, currentUser }) {
  return (
    <StyledWrapper>
      <StyledHeader>
        <Logo />
        <SearchBar />
        {currentUser ? <HeaderMenu /> : <HeaderButtonContainer logIn={logIn} />}
      </StyledHeader>
    </StyledWrapper>
  );
}

export default Header;
