import styled from "styled-components";

const StyledBtn = styled.button`
  cursor: pointer;
  font-size: ${props => props.fontSize || "1rem"};
  text-align: center;
  background-color: ${props => props.bg};
  color: ${props => props.fontColor};
  padding: ${props => props.padding || "0.5rem 0.7rem"};
  border-radius: 3px;
  border: ${props => props.border};
  &:hover {
    background-color: ${props => props.hoverBg};
  }
`;

function Button(props) {
  return function ({ children, onClick }) {
    return (
      <StyledBtn {...props} onClick={onClick}>
        {children}
      </StyledBtn>
    );
  };
}

export default Button;
