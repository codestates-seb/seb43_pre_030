import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.li`
  height: 34px;
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--font-color-light);
  cursor: pointer;

  //span기본 css
  & span {
    margin-left: 10px;
    letter-spacing: 0.5px;
    //클릭시 이벤트 제어
    pointer-events: none;
  }

  //클릭 시 변화 css
  &.active {
    color: var(--font-color-bold);
    font-weight: bold;
    background-color: #66666615;
    box-shadow: -3px 0 0 0 var(--primary-color) inset;
    transition: 0.1s;
  }

  //클릭 시 변화가 있는 박스
  &.content {
    & span {
      margin-left: 30px;
    }
  }

  //클릭시 변화가 없는 박스
  &.title {
    padding-top: 16px;
    font-size: 0.6rem;
    font-weight: bold;
    color: var(--font-color-bold);
    cursor: auto;
  }

  &.content:hover {
    color: var(--font-color-bold);
  }
`;

const checkPath = path => {
  if (document.location.pathname === "/") return document.location.pathname === path;
  if (document.location.pathname === "/search") return path === "/questions";
  return new Set(document.location.pathname.split("/").filter(a => a !== "")).has(path.slice(1));
};

function NavMenu({ el }) {
  const navigation = useNavigate();
  // 클릭된 매뉴의 값을 menuFoucs에 적용하는 함수
  const setActive = () => {
    navigation(el.route);
  };

  return (
    // 클릭 시 menuFoucs에 따라서 액티브 클래스 적용
    <MenuContainer
      className={`${checkPath(el.route) ? "active" : ""} ${el.isContent ? "content" : "title"}`}
      onClick={_ => {
        el.isContent && setActive();
      }}
    >
      <span>{el.title}</span>
    </MenuContainer>
  );
}

export default NavMenu;
