import styled from "styled-components";
import HeaderContentSection from "../../components/HeaderContentSection";
import { elapsedText } from "../../utils/elapsedText";

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

// 서브 헤더(작성날짜, 업데이트날짜, 조회수정보)
function QuestionSubHeader({ createAt, modifiedAt, views }) {
  return (
    <StyledSubHeaderWrapper>
      <div>
        <span>Asked</span>
        <time>{elapsedText(new Date(createAt))}</time>
      </div>
      {modifiedAt && (
        <div>
          <span>Modified</span>
          <time>{elapsedText(new Date(modifiedAt))}</time>
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
function QuestionHeaderSection({ title, createAt, modifiedAt, views }) {
  return (
    <HeaderContentSection title={title}>
      <QuestionSubHeader createAt={createAt} modifiedAt={modifiedAt} views={views} />
    </HeaderContentSection>
  );
}

export default QuestionHeaderSection;
