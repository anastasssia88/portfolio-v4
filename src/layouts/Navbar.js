import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../theme/device";

// components
import { Div, ListContainer } from "./Wrappers";
import Button from "../components/Button";
import Hamburger from "../components/Hamburger";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <Hamburger open={open} setOpen={setOpen} />
      <StyledDiv open={open}>
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

const StyledNav = styled.nav`
  min-height: 3rem;
  background: ${(props) => props.theme.bgMain};
  li:not(:last-child) {
    padding-bottom: 0.5rem;
  }
  li:last-child {
    padding-bottom: 1rem;
  }
  @media ${device.tabPort} {
    min-height: 3.5rem;
    padding: 1rem 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
`;

const StyledDiv = styled(Div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  @media ${device.tabPort} {
    flex-direction: column;
    margin-top: ${(props) => (props.open === true ? "0px" : "-30rem")};
  }
`;

Navbar.propTypes = {
  open: PropTypes.bool,
};

export default Navbar;
