import styled from "styled-components";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import HeaderButtonContainer from "../components/HeaderButtonContainer";
import HeaderMenu from "../components/HeaderMenu";

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
  z-index: 10;
`;
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  min-width: 85vw;
  gap: 1rem;
  @media screen and (max-width: 780px) {
    min-width: 95vw;
  }
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
