import { Link } from "react-router-dom";
import { StyledLi } from "./StyledLi";

function FooterItem({ link, text }) {
  return (
    <StyledLi>
      <Link to={link}>{text}</Link>
    </StyledLi>
  );
}

export default FooterItem;
