import { Link, useNavigate } from "react-router-dom";
import { ButtonMain } from "../../components/ui/ButtonMain";
import { ButtonSub } from "../../components/ui/ButtonSub";

function HeaderButtonContainer() {
  // const navigate = useNavigate();

  // const logInHandler = () => {
  //   navigate("/login");
  // };
  // const signInHandler = () => {
  //   navigate("/register");
  // };
  return (
    <>
      <Link to="/login">
        <ButtonSub>Log in</ButtonSub>
      </Link>
      <Link to="/register">
        <ButtonMain>Sign up</ButtonMain>
      </Link>
    </>
  );
}

export default HeaderButtonContainer;
