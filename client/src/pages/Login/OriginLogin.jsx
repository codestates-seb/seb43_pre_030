import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ButtonLogin } from "./ButtonLogin";
import { LoginInput } from "./InputLogin";
import useInput from "../../hooks/useInput";
// import { useDispatch, useSelector } from "react-redux";

// dummy user data
// const User = [
//   {
//     email: "suam123@gmail.com",
//     password: "suam1234@@",
//   },
//   {
//     email: "jinwan123@gmail.com",
//     password: "jinwan1234@@",
//   },
//   {
//     email: "hogyun123@naver.com",
//     password: "hogyun1234@@",
//   },
//   {
//     email: "jaeyoon123@naver.com",
//     password: "jaeyoon1234@@",
//   },
// ];

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

function OriginLogin({ isLogin, setIsLogin, setUserInfo }) {
  const [emailProps, setEmail] = useInput("");
  const [passwordProps, setPassword] = useInput("");

  const [emailValid, setEmailValid] = useState(true); // 유효한게 true
  const [pwValid, setPwValid] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false); // 비어있는게 true
  const [isPwEmpty, setIsPwEmpty] = useState(false);

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { user } = useSelector(s => s.data)

  useEffect(() => {}, []);

  // 인풋 데이터 유효성 검사
  const handleCheckLoginForm = () => {
    const regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regexPw = /^[A-Za-z\d!@#$%^&*()_+~\-=]{8,40}$/;
    const email = emailProps.value;
    const password = passwordProps.value;
    // email이 비어있으면
    // early return
    if (!email) {
      setIsEmailEmpty(true);
      return;
    } else if (!regexEmail.test(email)) {
      // email 유효하지 않으면
      setIsEmailEmpty(false);
      setEmailValid(false); // 유효하지 않게
      setEmail("");
      setPassword("");
      return;
    }
    // password가 비어있으면
    if (!password) {
      setIsPwEmpty(true);
      return;
    } else if (!regexPw.test(password)) {
      // pw 유효하지 않으면
      setIsEmailEmpty(false);
      setPwValid(false); // 유효하지 않게
      setEmail("");
      setPassword("");
      return;
    }
    // 위 조건에 하나도 부합하지 않을때(올바른 로그인 내용 입력시)
    return true;
  };

  // 로그인 요청
  const handleSubmit = async () => {
    // 아래 코드는 먼저 유효성을 체크하고 올바른 값을 api post요청을 보내게 로직을 짜야 불필요한 요청을 계속해서 보내지 않기 때문에 더 효율적이게 된다.
    if (!handleCheckLoginForm()) return;
    // api 요청(post)
    const response = await axios
      .post("http://localhost:3001/login", {
        email: emailProps,
        password: passwordProps,
      })
      .then(res => {
        // setUserInfo(res.data); // 서버에서 받은 유저 데이터를 렌더링 할때 보여주는 유저
        setIsLogin(true);
      })
      .catch(err => {
        console.log(err);
      });
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
            {...emailProps}
            border={isEmailEmpty || isLogin ? "var(--primary-color)" : null}
            focusBorder={isEmailEmpty || isLogin ? "var(--primary-color)" : null}
            shadow={isEmailEmpty || isLogin ? "var(--primary-color)" : null}
          />
          {isEmailEmpty && <p>Email cannot be empty.</p>}
          {!emailValid && <p>The email is not a valid email address.</p>}
          {isLogin && <p>The email or password is incorrect.</p>}
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <LoginInput
            id="password"
            name="password"
            type="password"
            {...passwordProps}
            border={isPwEmpty || isLogin ? "var(--primary-color)" : null}
            focusBorder={isPwEmpty || isLogin ? "var(--primary-color)" : null}
            shadow={isPwEmpty || isLogin ? "var(--primary-color)" : null}
          />
          {isPwEmpty && <p>Password cannot be empty.</p>}
          {!pwValid && <p>The password must be at least 8 characters long.</p>}
          {isLogin && <p>The email or password is incorrect.</p>}
        </div>
        <div className="button">
          <ButtonLogin onClick={handleSubmit}>Log in</ButtonLogin>
        </div>
      </StyledLoginForm>
    </StyledOriginLoginWrapper>
  );
}

export default OriginLogin;

// 유저 정보 확인을 jwt토큰으로 서버쪽에서
// const found = User.find(a => a.email === email);

// // 유효한 email,pw이고 입력값이 User정보와 같다면
// if (found && password === found.password) {
//   setIsEmailEmpty(false);
//   setIsPwEmpty(false);
//   setEmailValid(true);
//   setPwValid(true);
//   navigate("/"); // 메인페이지 이동
// } else if (!found) {
//   setEmail("");
//   setPassword("");
// } else if (password !== found.password) {
//   setEmail("");
//   setPassword("");
// }
