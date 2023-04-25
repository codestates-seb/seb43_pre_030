import styled from "styled-components";
import { useEffect } from "react";
import SignupInfo from "./SignupInfo";
import SOInfo from "./SoInfo";
import SocialSignup from "./SocialSignup";
import InvisibleText from "./InvisibleText";

const StyledSoinfoSection = styled.div`
  .body {
    width: 100%;
    max-width: 90.285rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.714rem;
  }

  .container {
    margin-top: 4.071rem;
    width: 100%;
    height: calc(100vh - 63px);
    background-color: rgb(248, 249, 249);
    display: flex;
    min-width: auto;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .socialLogo {
    width: 20rem;
  }

  .info {
    padding: 0 3.428rem 9.142rem 0;
    align-items: center;
  }
`;

function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledSoinfoSection>
      <div className="container">
        <div className="body">
          <SOInfo className="info" />

          <div className="formContainer">
            <InvisibleText />
            <SocialSignup className="socialLogo" />
            <SignupInfo />
          </div>
        </div>
      </div>
    </StyledSoinfoSection>
  );
}

export default Signup;
