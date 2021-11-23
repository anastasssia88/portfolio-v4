import React from "react";
import styled from "styled-components";

import { Div, ListContainer, ListWrapper } from "./Wrappers";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <StyledNav>
      <Div flex nav>
        <ListContainer>
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
      </Div>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  min-height: 3rem;
`;
