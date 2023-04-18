import styled from "styled-components";
import SignupInfo from "./SignupInfo";
import SOInfo from "./SoInfo";
import SocialLogin from "../Login/SocialLogin";

const StyledSoinfoSection =styled.div`
   .body{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
   }  

   .container{
    margin-top: 57px;
   }
   .socialLogo{
    width: 20rem;
   }

   .info{
    padding: 0 48px 128px 0;
   }
`


function Signup() {
  return (
    <StyledSoinfoSection>
    <div className="container">
      <div className="body">
                      
        <SOInfo className="info"/>

        <div className="formContainer" style={{ width: "268px", height: "650px" }}>
        <SocialLogin className="socialLogo" />
        <SignupInfo />
        </div>
      </div>
    </div>
    </StyledSoinfoSection>
  );
}

export default Signup;
