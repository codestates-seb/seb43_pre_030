import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { elapsedText } from "../../utils/elapsedText";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 1.5rem 0;
  border-top: 1px solid #babfc4;
`;

const StyledCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.15 0 0;
  text-align: right;
  gap: 0.5rem;
`;
const StyledContentContainer = styled.div`
  flex: 1 0 0;
`;
const StyledContentTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--al-color);
`;
const StyledContentDescription = styled.p`
  display: -webkit-box;
  margin-top: 0.5rem;
  color: var(--font-color-light);
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
  text-overflow: ellipsis;
`;
const StyledTagSection = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 0.2rem;
`;

const StyledAuthorSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1.5rem;
`;

const TagButton = Button({
  bg: "var(--tag-bg-color)",
  fontColor: "var(--tag-font-color)",
  border: "none",
  hoverBg: "#b3d3ea",
  fontSize: ".8rem",
});

function MainItem({ data }) {
  return (
    <StyledContainer>
      <StyledCountContainer>
        <div>0 votes</div>
        <div>0 votes</div>
        <div>0 votes</div>
      </StyledCountContainer>
      <StyledContentContainer>
        <Link to={`/questions/${data.id}`}>
          <StyledContentTitle>{data.title}</StyledContentTitle>
        </Link>
        <StyledContentDescription>{data.body}</StyledContentDescription>
        <StyledTagSection>
          {data.tags.map(tag => (
            <TagButton>{tag}</TagButton>
          ))}
        </StyledTagSection>
        <StyledAuthorSection>
          {data.user_id} 9765 asked {elapsedText(new Date(data.created_at))}
        </StyledAuthorSection>
      </StyledContentContainer>
    </StyledContainer>
  );
}

export default MainItem;
