import React from "react";
import styled from "styled-components";

// 태그 박스
const StyledTagsBlock = styled.div`
  width: 20rem;
  margin-top: 3rem;
  border: 1px solid #c8c8c9;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
`;

const StyledTagsTitle = styled.div`
  height: 3.5rem;
  display: flex;
  align-items: center;
  color: #525960;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #f7faf9;
  border-bottom: 1px solid #c8c8c9;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  > div {
    margin-left: 1rem;
  }
`;

const StyledTagsContent = styled.div`
  display: flex;
  ul {
    width: 20rem;
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 0;
    & div {
      font-size: 1rem;
      padding: 0.3rem 0.3rem;
      background-color: #e3ebf4;
      border-radius: 0.2rem;
    }
    & a {
      font-size: 0.9rem;
      color: var(--tag-font-color);
      text-decoration: none;
    }
    & a:hover {
      color: var(--al-color);
    }
  }
`;

function TagsBlock() {
  const tagList = [
    {
      id: 1,
      tagName: "javascript",
    },
    {
      id: 2,
      tagName: "nextjs",
    },
    {
      id: 3,
      tagName: "reactjs",
    },
    {
      id: 4,
      tagName: "typescript",
    },
  ];

  return (
    <StyledTagsBlock>
      <StyledTagsTitle>
        <div>Watched Tags</div>
      </StyledTagsTitle>
      <StyledTagsContent>
        <ul>
          {tagList.map(el => (
            <div key={el.id}>
              <a href="/">{el.tagName}</a>
            </div>
          ))}
          {/* <div>
            <a href="/">javascript</a>
          </div>
          <div>
            <a href="/">nextjs</a>
          </div>
          <div>
            <a href="/">reactjs</a>
          </div>
          <div>
            <a href="/">typescript</a>
          </div> */}
        </ul>
      </StyledTagsContent>
    </StyledTagsBlock>
  );
}

export default TagsBlock;
