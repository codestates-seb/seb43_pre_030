import styled from "styled-components";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const StyledSignupSection = styled.div`
  width: 316px;
  margin: 0 auto;
  #main {
    box-shadow: 0 0.714rem 1.714rem hsla(0, 0%, 0%, 0.05), 0 1.428rem 3.428rem hsla(0, 0%, 0%, 0.05),
      0 0.0714rem 0.285rem hsla(0, 0%, 0%, 0.1);
    padding: 1.714rem;
    background-color: white;
    margin-bottom: 2.142rem;
    width: 100%;
    height: 100%;
  }
  .text {
    font-size: 0.857rem;
    margin-top: 0.285rem;
    margin-bottom: 0.285rem;
  }

  .inputLI {
    font-size: 1.071rem;
    margin: 0.142rem 0;
    padding: 0 0.142rem;
    display: grid;
  }
  .inputText {
    margin-top: 0.571rem;
    margin-bottom: 0.571rem;
    width: 100%;
  }
  .img {
    margin-top: 0.714rem;
    margin-bottom: 0.428rem;
    padding-left: 2.142rem;
  }
  .mainFooter {
    font-size: 0.857rem;
    margin-top: 2.285rem;
  }
  .gotoLoginWrapper {
    display: flex;
    justify-content: center;
  }
  .gotoLogin {
    margin-left: 0.714rem;
  }
  .textError {
    font-size: 0.857rem;
    color: red;
    margin: 0.142rem 0;
    padding: 0.142rem;
  }
  .inputC {
    width: 100%;
    margin-top: 0.4rem;
    padding: 0.5rem 1rem;
    outline: none;
    border: 1px solid ${props => props.border || "var(--border-default-color)"};
    border-radius: 0.3rem;
    font-size: 0.9rem;
    font-weight: 400;
  }

  .submitBt {
    border: none;
    color: white;
    background-color: var(--btn-bg-color);
    cursor: pointer;
    font-size: ${props => props.fontSize || "1rem"};
    text-align: center;
    background-color: ${props => props.bg};
    color: ${props => props.fontColor};
    padding: ${props => props.padding || "0.5rem 0.7rem"};
    border-radius: 0.214rem;
  }
  .gtl {
    color: var(--question-foem-focus-color);
  }
`;

function SignupInfo() {
  const navigate = useNavigate();
  const defaultImage = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [isValidate, setIsValidate] = useState(false);

  function handleUserName(e) {
    setUsername(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function checkUsername() {
    const usernameRegexp = /^[a-zA-Z가-헿0-9]{4,}$/;
    let flag = true;
    if (!username || !usernameRegexp.test(username)) {
      setUsernameError(true);
      flag = false;
    } else {
      setUsernameError(false);
      flag = true;
    }
    return flag;
  }

  function checkEmail() {
    const emailRegexp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let flag = true;
    if (!email || !emailRegexp.test(email)) {
      setEmailError(true);
      flag = false;
    } else {
      setEmailError(false);
      flag = true;
    }
    return flag;
  }

  function checkPassword() {
    const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z\\d`~!@#$%^&*()-_=+]{8,}$/;
    let flag = true;
    if (!password || !passwordRegexp.test(password)) {
      setPasswordError(true);
      flag = false;
    } else {
      setPasswordError(false);
      flag = true;
    }
    return flag;
  }

  function validation() {
    if (checkUsername()) {
      console.log("username 유효");
    } else {
      console.log("username 유효하지않음");
    }
    if (checkEmail()) {
      console.log("email 유효");
    } else {
      console.log("email 유효하지않음");
    }
    if (checkPassword()) {
      console.log("password 유효");
    } else {
      console.log("password 유효하지않음");
    }

    if (checkUsername() && checkEmail() && checkPassword()) {
      console.log("signup ready");
      return true;
    }
    return false;
  }

  const dataURLtoFile = (dataurl, fileName) => {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    const n = bstr.length;
    const u8arr = new Uint8Array(n);

    for (let i = 0; i < n; i += 1) {
      u8arr[i] = bstr.charCodeAt(i);
    }

    return new File([u8arr], fileName, { type: mime });
  };

  const getImage = async () => {
    const b64data = defaultImage.current.currentSrc;
    const imagefile = dataURLtoFile(b64data, "defaultImage.jpeg");
    return imagefile;
  };

  // const onUpload = async () => {
  //   const formData = new FormData();
  //   const finalImage = await getImage();
  //   formData.append("profile", finalImage);
  //   formData.append("email", email);
  //   formData.append("password", password);
  //   formData.append("nickname", username);

  //   const goLogin = () => {
  //     navigate("/login");
  //   };
  // };

  function onSubmit(event) {
    event.preventDefault();

    if (validation()) {
      console.log("✅ Form submitted.");
      // onUpload();
      axios
        .post(`${process.env.REACT_APP_API_URL}/users`, {
          email,
          username,
          password,
        })
        .then(_ => {
          navigate("/login");
        })
        .catch(err => console.error(err));
    }
  }

  const borderColor = {
    true: "w-full px-2 py-1 border rounded border-danger-500",
    false: "w-full px-2 py-1 border rounded border-soGray-light",
  };

  return (
    <StyledSignupSection>
      <div id="main">
        <div className="mainContainer">
          <form className="form" onSubmit={onSubmit}>
            <div className="inputLI">
              Display name
              <div className="inputText">
                <input className="inputC" type="text" onChange={handleUserName} />
                {usernameError && <p className="textError">4자 이상부터 가능하며 특수 문자가 없어야 합니다.</p>}
              </div>
            </div>
            <div className="inputLI">
              Email
              <div className="inputText">
                <input className="inputC" type="Email" value={email} onChange={handleEmail} />
                {emailError && <p className="textError">이메일 형식에 맞지 않습니다.</p>}
              </div>
            </div>
            <div className="inputLI">
              Password
              <div className="inputText">
                <input className="inputC" type="password" value={password} onChange={handlePassword} />
                {passwordError && <p className="textError">영어와 숫자를 최소 1개 포함하여 8자 이상이어야합니다.</p>}
              </div>
            </div>
            <p className="text">
              Passwords must contain at least eight characters, including at least 1 letter and 1 number.
            </p>
            {/* <div className="img">
          <img src={identicon1} ref={defaultImage} alt="default-profile" />
          </div> */}
            <button type="submit" style={{ width: "268px", height: "38px" }} className="submitBt">
              Sign up
            </button>
            <div className="mainFooter">
              By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy
            </div>
          </form>
        </div>
      </div>
      <div className="gotoLoginWrapper">
        <p className="mx-1">Already have an account? </p>
        <div className="gotoLogin">
          <Link to="/login" className="gtl">
            Log in
          </Link>
        </div>
      </div>
    </StyledSignupSection>
  );
}

export default SignupInfo;
