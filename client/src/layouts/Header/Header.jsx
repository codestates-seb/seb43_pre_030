import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderButtonContainer from "./HeaderButtonContainer";
import HeaderMenu from "./HeaderMenu";
import NavButton from "./NavButton";
import { setNav } from "../../features/navSlice";

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
function Header() {
  const currentUser = useSelector(s => s.user);
  const dispatch = useDispatch();
  const onNavClick = e => {
    e.stopPropagation();
    dispatch(setNav());
  };
  return (
    <StyledWrapper>
      <StyledHeader>
        <NavButton onNavBtnClick={onNavClick} />
        <Logo />
        <SearchBar />
        {currentUser ? <HeaderMenu /> : <HeaderButtonContainer />}
      </StyledHeader>
    </StyledWrapper>
  );
}

export default Header;
