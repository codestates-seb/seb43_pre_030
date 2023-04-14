import React from "react";
import styled from "styled-components";
import { HiPencil } from "react-icons/hi"
import { BsStackOverflow } from "react-icons/bs"


// 사이드서브메뉴
const StyledSubMenuBlock = styled.aside`
  height: 100%;
  display: block;
  margin-top: 1.4rem;
  padding-right: 1.1rem;
  box-sizing: border-box;

  ul {
    width: 30rem;
    padding: 0;
    display: block;
    text-align: left;
    list-style: none;
    background-color: #fdf6e2;
    border-radius: .5rem;
    box-shadow: 0 .1rem .3rem rgba(0,0,0,.3);

    li {
      width: 30rem;
      display: flex;
      align-items: center;
      padding: 1rem .5rem;
      font-size: 1rem;
      cursor: pointer;

      > div:first-child {
        margin-right: 1rem;
      }
    }

    .submenu-header {
      width: 29rem;
      font-size: 1.1rem;
      font-weight: 700;
      background-color: #fcf2d4;
      border-top: 1px solid #f2c231;
      border-bottom: 1px solid #f2c231;
      &:first-child {
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
        border-top: none;
      }
    }
  }
`;

// 태그 박스
const StyledTagsBlock = styled.div`
  width: 30rem;
  height: 100%;
  margin-top: 3rem;
  border: 1px solid #c8c8c9;
  border-radius: 0.5rem;
  box-shadow: 0 .1rem .3rem rgba(0,0,0,.3);

  .tag-title {
    height: 2rem;
    height: 4rem;
    display: flex;
    align-items:center;
    color: #525960;
    font-size: 1.3rem;
    font-weight: 500;
    background-color: #f7faf9;
    border-bottom: 1px solid #c8c8c9;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;

    > div {
      margin-left: 1rem;
    }
  }

  .tag-content {
    display: flex;
    .tag-inner {
      width: 29rem;
      display: flex;
      justify-content: center;
      padding: 2rem 0;
      & div {
        margin-left: 1.3rem;
        padding: .5rem .7rem;
        background-color: #e3ebf4;
        border-radius: .4rem;
      }
      & a {
        color: #0074cc;
        text-decoration: none;
      }
    }
  }
`;

function Aside() {
  return (
    <div>
      <StyledSubMenuBlock>
        <ul>
          <li className="submenu-header">The Overflow Blog</li>
          <li>
            <div><HiPencil/></div>
            <div>Are meetings making you less productive?</div>
          </li>
          <li>
            <div><HiPencil/></div>
            <div>The philosopher who believes in Web Assembly</div>
          </li>
          <li className="submenu-header">Featured on Meta</li>
          <li>
            <div><BsStackOverflow/></div>
            <div>Improving the copy in the close modal and post notices - 2023 edition</div>
          </li>
          <li>
            <div><BsStackOverflow/></div>
            <div>Temporary policy: ChatGPT is banned</div>
          </li>
          <li>
            <div><BsStackOverflow/></div>
            <div>The [protection] tag is being burninated</div>
          </li>
          <li>
            <div><BsStackOverflow/></div>
            <div>Content Discovery initiative 4/13 update: Related questions using a Machine...</div>
          </li>
          <li className="submenu-header">Hot Meta Posts</li>
          <li>
            <div><BsStackOverflow/></div>
            <div>At what point (if ever) is a fact-based question about the behaviour of...</div>
          </li>
        </ul>
      </StyledSubMenuBlock>

      <StyledTagsBlock>
        <div className="tag-title">
          <div>Watched Tags</div>
        </div>
        <div className="tag-content">
          <div className="tag-inner">
            <div><a href="/">javascript</a></div>
            <div><a href="/">nextjs</a></div>
            <div><a href="/">reactjs</a></div>
            <div><a href="/">typescript</a></div>
          </div>
        </div>
      </StyledTagsBlock>
    </div>
  )
}

export default Aside;
