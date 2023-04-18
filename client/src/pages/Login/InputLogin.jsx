import styled, { css } from "styled-components";

// 공통 인풋창 스타일
const StyledInput = css`
  width: 100%;
  margin-top: 0.4rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: 1px solid ${props => props.border || "var(--border-default-color)"};
  border-radius: 0.3rem;
  font-size: 0.9rem;
  font-weight: 400;

  &:focus {
    border-color: ${props => props.border || "var(--input-focus-border)"};
    box-shadow: 0rem 0rem 0rem 0.25rem ${props => props.shadow || "var(--input-focus-shadow)"};
  }
`;

// 로그인 인풋창
export const LoginInput = styled.input`
  ${StyledInput}
`;
