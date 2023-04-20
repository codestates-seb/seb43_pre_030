import React from "react";
import styled from "styled-components";

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

function QuestionContentSection({ updateAt }) {
  return (
    <StyledContentWrapper>
      <div className="vote">vote</div>
      <div className="content-container">
        <div className="real-content">내용</div>
        <div className="tag-wrapper">태그 래퍼</div>
        <div className="util-wrapper">
          <div className="features-option">
            <button type="button">Share</button>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </div>
          {updateAt && <span>edited {updateAt}</span>}
          <div className="user-info">유저정보</div>
        </div>
      </div>
    </StyledContentWrapper>
  );
}

export default QuestionContentSection;
