import styled from "styled-components";

export const StyledLi = styled.li`
  color: hsl(210, 8%, 60%); // 홈페이지 꺼 따라함
  padding: 0.25rem 0;
  vertical-align: top;
  font-size: 0.9rem;
  &:hover {
    color: #9fa6ad;
  }
  @media screen and (max-width: 1200px) {
    margin-right: 1rem;
  }
`;
