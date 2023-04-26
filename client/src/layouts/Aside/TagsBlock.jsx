import styled from "styled-components";
import TagButton from "../../components/ui/TagButton";

// 태그 박스
const StyledTagsBlock = styled.div`
  width: 20rem;
  margin-top: 3rem;
  border: 1px solid #c8c8c9;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const StyledTagsTitle = styled.div`
  height: 3.5rem;
  display: flex;
  align-items: center;
  color: #525960;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #f7faf9;
  border-bottom: 1px solid #c8c8c9;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  > div {
    margin-left: 1rem;
  }
`;

const StyledTagsContent = styled.div`
  display: flex;
  ul {
    width: 20rem;
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 0;
  }
`;

function TagsBlock() {
  const tagList = [
    {
      id: 1,
      tagName: "javascript",
    },
    {
      id: 2,
      tagName: "nextjs",
    },
    {
      id: 3,
      tagName: "reactjs",
    },
    {
      id: 4,
      tagName: "typescript",
    },
  ];

  return (
    <StyledTagsBlock>
      <StyledTagsTitle>
        <div>Watched Tags</div>
      </StyledTagsTitle>
      <StyledTagsContent>
        <ul>
          {tagList.map(el => (
            <TagButton key={el.id}>{el.tagName}</TagButton>
          ))}
        </ul>
      </StyledTagsContent>
    </StyledTagsBlock>
  );
}

export default TagsBlock;
