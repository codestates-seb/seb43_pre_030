import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

const StyledUserInfoWrapper = styled.div`
  width: 12rem;
  padding: 0.5rem 0.3rem 0.5rem;
  border-radius: 0.3rem;
  background-color: ${props => props.bgColor};
  color: var(--font-color-light);
  font-size: 0.8rem;

  .asked-date {
    margin-bottom: 0.6rem;
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

// date부터 오늘까지 경과한 시간(초, 분, 시) 또는 date를 25 Aug at 12:34 형식으로 반환하는 함수
const getTime = dateObj => {
  if (dateObj === undefined) return dateObj;

  const date = new Date(dateObj.replace(/"/g, "'"));
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // 60초 미만은 초 단위로 반환
  if (seconds < 60) {
    return seconds <= 1 ? `1 sec ago` : `${seconds} secs ago`;
  }
  // 60분 미만은 분 단위로 반환
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return minutes + (minutes === 1 ? ` min ago` : ` mins ago`);

  // 24시간 미만은 시간 단위로 반환
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return hours + (hours === 1 ? ` hour ago` : ` hours ago`);

  // 2일 이하는 일 단위로 반환
  const days = Math.floor(hours / 24);
  if (days <= 2) {
    if (days === 0) return "today";
    else if (days === 1) return "yesterday";
    else return `2 days ago`;
  }

  // 3일 이상은 날짜와 시간을 반영해 반환
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate() + 1;
  const hour = date.getHours();
  let minute = date.getMinutes();
  if (minute < 10) minute = `0 ${minute}`;

  return `${month} ${day} at ${hour}:${minute}`;
};

// 유저 정보 컨테이너
function UserInfo({ type, userId, createAt }) {
  // console.log(createAt);

  return (
    <StyledUserInfoWrapper bgColor={type === "question" ? "var(--tag-bg-color)" : "transparent"}>
      <div className="asked-date">
        <span>{type === "question" ? "asked" : "answerd"}</span>
        getTime({createAt})
      </div>
      <div className="avatar-and-userId">
        <div className="avatar">
          <FaUserAlt size="2rem" />
        </div>
        <div className="userId">
          <Link to="/users">{userId}</Link>
        </div>
      </div>
    </StyledUserInfoWrapper>
  );
}

export default UserInfo;
