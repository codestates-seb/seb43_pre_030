import styled from "styled-components";
import { StyledTitle } from "../styles/StyledTItle";
import { ButtonMain } from "./ButtonMain";
import Button from "./Button";
import HeaderContentSection from "./HeaderContentSection";

const MainButton = Button({
  bg: "#fff",
  fontColor: "var(--font-color-light)",
  border: "1px solid #BABFC4",
  hoverBg: "#E3E5E8",
});
function MainHeaderSection() {
  return (
    <HeaderContentSection title="Top Questions">
      <>
        <MainButton>hottest</MainButton>
        <MainButton>newest</MainButton>
        <MainButton>oldest</MainButton>
      </>
    </HeaderContentSection>
  );
}

export default MainHeaderSection;
