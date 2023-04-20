import React from "react";
import styled from "styled-components";

// 잘문 컨텐츠 전체 내용 래퍼
const StyledContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

// 컨텐츠 안 util기능들 래퍼
const StyledUtilsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  padding-top: 0.25rem;

  .modified-date {
    padding-top: 0.6rem;
    font-size: 0.7rem;
    color: var(--font-color-light);
  }
`;

const UtilsOptions = styled.div`
  display: flex;
  color: var(--font-color-light);
  font-size: 0.7rem;
  margin-left: 0.5rem;

  button {
    height: 1rem;
    margin-top: 0.125rem;
    padding-top: 0.4rem;
    color: var(--font-color-light);
    font-size: 0.7rem;
    background-color: transparent; // 투명하게
    border: none;
    cursor: pointer;
  }
`;

// 컨텐츠 내용
function QuestionContentSection({ id, userId, body, createAt, modifiedAt }) {
  return (
    <StyledContentWrapper>
      <div className="vote">vote</div>
      <div className="content-container">
        <div className="real-content">내용</div>
        <div className="tag-wrapper">태그 래퍼</div>
        <StyledUtilsWrapper>
          <UtilsOptions>
            <button type="button">Share</button>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </UtilsOptions>
          {modifiedAt && <span className="modified-date">edited {modifiedAt}</span>}
          <div className="user-info">유저정보</div>
        </StyledUtilsWrapper>
      </div>
    </StyledContentWrapper>
  );
}

export default QuestionContentSection;
