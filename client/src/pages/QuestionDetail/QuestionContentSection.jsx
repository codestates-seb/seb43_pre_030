import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";
import Button from "../../components/ui/Button";
import Vote from "./Vote";
import { elapsedText } from "../../utils/elapsedText";

// 잘문 컨텐츠 전체 내용 래퍼
const StyledContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;

  .content-container {
    flex: 1 0 0;
    width: 20rem; // 이부분 너비가 1rem만 되어도 꽉참 -> 의문
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
  /* gap: 5rem; */
  margin: 1rem 0;
  padding-top: 0.25rem;

  .modified-date {
    min-width: 60px;
    flex: 1 0 0;
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
  flex: 2 0 0;
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

const ButtonSubmit = Button({
  bg: "var(--btn-bg-color)",
  fontColor: "#fff",
  border: "none",
  hoverBg: "var(--al-color)",
  padding: "0.7rem 0.7rem",
});

// 컨텐츠 내용
function QuestionContentSection({
  type,
  id,
  userId,
  userName,
  body,
  createdAt,
  updatedAt,
  tags,
  updateHandler,
  deleteHandler,
}) {
  const currentUser = useSelector(s => s.user);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(body);

  return (
    <StyledContentWrapper>
      <Vote />
      <div className="content-container">
        <StyledBodyWrapper data-color-mode="light">
          {!isEdit ? (
            <MDEditor.Markdown source={body} style={{ padding: "1.5rem" }} />
          ) : (
            <>
              <MDEditor
                className="md-editor"
                value={value}
                onChange={setValue}
                previewOptions={{
                  rehypePlugins: [[rehypeSanitize]],
                }}
              />
              <ButtonSubmit
                onClick={() => {
                  updateHandler(id, value);
                  setIsEdit(false);
                }}
              >
                Post Your Answer
              </ButtonSubmit>
            </>
          )}
        </StyledBodyWrapper>
        <StyledTagsWrapper>{tags && tags.map(tag => <TagButton key={tag}>{tag}</TagButton>)}</StyledTagsWrapper>
        <StyledUtilsWrapper>
          <UtilsOptions>
            <button type="button">Share</button>
            {currentUser.id === userId && (
              <>
                <button type="button" onClick={() => setIsEdit(true)}>
                  Edit
                </button>
                <button type="button" onClick={() => deleteHandler(id)}>
                  Delete
                </button>
              </>
            )}
          </UtilsOptions>
          {updatedAt && <span className="modified-date">edited {elapsedText(new Date(updatedAt))}</span>}
          <UserInfo type={type} userName={userName} createdAt={createdAt} />
        </StyledUtilsWrapper>
      </div>
    </StyledContentWrapper>
  );
}

export default QuestionContentSection;
