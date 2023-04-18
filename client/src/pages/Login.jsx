import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../components/LogoImg";
import SocialLogin from "./LoginComponents/SocialLogin";
import OriginLogin from "./LoginComponents/OriginLogin";

const StyledLoginPage = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const StyledLoginWrapper = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSignUpLinkWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  text-align: center;
  > a {
    color: var(--al-color);
    margin-left: 0.7rem;
  }
  > a:hover {
    color: var(--tag-font-color);
  }
`;

function Login() {
  return (
    <StyledLoginPage>
      <StyledLoginWrapper>
        <div className="main-logo">
          <Link to="/">
            <LogoImg itemColor="#F48024" containerColor="#BCBBBB" />
          </Link>
        </div>
        <SocialLogin />
        <OriginLogin />
        <StyledSignUpLinkWrapper>
          {`Don't have an account?`}
          <Link to="/register">Sign up</Link>
        </StyledSignUpLinkWrapper>
      </StyledLoginWrapper>
    </StyledLoginPage>
  );
}

export default Login;
