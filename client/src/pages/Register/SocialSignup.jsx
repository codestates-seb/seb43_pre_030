import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";

// 소셜로그인 버튼 래퍼
const StyledSocialLoginWrapper = styled.div`
    align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1.2rem 0 1rem;
`;

// 소셜로그인 버튼들
const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  margin: 0.25rem 0;
  border: 0.0714rem solid ${props => props.border || "var(--border-default-color)"};
  border-radius: 0.3rem;
  background-color: ${props => props.bg || "#fff"};
  color: ${props => props.color || "var(--font-color-bold)"};
  font-size: 2rem;
  outline: none;
  cursor: pointer;
  width: 22.571rem;
  height: 2.714rem;

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
        <span>Sign up with Google</span>
      </SocialButton>
      <SocialButton bg="#2f3337" color="#fff">
        <AiFillGithub style={{ width: "1.2rem", height: "1.2rem" }} />
        <span>Sign up with GitHub</span>
      </SocialButton>
      <SocialButton bg="#385499" color="#fff">
        <AiFillFacebook style={{ width: "1.2rem", height: "1.2rem" }} />
        <span>Sign up with Facebook</span>
      </SocialButton>
    </StyledSocialLoginWrapper>
  );
}

export default SocialLogin;