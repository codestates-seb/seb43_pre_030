import styled from "styled-components";

const ContentBlockerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eeeeeebb;
  z-index: 10;
`;

function ContentBlocker() {
  return <ContentBlockerContainer />;
}

export default ContentBlocker;
