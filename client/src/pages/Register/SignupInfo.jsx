import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import identicon1 from "../../images/icon1.jpeg";

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

  const onUpload = async () => {
    const formData = new FormData();
    const finalImage = await getImage();
    formData.append("profile", finalImage);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("nickname", username);

    const goLogin = () => {
      navigate("/login");
    };
  };

  function onSubmit(event) {
    event.preventDefault();

    if (validation()) {
      console.log("✅ Form submitted.");
      onUpload();
    }
  }

  // 동적으로 tailwindcss 추가
  const borderColor = {
    true: "w-full px-2 py-1 border rounded border-danger-500",
    false: "w-full px-2 py-1 border rounded border-soGray-light",
  };

  return (
    <div className="flex-col w-1/3 my-5 ml-2 mr-10 align-middle justify-items-center">
      <div className="px-5 pt-3 pb-10 bg-white rounded-md drop-shadow-xl">
        <form className="form" onSubmit={onSubmit}>
          <div className="flex-col justify-center mx-2 my-3">
            <div className="font-bold">Display name</div>
            <input type="text" onChange={handleUserName} className={borderColor[!!usernameError]} />
            {usernameError && (
              <p className="text-xxs text-danger-500">4자 이상부터 가능하며 특수 문자가 없어야 합니다.</p>
            )}
          </div>
          <div className="flex-col justify-center mx-2 my-3">
            <div className="font-bold">Email</div>
            <input type="Email" value={email} onChange={handleEmail} className={borderColor[!!emailError]} />
            {emailError && <p className="text-xxs text-danger-500">이메일 형식에 맞지 않습니다.</p>}
          </div>
          <div className="flex-col justify-center mx-2 my-3">
            <div className="font-bold">Password</div>
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              className={borderColor[!!passwordError]}
            />
            {passwordError && (
              <p className="text-xxs text-danger-500">영어와 숫자를 최소 1개 포함하여 8자 이상이어야합니다.</p>
            )}
            <p className="text-sm text-soGray-normal">
              Passwords must contain at least eight characters, including at least 1 letter and 1 number.
            </p>
          </div>
          <button type="submit" className="justify-center w-full mt-10 so-button-primary">
            Sign up
          </button>

          <div className="hidden">
            <label htmlFor="file-input">
              Choose a file: <input type="file" id="file-input" />
              <img src={identicon1} ref={defaultImage} alt="default-profile" />
            </label>
          </div>
        </form>
      </div>
      <div className="flex justify-center my-5">
        <p className="mx-1">Already have an account?</p>
        <a href="./login" className="text-secondary-600 hover:text-secondary-300">
          Log in
        </a>
      </div>
    </div>
  );
}

export default SignupInfo;
