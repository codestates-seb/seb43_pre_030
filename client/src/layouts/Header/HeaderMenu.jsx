import { AiOutlineUser } from "react-icons/ai";
import { BsMenuUp, BsSun, BsSunFill } from "react-icons/bs";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { StyledDropDown } from "../../styles/StyledDropDown";
import { useDropDown } from "../../hooks/useDropDown";
import { ButtonMain } from "../../components/ui/ButtonMain";
import { setUser } from "../../features/userSlice";

const StyledMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  > * {
    cursor: pointer;
  }
`;

const StyledMenuDropDown = styled(StyledDropDown)`
  top: 100%;
  right: -0.5rem;
  min-width: 180px;
  color: var(--al-color);
  cursor: auto;
  &::after {
    position: absolute;
    right: 5%;
  }
`;
const StyledFlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledWrapper = styled.div`
  position: relative;
`;

function HeaderMenu() {
  const [menuDropDown, _, onMenuClick] = useDropDown(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const logOut = () => {
    axios(`${process.env.REACT_APP_API_URL}/user/logout`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(res => {
        localStorage.removeItem("token");
        dispatch(setUser(""));
        navigation("/");
      })
      .catch(err => alert("로그아웃에 실패했습니다."));
  };
  return (
    <StyledMenuContainer>
      <Link to="/users">
        <AiOutlineUser size="2rem" color="var(--font-color-light)" />
      </Link>
      <StyledWrapper>
        <BsMenuUp size="2rem" color="var(--font-color-light)" onClick={onMenuClick} />
        {menuDropDown && (
          <StyledMenuDropDown onClick={e => e.stopPropagation()}>
            <StyledFlexBox>
              <ButtonMain onClick={logOut}>log out</ButtonMain>
              <BsSunFill size="1.5rem" cursor="pointer" />
            </StyledFlexBox>
          </StyledMenuDropDown>
        )}
      </StyledWrapper>
    </StyledMenuContainer>
  );
}

export default HeaderMenu;
