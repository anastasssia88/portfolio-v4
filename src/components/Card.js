import React from "react";
import styled from "styled-components";

import { CodeSlash } from "@styled-icons/bootstrap/CodeSlash";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { Voiceprint } from "@styled-icons/remix-line/Voiceprint";

const Card = ({ type, content }) => {
  return (
    <StyledCard>
      {type == "Languages" && <Languages />}
      {type == "Tools" && <Tools />}
      {type == "Other" && <Voice />}
      <p>{type}</p>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  background: pink;
  /* min-height: 12rem; */
  height: auto;
  width: 30%;
  border-radius: 10px;
  background: ${(props) => props.theme.bgMain};
  -webkit-box-shadow: 0px 1px 14px 4px rgba(194, 194, 194, 0.11);
  box-shadow: 0px 1px 14px 4px rgba(194, 194, 194, 0.11);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem;

  p {
    padding-top: 1rem;
    text-align: center;
  }

  p:nth-child(2) {
    font-weight: bold;
  }
`;

const Languages = styled(CodeSlash)`
  width: 32px;
  height: 32px;
  background: #eae2f9;
  padding: 4px;
  border-radius: 20px;
`;
const Tools = styled(ReactLogo)`
  width: 32px;
  height: 32px;
  background: #eae2f9;
  padding: 4px;
  border-radius: 20px;
`;
const Voice = styled(Voiceprint)`
  width: 32px;
  height: 32px;
  background: #eae2f9;
  padding: 4px;
  border-radius: 20px;
`;
