import React from "react";
import styled from "styled-components";
import HeaderContentSection from "../../components/HeaderContentSection";

// 서브헤더 래퍼
const StyledSubHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-first;
  gap: 0.1rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border-default-color);

  div {
    margin: 0 1rem 0.5rem 0;
    font-size: 0.8rem;

    span {
      margin-right: 0.4rem;
      color: var(--font-color-light);
    }
  }
`;

// 매개변수로 들어온 날짜 ~ 오늘까지 경과한 날짜(일, 월, 연도)를 반환하는 함수
function getDays(dateObj) {
  if (dateObj === undefined) return "--";
  const date = new Date(dateObj.replace(/"/g, "'"));
  const now = new Date();
  const days = Math.floor((now.getTime() - date.getTime()) / 8.64e7);
  // 31일 미만은 날짜 단위로 반환
  if (days < 31) {
    if (days <= 0) {
      return "today";
    } else if (days === 1) {
      return "yesterday";
    } else {
      return `${days} days ago`;
    }
  }
  return false;
}
// 서브 헤더(작성날짜, 업데이트날짜, 조회수정보)
function QuestionSubHeader({ createAt, updateAt, views }) {
  return (
    <StyledSubHeaderWrapper>
      <div>
        <span>Asked</span>
        <time>{getDays(createAt)}</time>
      </div>
      {updateAt && (
        <div>
          <span>Modified</span>
          <time>{getDays(updateAt)}</time>
        </div>
      )}
      <div>
        <span>Viewd</span>
        {views} times
      </div>
    </StyledSubHeaderWrapper>
  );
}

// 상세페이지 헤더 섹션
function QuestionHeaderSection({ title, createAt, updateAt, views }) {
  return (
    <HeaderContentSection title={title}>
      <QuestionSubHeader createAt={createAt} updateAt={updateAt} views={views} />
    </HeaderContentSection>
  );
}

export default QuestionHeaderSection;