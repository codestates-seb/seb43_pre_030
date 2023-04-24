import React, { useMemo, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import NavMenu from "./NavMenu";
import { setNav } from "../../features/navSlice";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to{
    transform: translate(0);
  }
`;

const NavContainer = styled.nav`
  border-right: 1px solid var(--border-default-color);
  width: 100%;
  max-width: 164px;
  font-size: 0.8rem;
  z-index: 10;
  //Looking for your Teams?
  #looking {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    width: 90%;
    color: var(--al-color);
    background-color: #3262c311;
    border-radius: 5px;
    margin: 5%;
  }
  @media screen and (max-width: 768px) {
    display: ${props => (props.display === "true" ? "block" : "none")};
    position: fixed;
    top: 60px;
    left: 0;
    background-color: #f8f9f9;
    height: 100%;
    animation: ${slideIn} 0.2s;
  }
`;

const StyledStickyBox = styled.div`
  position: sticky;
  top: 80px;
`;

function Nav() {
  // 메뉴 목록
  const { nav } = useSelector(s => s);
  const dispatch = useDispatch();
  const menus = useMemo(
    () => [
      { isContent: false, title: `PUBLIC`, route: `/404`, emoji: ``, contentsNav: true },
      { isContent: true, title: `Home`, route: `/`, emoji: `` },
      { isContent: true, title: `Questions`, route: `/questions`, emoji: `` },
      { isContent: true, title: `Tag`, route: `/tags`, emoji: `` },
      { isContent: true, title: `Users`, route: `/users`, emoji: `` },
      { isContent: true, title: `Companies`, route: `/companies`, emoji: `` },
      { isContent: false, title: `COLLECTIVES`, route: `/404`, emoji: `` },
      { isContent: true, title: `Explore Collectives`, route: `/404`, emoji: `` },
      { isContent: false, title: `TEAMS`, route: ``, emoji: `/404` },
      { isContent: true, title: `Create free Team`, route: `/404`, emoji: `` },
    ],
    []
  );

  const onOutSideClick = () => nav && dispatch(setNav());

  useEffect(() => {
    window.addEventListener("click", onOutSideClick);
    return () => {
      window.removeEventListener("click", onOutSideClick);
    };
  }, []);

  return (
    <NavContainer display={nav.toString()}>
      <StyledStickyBox>
        <ul>
          {menus.map(el => (
            <NavMenu key={el.title} el={el} />
          ))}
        </ul>
        <span id="looking">Looking for your Teams?</span>
      </StyledStickyBox>
    </NavContainer>
  );
}

export default Nav;
