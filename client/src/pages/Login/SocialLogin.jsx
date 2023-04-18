import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";

// 소셜로그인 버튼 래퍼
const StyledSocialLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  margin: 1.2rem 0 1rem;
`;

// 소셜로그인 버튼들
const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  margin: 0.25rem 0;
  border: 1px solid ${props => props.border || "var(--border-default-color)"};
  border-radius: 0.3rem;
  background-color: ${props => props.bg || "#fff"};
  color: ${props => props.color || "var(--font-color-bold)"};
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0.3rem 0.4rem 1rem rgba(0, 0, 0, 0.03);
  }
  &:nth-child(2):hover,
  &:nth-child(3):hover {
    color: var(--border-default-color);
  }

  > span {
    font-size: 0.785rem;
    margin-left: 0.4rem;
  }
`;

function SocialLogin() {
  return (
    <StyledSocialLoginWrapper>
      <SocialButton>
        <FcGoogle style={{ width: "1.2rem", height: "1.2rem" }} />
        <span>Log in with Google</span>
      </SocialButton>
      <SocialButton bg="var(--btn-github-bg-color)" color="#fff">
        <AiFillGithub style={{ width: "1.2rem", height: "1.2rem" }} />
        <span>Log in with GitHub</span>
      </SocialButton>
      <SocialButton bg="var(--btn-facebook-bg-color)" color="#fff">
        <AiFillFacebook style={{ width: "1.2rem", height: "1.2rem" }} />
        <span>Log in with Facebook</span>
      </SocialButton>
    </StyledSocialLoginWrapper>
  );
}

export default SocialLogin;
