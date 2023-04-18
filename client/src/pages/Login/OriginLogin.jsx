import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonLogin } from "./ButtonLogin";
import { LoginInput } from "./InputLogin";

// dummy user data
const User = [
  {
    email: "suam123@gmail.com",
    password: "suam1234@@",
  },
  {
    email: "jinwan123@gmail.com",
    password: "jinwan1234@@",
  },
  {
    email: "hogyun123@naver.com",
    password: "hogyun1234@@",
  },
  {
    email: "jaeyoon123@naver.com",
    password: "jaeyoon1234@@",
  },
];

// 로그인박스 래퍼
const StyledOriginLoginWrapper = styled.div`
  width: 18rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05), 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 1rem 3rem rgba(0, 0, 0, 0.1);
`;

// 로그인 폼 컨테이너
const StyledLoginForm = styled.form`
  margin-top: 0.7rem;
  div {
    width: 100%;
    margin-top: 0.4rem;
    display: flex;
    flex-direction: column;

    label {
      font-size: 1rem;
      font-weight: 700;
      margin: 0.5rem 0;
    }

    p {
      margin: 0.4rem 0;
      padding: 0.125rem;
      color: red;
      font-size: 0.8rem;
    }
  }
  .button {
    margin-top: 1.5rem;
  }
`;

function OriginLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [pwEmpty, setPwEmpty] = useState(false);

  const navigate = useNavigate();

  // Email 유효성 검사
  const handleEmail = e => {
    setEmail(e.target.value);
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // email이 비어있으면
    if (email.length === 0) setEmailEmpty(true);
    // email이 유효하면
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  // PW 유효성 검사
  const handlePw = e => {
    setPassword(e.target.value);
    const regex = /^[A-Za-z\d!@#$%^&*()_+~\-=]{8,40}$/;
    // email이 비어있으면
    if (password.length === 0) setPwEmpty(true);
    // pw가 유효하면
    if (regex.test(password)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  // 유저 정보 확인 이벤트
  const confirmUserInfoHander = () => {
    // 로그인 성공시 메인페이지로 이동
    if (email === User.email && password === User.password) {
      navigate("/");
    } else if (emailEmpty || pwEmpty) {
      setEmailEmpty(true);
      setPwEmpty(true);
    } else if (email !== User.email) {
      console.log("The email is not a valid email address.");
    } else if (password !== User.password) {
      console.log("The password is not a valid password.");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <StyledOriginLoginWrapper>
      <StyledLoginForm>
        <div className="email">
          <label htmlFor="email">Email</label>
          <LoginInput id="email" name="email" type="email" value={email} onChange={handleEmail} />
          {emailEmpty && <p>Email cannot be empty.</p>}
          {!emailValid && email.length > 0 && <p>The email is not a valid email address.</p>}
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <LoginInput id="password" name="password" type="password" value={password} onChange={handlePw} />
          {pwEmpty && <p>Password cannot be empty.</p>}
          {!pwValid && password.length > 0 && <p>The password must be at least 8 characters long.</p>}
        </div>
        <div className="button">
          <ButtonLogin onClick={confirmUserInfoHander}>Log in</ButtonLogin>
        </div>
      </StyledLoginForm>
    </StyledOriginLoginWrapper>
  );
}

export default OriginLogin;
