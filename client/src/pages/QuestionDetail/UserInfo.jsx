import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { elapsedText } from "../../utils/elapsedText";

const StyledUserInfoWrapper = styled.div`
  width: 12rem;
  padding: 0.5rem 0.3rem 0.5rem;
  border-radius: 0.3rem;
  background-color: ${props => props.bgColor};
  color: var(--font-color-light);
  font-size: 0.8rem;

  .asked-date {
    margin-bottom: 0.6rem;

    span {
      margin-right: 0.4rem;
    }
  }

  .avatar-and-userId {
    display: flex;
    .avatar {
      width: 2rem;
      height: 2rem;
      background-color: var(--userInfo-bg-color);
      border-radius: 0.2rem;
    }
    .userId {
      margin-left: 0.5rem;
    }
  }
`;

// 유저 정보 컨테이너
function UserInfo({ type, userName, createdAt }) {
  return (
    <StyledUserInfoWrapper bgColor={type === "question" ? "var(--tag-bg-color)" : "transparent"}>
      <div className="asked-date">
        <span>{type === "question" ? "asked" : "answered"}</span>
        {elapsedText(new Date(createdAt))}
      </div>
      <div className="avatar-and-userId">
        <div className="avatar">
          <FaUserAlt size="2rem" />
        </div>
        <div className="userId">
          <Link to="/users">{userName}</Link>
        </div>
      </div>
    </StyledUserInfoWrapper>
  );
}

export default UserInfo;
