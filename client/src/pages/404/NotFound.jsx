import styled from "styled-components";
import NotFoundImage from "./NotFoundImage";
import Content from "./Content";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 63px);
  width: 100%;
  gap: 2rem;
`;

function NotFound() {
  return (
    <StyledWrapper>
      <NotFoundImage />
      <Content />
    </StyledWrapper>
  );
}

export default NotFound;
