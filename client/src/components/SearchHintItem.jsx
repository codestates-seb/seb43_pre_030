import styled from "styled-components";

const StyledItemContainer = styled.div`
  padding: 0.5rem 0;
  width: 50%;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

function SearchHintItem() {
  return <StyledItemContainer>SearchHintItem</StyledItemContainer>;
}

export default SearchHintItem;
