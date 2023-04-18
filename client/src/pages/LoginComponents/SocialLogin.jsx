import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineFacebook } from "react-icons/ai";

const StyledSocialLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  margin: 1.2rem 0 1rem;
`;

const SocialButton = styled.button``;

function SocialLogin() {
  return (
    <StyledSocialLoginWrapper>
      <SocialButton>
        <FcGoogle />
        Log in with Google
      </SocialButton>
      <SocialButton>
        <VscGithub />
        Log in with GitHub
      </SocialButton>
      <SocialButton>
        <AiOutlineFacebook />
        Log in with Facebook
      </SocialButton>
    </StyledSocialLoginWrapper>
  );
}

export default SocialLogin;
