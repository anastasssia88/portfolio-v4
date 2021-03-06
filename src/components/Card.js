import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { device } from "../theme/device";

// components
import { CodeSlash } from "@styled-icons/bootstrap/CodeSlash";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { Voiceprint } from "@styled-icons/remix-line/Voiceprint";

const Card = ({ type, content }) => {
  // animations
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const popUp = {
    visible: { y: 0, transition: { duration: 0.5 } },
    hidden: { y: 40 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <StyledCard ref={ref} variants={popUp} animate={controls} initial="hidden">
      {type === "Languages" && <Languages />}
      {type === "Tools" && <Tools />}
      {type === "Other" && <Voice />}
      <p>{type}</p>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled(motion.div)`
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
  padding: 2rem 1.5rem;

  @media ${device.tabPort} {
    width: 100%;
  }

  &:first-child {
    @media ${device.tabPort} {
      margin-bottom: 1.5rem;
    }
  }

  &:nth-child(2) {
    @media ${device.tabPort} {
      margin-bottom: 1.5rem;
    }
  }

  p {
    padding-top: 1rem;
    text-align: center;
  }

  p:nth-child(2) {
    font-weight: bold;
  }
`;

export const Languages = styled(CodeSlash)`
  width: 32px;
  height: 32px;
  background: #eae2f9;
  padding: 4px;
  border-radius: 20px;
`;
export const Tools = styled(ReactLogo)`
  width: 32px;
  height: 32px;
  background: #eae2f9;
  padding: 4px;
  border-radius: 20px;
`;
export const Voice = styled(Voiceprint)`
  width: 32px;
  height: 32px;
  background: #eae2f9;
  padding: 4px;
  border-radius: 20px;
`;
