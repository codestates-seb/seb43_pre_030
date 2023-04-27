import styled from "styled-components";

const StyledinvisibleText = styled.div`
  width: 421px;
  text-align: center;
  display: none;
  font-size: 1.5rem;
  align-items: center;
  @media screen and (max-width: 780px) {
    display: flex;
  }
`;

function invisible() {
    return (
     <StyledinvisibleText>
          Create your Stack Overflow account. It’s free and only takes a minute.
     </StyledinvisibleText>    
    )
}

export default invisible;