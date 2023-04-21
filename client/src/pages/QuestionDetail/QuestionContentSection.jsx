import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import Button from "../../components/ui/Button";
import Vote from "./Vote";

// 잘문 컨텐츠 전체 내용 래퍼
const StyledContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;

  .content-container {
    flex: 1 0 0;
  }
`;

// 컨텐츠 바디 래퍼
const StyledBodyWrapper = styled.div`
  margin-left: 0.5rem;
  padding-bottom: 5rem;
  color: var(--font-color-light);
  overflow: hidden;
  line-height: 1.4;
`;

// 태그 래퍼
const StyledTagsWrapper = styled.div`
  width: 12rem;
  display: flex;
  gap: 0.5rem;
`;

// 컨텐츠 안 util기능들 래퍼
const StyledUtilsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  margin: 1rem 0;
  padding-top: 0.25rem;

  .modified-date {
    padding-top: 0.3rem;
    font-size: 0.75rem;
    color: var(--font-color-light);
  }
`;

// Util버튼들 프레임
const UtilsOptions = styled.div`
  display: flex;
  color: var(--font-color-light);
  font-size: 0.7rem;

  button {
    height: 1rem;
    color: var(--font-color-light);
    font-size: 0.8rem;
    background-color: transparent; // 투명하게
    border: none;
    cursor: pointer;

    &:hover {
      color: var(--al-color);
    }
  }
`;

const TagButton = Button({
  bg: "var(--tag-bg-color)",
  fontColor: "var(--tag-font-color)",
  border: "none",
  hoverBg: "#b3d3ea",
  fontSize: ".8rem",
});

// 컨텐츠 내용
function QuestionContentSection({ type, id, userId, body, createAt, modifiedAt, tags }) {
  return (
    <StyledContentWrapper>
      <Vote />
      <div className="content-container">
        <StyledBodyWrapper>{body}</StyledBodyWrapper>
        <StyledTagsWrapper>{tags && tags.map(tag => <TagButton>{tag}</TagButton>)}</StyledTagsWrapper>
        <StyledUtilsWrapper>
          <UtilsOptions>
            <button type="button">Share</button>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </UtilsOptions>
          {modifiedAt && <span className="modified-date">edited {modifiedAt}</span>}
          <UserInfo type={type} userId={userId} createAt={createAt} />
        </StyledUtilsWrapper>
      </div>
    </StyledContentWrapper>
  );
}

export default QuestionContentSection;
