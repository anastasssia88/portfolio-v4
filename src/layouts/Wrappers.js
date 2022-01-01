import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../theme/device";

import { HeroSection } from "./Hero";
import { Skills, Experience, Projects } from "./About";

import bgImage from "../images/bg-light.png";
import bgImageMobile from "../images/bg-mobile.png";

export const Section = styled.section`
  width: 100%;
  padding-left: var(--padding-y-md);
  padding-right: var(--padding-y-md);
  padding-top: 6rem;
  padding-bottom: 6rem;
  background: ${(props) => props.theme.bgMain};

  @media ${device.tabLand} {
    padding-left: 10%;
    padding-right: 10%;
  }

  // App.js
  main & {
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: contain;
    max-width: 100vw;

    @media ${device.tabPort} {
      background-image: url(${bgImageMobile});
    }

    h2 {
      color: ${(props) => props.theme.accentMain};
      text-align: center;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  padding-top: 4rem;
  padding-bottom: 4rem;

  ${HeroSection} & {
    padding: 1rem 0 4rem 0;
    display: flex;
    flex-direction: row;

    @media ${device.iPhoneProMax} {
      padding: 0rem 0 2rem 0;
    }

    @media ${device.tabPort} {
      padding: 0rem 0 6rem 0;
      flex-direction: column;
    }
  }

  ${Skills} &, ${Experience} &, ${Projects} & {
    max-width: 100%;

    @media ${device.tabPort} {
      padding-bottom: 0;
    }
  }
`;

export const Div = styled(motion.div)`
  width: 100%;
  padding-left: var(--padding-y-sm);
  padding-right: var(--padding-y-sm);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: ${(props) => props.theme.bgMain};

  footer & {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media ${device.tabPort} {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }

  /* header nav & {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.6s ease-out;
    @media ${device.tabPort} {
      flex-direction: column;
      margin-top: ${(props) => (props.open === true ? "0px" : "-30rem")};
    }
  } */
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.6rem;

  /* projects */
  justify-content: ${(props) => props.projects && "center"};
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;

  @media ${device.tabPort} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
  }

  > li {
    margin-right: 4rem;
    cursor: pointer;

    @media ${device.tabPort} {
      margin-right: 0;
      margin-top: 1rem;
    }
  }

  > li > a {
    color: ${(props) => props.theme.textMain};
    transition: all 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.accentSec};
    }
  }
`;
