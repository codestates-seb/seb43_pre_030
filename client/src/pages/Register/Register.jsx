import styled from "styled-components";
import SignupInfo from "./SignupInfo";
import SOInfo from "./SoInfo";
import SocialSignup from "./SocialSignup";

const StyledSoinfoSection =styled.div`
   .body{
    width: 100%;
    max-width: 1264px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
   }  

   .container{
    margin-top: 57px;
    width: 100%;
    height: 1024px;
    background-color: rgb(248, 249, 249);
    display: flex;
    min-width: auto;
    -webkit-box-pack: center;
    justify-content: center;
   }
   .socialLogo{
    width: 20rem;
   }

   .info{
    padding: 0 48px 128px 0;
    align-items: center;
   }
`


function Signup() {
  return (
    <StyledSoinfoSection>
    <div className="container">
      <div className="body">
                      
        <SOInfo className="info"/>

        <div className="formContainer" style={{ width: "316px", height: "100%" }}>
        <SocialSignup className="socialLogo" />
        <SignupInfo />
        </div>
      </div>
    </div>
    </StyledSoinfoSection>
  );
}

export default Signup;
