import React from "react";

import { Div, ListContainer } from "./Wrappers";
import SocialBtn from "../components/SocialBtns";

const Footer = () => {
  return (
    <Div>
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
    </Div>
  );
};

export default Footer;
