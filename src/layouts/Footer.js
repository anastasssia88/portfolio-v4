import React from "react";
import styled from "styled-components";

import { Div, ListContainer } from "./Wrappers";
import SocialBtn from "../components/SocialBtns";

const Footer = () => {
  return (
    <StyledDiv>
      <div>
        <SocialBtn />
      </div>

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
    </StyledDiv>
  );
};

export default Footer;

const StyledDiv = styled(Div)`
  /* background: ${(props) => props.theme.colors.bgMain}; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
