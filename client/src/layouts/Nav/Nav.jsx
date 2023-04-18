import React, { useState } from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";

const NavContainer = styled.nav`
  border-right: 1px solid var(--border-default-color);
  width: 100%;
  max-width: 164px;

  font-size: 0.8rem;

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
`;

const StyledStickyBox = styled.div`
  position: sticky;
  top: 80px;
`;

function Nav() {
  // 메뉴 목록
  const menus = [
    { isContent: false, title: `PUBLIC`, route: ``, emoji: ``, contentsNav: true },
    { isContent: true, title: `Home`, route: ``, emoji: `` },
    { isContent: true, title: `Questions`, route: ``, emoji: `` },
    { isContent: true, title: `Tag`, route: ``, emoji: `` },
    { isContent: true, title: `Users`, route: ``, emoji: `` },
    { isContent: true, title: `Companies`, route: ``, emoji: `` },

    { isContent: false, title: `COLLECTIVES`, route: ``, emoji: `` },
    { isContent: true, title: `Explore Collectives`, route: ``, emoji: `` },

    { isContent: false, title: `TEAMS`, route: ``, emoji: `` },
    { isContent: true, title: `Create free Team`, route: ``, emoji: `` },
  ];

  const menusLength = menus.length;

  // 클릭 이벤트 제어 state
  const [menuFoucs, setFocus] = useState(1);

  return (
    <NavContainer>
      <StyledStickyBox>
        <ul>
          {menus.map((el, idx) => (
            <NavMenu
              menusLength={menusLength}
              key={idx}
              menuIdx={idx}
              menuFoucs={menuFoucs}
              setFocus={setFocus}
              el={el}
            />
          ))}
        </ul>
        <span id="looking">Looking for your Teams?</span>
      </StyledStickyBox>
    </NavContainer>
  );
}

export default Nav;
