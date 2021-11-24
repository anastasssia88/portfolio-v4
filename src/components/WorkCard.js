import React, {useEffect} from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import {useInView} from "react-intersection-observer";

// components
import { List } from "../layouts/Wrappers";
import Tag from "../components/Tag";

const WorkCard = ({ state, title, dates, company, description, tags }) => {
  description = description.split(". ");

  // animations
  // const controls = useAnimation();
  // const [ref, inView] = useInView();
  // const fadeIn = {
  //   visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  //   hidden: { opacity: 0, scale: 0 }
  // }

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [controls, inView]);

  return (
    <StyledWorkCard 
      
      state={state}

      // ref={ref}
      // variants = {fadeIn}
      // animate={controls}
      // initial="hidden"
    >
      <h3>{title}</h3>
      <p>{dates}</p>
      <p>{company}</p>
      {description.map((sentence) => (
        <p key={sentence}>- {sentence}</p>
      ))}
      <List experience>
        {tags.map((i) => (
          <Tag key={i} content={i} />
        ))}
      </List>
    </StyledWorkCard>
  );
};

export default WorkCard;

const StyledWorkCard = styled(motion.div)`
  padding: 3rem 0;
  padding-left: 4rem;

  @media (max-width: 768px) {
    padding: 2rem 0;
    padding-left: 2rem;
  }

  h3 {
    color: ${(props) => props.theme.accentMain};
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 1rem;
  }

  h3:before {
    content: " ";
    display: inline-block;
    width: 17px;
    height: 17px;
    border-radius: 20px;
    position: absolute;
    left: 22.9%;
    border: 4px solid;

    background: ${(props) => props.theme.accentMain};
    border-color: ${(props) => props.theme.accentMain};
    background: ${(props) => props.state === "current" && props.theme.bgMain};

    /* @media (max-width: 375px) {
      left: 6%;
    } */

    
    @media (max-width: 1024px) {
      left: 22.7%;
    }
    @media (max-width: 768px) {
      left: 8.7%;
    }
    @media (max-width: 540px) {
      left: 8%;
    }
    @media (max-width: 425px) {
      left: 7.4%;
    }
    @media (max-width: 375px) {
      left: 7.1%;
    }
    @media (max-width: 320px) {
      left: 7%;
    }
    @media (max-width: 280px) {
      left: 5.9%;
    }
  }

  /* p:first-child {
        font-weight: bold;
        padding-bottom: 1rem;
    } */

  p:nth-child(2) {
    font-size: 12px;
  }
  p:nth-child(3) {
    font-size: 12px;
  }

  p:nth-child(4) {
    padding-top: 1rem;
  }
`;
