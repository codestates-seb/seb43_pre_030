import React, { useState, memo, useMemo } from "react";
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

  return (
    <NavContainer>
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
