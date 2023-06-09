import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ButtonLogin } from "./ButtonLogin";
import { LoginInput } from "./InputLogin";
import useInput from "../../hooks/useInput";
import { setUser } from "../../features/userSlice";

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
  const [emailProps, setEmail] = useInput("");
  const [passwordProps, setPassword] = useInput("");

  const [emailValid, setEmailValid] = useState(true); // 유효한게 true
  const [pwValid, setPwValid] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false); // 비어있는게 true
  const [isPwEmpty, setIsPwEmpty] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      setEmailValid(true);
      setIsLogin(true);
      return;
    } else if (!regexEmail.test(email)) {
      // email 유효하지 않으면
      setIsEmailEmpty(false);
      setEmailValid(false); // 유효하지 않게
      setIsLogin(true);
      setEmail("");
      setPassword("");
      return;
    }
    // password가 비어있으면
    if (!password) {
      setIsPwEmpty(true);
      setIsLogin(true);
      setPwValid(true);
      return;
    } else if (!regexPw.test(password)) {
      // pw 유효하지 않으면
      setIsEmailEmpty(false);
      setPwValid(false); // 유효하지 않게
      setIsLogin(true);
      setPassword("");
      return;
    }
    // 위 조건에 하나도 부합하지 않을때(올바른 로그인 내용 입력시)
    return true;
  };

  // 로그인 요청
  const handleSubmit = async e => {
    // 아래 코드는 먼저 유효성을 체크하고 올바른 값을 api post요청을 보내게 로직을 짜야 불필요한 요청을 계속해서 보내지 않기 때문에 더 효율적이게 된다.
    // 이미 브라우저에 토큰있다면 로그인 할 필요가 없으니까 그냥 데이터를 서버에서 받아서 상태를 변경
    // 자동 로그인을 하고 싶은거다
    // 쿠키에 토큰이 있다면 => 로그인이 필요한가? 아니요
    // 그러면 어디에 요청을 보내야 되지? 로그인이 필요없이 유저 정보를 받고싶어
    // userinfo인거다
    // 근데 왜 항상 처음 켜질 때 요청을 보내냐
    // 일단 보내놓고 유저정보를 못받았다 => 로그인을 못했다 => 그러면 로그인 창 띄우면 되지?
    // 유저정보를 받았다? => 로그인 필요없이 정보를 MyPage에 넘기면 된다.
    // 자동 로그인 => 서버에서 로그인 요청이 있고 -> 유효하다면 -> 토큰을 쿠키에 담아서 준다. -> 이때 쿠키의 유효 기간. -> 유효 기간이 살아있다면 -> 자동로그인
    // 자동 로그인 -> 자동으로 로그인 요청을 하는 게 아니다. -> 서버에서 로그인요청이 왔다. 쿠키에 토큰이 없다. => 유효하다 -> 토큰을 만들고
    // 쿠키에 넣고 -> 유저 정보를 응답으로 주는 라우터로 리다이렉트 // 유저 정보를 달라고 요청한다.
    // 쿠키에 토큰이 없는 데 -> 그냥 해도
    e.preventDefault();
    if (!handleCheckLoginForm()) return false;
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
        email: emailProps.value,
        password: passwordProps.value,
      });
      const token = res.headers.get("Authorization");
      if (token) localStorage.setItem("token", token.split(" ")[1]);
      const user = await axios(`${process.env.REACT_APP_API_URL}/user/userinfo`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      dispatch(setUser({ ...user.data }));
      navigate("/");
    } catch (err) {
      setIsLogin(false);
      setPwValid(true);
      setIsPwEmpty(false);
      setIsEmailEmpty(false);
      setEmailValid(true);
    }
  };

  return (
    <StyledOriginLoginWrapper>
      <StyledLoginForm onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="email">Email</label>
          <LoginInput
            id="email"
            name="email"
            type="email"
            {...emailProps}
            border={isEmailEmpty || !isLogin ? "var(--primary-color)" : null}
            focusBorder={isEmailEmpty || !isLogin ? "var(--primary-color)" : null}
            shadow={isEmailEmpty || !isLogin ? "var(--primary-color)" : null}
          />
          {isEmailEmpty && <p>Email cannot be empty.</p>}
          {!emailValid && <p>The email is not a valid email address.</p>}
          {!isLogin && <p>The email or password is incorrect.</p>}
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <LoginInput
            id="password"
            name="password"
            type="password"
            {...passwordProps}
            border={isPwEmpty || !isLogin ? "var(--primary-color)" : null}
            focusBorder={isPwEmpty || !isLogin ? "var(--primary-color)" : null}
            shadow={isPwEmpty || !isLogin ? "var(--primary-color)" : null}
          />
          {isPwEmpty && <p>Password cannot be empty.</p>}
          {!pwValid && <p>The password must be at least 8 characters long.</p>}
          {!isLogin && <p>The email or password is incorrect.</p>}
        </div>
        <div className="button">
          <ButtonLogin onClick={handleSubmit}>Log in</ButtonLogin>
        </div>
      </StyledLoginForm>
    </StyledOriginLoginWrapper>
  );
}

export default OriginLogin;
