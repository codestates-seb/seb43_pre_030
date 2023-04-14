import React from "react";
import styled from "styled-components";
import { HiPencil } from "react-icons/hi"
import { BsStackOverflow } from "react-icons/bs"



const StyledSubMenuBlock = styled.aside`
  height: 100%;
  display: flex;
  margin-top: 1.4rem;
  padding-right: 1.1rem;

  ul {
    width: 30rem;
    padding: 0;
    display: block;
    text-align: left;
    list-style: none;
    background-color: var();

  }
`;

const StyledTagsBlock = styled.div`

`;

function Aside() {
  return (
    <div>
      <StyledSubMenuBlock>
        <ul>
          <li className="submenu-header">The Overflow Blog</li>
          <li>
            <HiPencil/>
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
      <StyledTagsBlock />
    </div>
  )
}

export default Aside;
