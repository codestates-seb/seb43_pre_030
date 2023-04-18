import { Link } from "react-router-dom";
import styled from "styled-components";

const items = [
  {
    text: "Try ",
    link: "searching for similar questions",
    path: "/questions",
  },
  {
    text: "Browse our ",
    link: "recent questions",
    path: "/questions",
  },
  {
    text: "Browse our ",
    link: "popular tags",
    path: "/tags",
  },
  {
    text: "If you feel something is missing that should be here, ",
    link: "contact us.",
    path: "/",
  },
];

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledLi = styled.li`
  font-size: 1.2rem;
`;
const StyledLink = styled.span`
  color: var(--al-color);
  cursor: pointer;
`;

function SolutionItem() {
  return (
    <StyledUl>
      {items.map(item => (
        <StyledLi>
          {item.text}
          <StyledLink>
            <Link to={item.path}>{item.link}</Link>
          </StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  );
}

export default SolutionItem;
