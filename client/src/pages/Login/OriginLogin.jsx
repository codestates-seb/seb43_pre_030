import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/ui/Button";

const StyledOriginLoginWrapper = styled.div`
  width: 18rem;
  padding: 1rem;
  border: 1px solid black;
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05), 0 1rem 2rem rgba(0, 0, 0, 0.05);
`;

function OriginLogin() {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledOriginLoginWrapper>
      <div className="email" />
      <div className="pw" />
      <div className="button">
        <Button>Log in</Button>
      </div>
    </StyledOriginLoginWrapper>
  );
}

export default OriginLogin;
