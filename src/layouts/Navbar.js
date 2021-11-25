import React, { useState } from "react";
import styled from "styled-components";

// components
import { Div, ListContainer } from "./Wrappers";
import Button from "../components/Button";
import Hamburger from "../components/Hamburger";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <Hamburger open={open} setOpen={setOpen} />
      <StyledDiv open={open} flex nav>
        <ListContainer open={open}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#work-experience">Work Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ListContainer>
        <Button content="Contact" />
      </StyledDiv>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  min-height: 3rem;
  background: ${({ theme }) => theme.colors.bgMain};
  @media (max-width: 768px) {
    min-height: 3.5rem;
    padding: 1rem 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
`;

const StyledDiv = styled(Div)`
  transition: all 0.6s ease-out;
  @media (max-width: 768px) {
    /* display: ${(props) => (props.open === true ? "flex" : "none")}; */
    margin-top: ${(props) => (props.open === true ? "0px" : "-30rem")};
  }
`;
