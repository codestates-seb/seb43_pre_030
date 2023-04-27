import styled from "styled-components";
import PaginationCustom from "react-js-pagination";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
  ul {
    display: flex;
    gap: 0.3rem;
    li:first-child,
    li:last-child {
      display: none;
    }
    li {
      cursor: pointer;
      font-size: 0.8rem;
      text-align: center;
      background-color: #fff;
      color: var(--font-color-light);
      padding: 0.5rem 0.7rem;
      border-radius: 3px;
      border: 1px solid #babfc4;
      &:hover {
        background-color: #e3e5e8;
      }
    }
    li.active {
      background-color: var(--primary-color);
      color: #fff;
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`;

function Pagination({ curPage, onPageChange }) {
  const data = useSelector(s => s.data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curPage]);

  return (
    <StyledWrapper>
      <StyledContainer>
        {/* {[1, 2, 3, 4, 5].map(a =>
          a === 1 ? <CurrentPageButton>{a}</CurrentPageButton> : <PageButton>{a}</PageButton>
        )} */}
        <PaginationCustom
          activePage={curPage} // 현재페이지
          itemsCountPerPage={10} // 한 페이지 당 보여줄 아이템 수
          totalItemsCount={data.length} // 총 아이템 수
          onChange={onPageChange} // 페이지 바뀔 때 핸들링 함수
          pageRangeDisplayed={5} // paginator에서 보여줄 페이지 범위
          prevPageText="Prev" // 이전 페이지 가기 나타내는 텍스트
          nextPageText="Next" // 다음 페이지 가기 나타내는 텍스트
        />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default Pagination;
