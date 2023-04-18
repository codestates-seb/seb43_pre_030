import styled from "styled-components";

const StyledItemContainer = styled.div`
  padding: 0.5rem 0;
  width: 50%;
  color: var(--font-color-light);
  > strong {
    font-weight: bold;
    color: var(--font-color-bold);
  }
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

function SearchHintItem({ keyText, valueText }) {
  return (
    <StyledItemContainer>
      <strong>{keyText}</strong> {valueText}
    </StyledItemContainer>
  );
}

export default SearchHintItem;
