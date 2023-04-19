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
const StyledLoginForm = styled.div`
  margin-top: 0.5rem;
  div {
    width: 100%;
    margin-top: 0.4rem;
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.1rem;
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
  const [emailValid, setEmailValid] = useState(true); // 유효한게 true
  const [pwValid, setPwValid] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false); // 비어있는게 true
  const [isPwEmpty, setIsPwEmpty] = useState(false);
  // 로그인 성공/실패 상태
  const [loginFailed, setLoginFailed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (User.email && User.password) {
      navigate("/");
      setLoginFailed(true);
    }
  }, [User.email, User.password]);

  // 유저 정보 확인 요청
  const confirmUserInfoHander = () => {
    // 정규식
    const regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regexPw = /^[A-Za-z\d!@#$%^&*()_+~\-=]{8,40}$/;

    // email이 비어있으면
    if (email === "") {
      setIsEmailEmpty(true);
    } else if (!regexEmail.test(email)) {
      // email 유효하지 않으면
      setIsEmailEmpty(false);
      setEmailValid(false); // 유효하지 않게
    }

    // password가 비어있으면
    if (password === "") {
      setIsPwEmpty(true);
    } else if (!regexPw.test(password)) {
      // pw 유효하지 않으면
      setIsEmailEmpty(false);
      setPwValid(false); // 유효하지 않게
    }

    // 유효한 email,pw이고 입력값이 User정보와 같다면
    if (regexEmail.test(email) && regexPw.test(password) && email === User.email && password === User.password) {
      setIsEmailEmpty(false);
      setIsPwEmpty(false);
      setEmailValid(true);
      setPwValid(true);
      navigate("/"); // 메인페이지 이동
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
          <LoginInput
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            border={isEmailEmpty || loginFailed ? "var(--primary-color)" : null}
            focusBorder={isEmailEmpty || loginFailed ? "var(--primary-color)" : null}
            shadow={isEmailEmpty || loginFailed ? "var(--primary-color)" : null}
          />
          {isEmailEmpty && <p>Email cannot be empty.</p>}
          {!emailValid && <p>The email is not a valid email address.</p>}
          {loginFailed && <p>The email or password is incorrect.</p>}
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <LoginInput
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            border={isPwEmpty || loginFailed ? "var(--primary-color)" : null}
            focusBorder={isPwEmpty || loginFailed ? "var(--primary-color)" : null}
            shadow={isPwEmpty || loginFailed ? "var(--primary-color)" : null}
          />
          {isPwEmpty && <p>Password cannot be empty.</p>}
          {!pwValid && <p>The password must be at least 8 characters long.</p>}
          {loginFailed && <p>The email or password is incorrect.</p>}
        </div>
        <div className="button">
          <ButtonLogin onClick={confirmUserInfoHander}>Log in</ButtonLogin>
        </div>
      </StyledLoginForm>
    </StyledOriginLoginWrapper>
  );
}

export default OriginLogin;
