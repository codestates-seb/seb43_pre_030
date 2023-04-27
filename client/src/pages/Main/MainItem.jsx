import styled from "styled-components";
import { Link } from "react-router-dom";
import { elapsedText } from "../../utils/elapsedText";
import TagButton from "../../components/ui/TagButton";

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
  align-items: center;
  padding: 0.5rem 1.5rem;
  color: var(--font-color-light);
`;

function MainItem({ data }) {
  return (
    <StyledContainer>
      <StyledCountContainer>
        <div>{data.answers.length} answers</div>
      </StyledCountContainer>
      <StyledContentContainer>
        <Link to={`/questions/${data.question_id}`}>
          <StyledContentTitle>{data.title}</StyledContentTitle>
        </Link>
        <StyledContentDescription>{data.body}</StyledContentDescription>
        <StyledTagSection>
          {data.tags.map(tag => (
            <TagButton key={tag}>{tag}</TagButton>
          ))}
        </StyledTagSection>
        <StyledAuthorSection>
          user: <span style={{ color: "var(--al-color)", marginRight: "1rem" }}>{data.user_name}</span>{" "}
          {elapsedText(new Date(data.created_at))}
        </StyledAuthorSection>
      </StyledContentContainer>
    </StyledContainer>
  );
}

export default MainItem;
