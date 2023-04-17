import React from "react";
import styled from "styled-components";
import { HiPencil } from "react-icons/hi";
import { BsStackOverflow } from "react-icons/bs";
import TagsBlock from "../components/TagsBlock";

// 사이드서브메뉴
const StyledSubMenuBlock = styled.aside`
  display: block;
  margin-top: 1rem;

  ul {
    width: 20rem;
    padding: 0;
    display: block;
    text-align: left;
    list-style: none;
    background-color: var(--aside-bg-light);
    border-radius: 0.5rem;
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.3);

    li {
      width: 20rem;
      display: flex;
      align-items: center;
      padding: 1rem 0.5rem;
      font-size: 0.9rem;
      cursor: pointer;

      > div:first-child {
        margin-right: 1rem;
      }
    }
  }
`;
// 사이드서브메뉴 제목
const SubMenuHeader = styled.div`
  font-size: 1rem;
  font-weight: 700;
  background-color: var(--aside-bg-bold);
  border-top: 1px solid #f2c231;
  border-bottom: 1px solid #f2c231;
  padding: 1rem 0 0.8rem 1rem;
  &:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-top: none;
  }
`;

function Aside() {
  return (
    <div>
      <StyledSubMenuBlock>
        <ul>
          <SubMenuHeader>The Overflow Blog</SubMenuHeader>
          <li>
            <div>
              <HiPencil />
            </div>
            <div>Are meetings making you less productive?</div>
          </li>
          <li>
            <div>
              <HiPencil />
            </div>
            <div>The philosopher who believes in Web Assembly</div>
          </li>
          <SubMenuHeader>Featured on Meta</SubMenuHeader>
          <li>
            <div>
              <BsStackOverflow />
            </div>
            <div>Improving the copy in the close modal and post notices - 2023 edition</div>
          </li>
          <li>
            <div>
              <BsStackOverflow />
            </div>
            <div>Temporary policy: ChatGPT is banned</div>
          </li>
          <li>
            <div>
              <BsStackOverflow />
            </div>
            <div>The [protection] tag is being burninated</div>
          </li>
          <li>
            <div>
              <BsStackOverflow />
            </div>
            <div>Content Discovery initiative 4/13 update: Related questions using a Machine...</div>
          </li>
          <SubMenuHeader>Hot Meta Posts</SubMenuHeader>
          <li>
            <div>
              <BsStackOverflow />
            </div>
            <div>At what point (if ever) is a fact-based question about the behaviour of...</div>
          </li>
        </ul>
      </StyledSubMenuBlock>
      <TagsBlock />
    </div>
  );
}

export default Aside;
