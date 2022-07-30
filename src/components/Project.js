import React, { useEffect } from "react";
import styled from "styled-components";
import { device } from "../theme/device";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// components
import { List } from "../layouts/Wrappers";
import Tag from "../components/Tag";

// images
import Oxana from "../images/oxana.png";
import Petspaw from "../images/petspaw.png";

const Project = ({ name, title, type, description, tags, demoLink }) => {
  let image = name === "oxana" ? Oxana : Petspaw;

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
    <StyledProject
      ref={ref}
      variants={popUp}
      animate={controls}
      initial="hidden"
      href={demoLink}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.3 },
      }}
    >
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} />
        <div>
          <p>{type}</p>
          <h3>{title}</h3>

          <p>{description}</p>

          <List projects>
            {tags.map((i) => (
              <Tag key={i} content={i} color="#f7e1e6" />
            ))}
          </List>
        </div>
      </a>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled(motion.div)`
  background: ${(props) => props.theme.bgMain};
  -webkit-box-shadow: 0px 1px 14px 4px rgba(194, 194, 194, 0.11);
  box-shadow: 0px 1px 14px 4px rgba(194, 194, 194, 0.11);
  border-radius: 10px;
  width: 47%;
  cursor: pointer;
  transition: all 0.3s ease-out;

  @media ${device.tabPort} {
    width: 100%;
    margin-top: 1rem;
  }

  /* &:hover {
    transform: scale(103%, 103%);
  } */

  a {
    display: flex;
    flex-direction: column;
  }

  a > img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
  }

  a > div {
    padding: 1rem 2rem 2rem 2rem;
    color: ${(props) => props.theme.textMain};

    @media ${device.tabPort} {
      padding: 1rem;
    }

    p {
      text-align: center;
    }

    p:first-child {
      text-align: center;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 4px;
      padding-top: 1rem;
      padding-bottom: 0.4rem;
      color: ${(props) => props.theme.textSec};
    }
    h3 {
      color: ${(props) => props.theme.accentMain};
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      padding-bottom: 1rem;
    }
  }
`;
