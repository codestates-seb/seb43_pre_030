import { Link } from "react-router-dom";
import { ButtonMain } from "./ButtonMain";
import { ButtonSub } from "./ButtonSub";

function HeaderButtonContainer() {
  const logInClickHandler = e => {
    console.log("log in");
  };
  return (
    <>
      <Link to="/login">
        <ButtonSub onClick={logInClickHandler}>Log in</ButtonSub>
      </Link>
      <Link to="/register">
        <ButtonMain onClick={logInClickHandler}>Sign up</ButtonMain>
      </Link>
    </>
  );
}

export default HeaderButtonContainer;
