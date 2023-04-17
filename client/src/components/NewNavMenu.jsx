import React from "react";
import styled from "styled-components";

const MenuContainer = styled.li`
  height: 34px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #aaa;
  cursor: pointer;

  & span{
    pointer-events: none;
    margin-left: 10px;
  }
  
  &.active {
    color: #F48225; 
  }

  &.content{
    & span{
        margin-left: 30px;
    }
  }


  &.title{
    position: relative;
    padding-top: 16px;
    font-size: 0.6rem;
    color: black;
    font-weight: bold;
    background-color: #fff;
  }


  & .navNav{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: ${props => props.menusLength} * 34px;
    width: 0.5px;
    background-color: #aaa;
  }

`

function NewNavMenu({menusLength, menuFoucs, setFocus, menuIdx, el}) {

  // 클릭된 매뉴의 값을 menuFoucs에 적용하는 함수
  const setActive = (e) => {
    setFocus(e.target.value)
    console.log(menusLength)
  }

  return(
    // 클릭 시 menuFoucs에 따라서 액티브 클래스 적용
    <MenuContainer menusLength={menusLength} value={menuIdx} className={`${menuIdx === menuFoucs && el.isContent ? 'active' : ''} ${el.isContent ? 'content' : 'title'}`}
    onClick={(e) => {setActive(e)}}>
      <span>{el.emoji}{el.title}
        <span className={`${el.contentsNav ? 'navNav' : ''}`}> </span>
      </span>
    </MenuContainer>
  )
}

export default NewNavMenu;