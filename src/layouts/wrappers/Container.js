import styled from "styled-components";
import { Skills, Experience, Projects } from "../About";
import { HeroSection } from "../Hero";

const Container = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  padding-top: 4rem;
  padding-bottom: 4rem;

  ${HeroSection} & {
    padding: 1rem 0 4rem 0;
    display: flex;
    flex-direction: row;

    @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
      padding: 0rem 0 2rem 0;
    }

    @media (max-width: 768px) {
      padding: 0rem 0 6rem 0;
      flex-direction: column;
    }
  }

  ${Skills} &, ${Experience} &, ${Projects} & {
    max-width: 100%;

    @media (max-width: 768px) {
      padding-bottom: 0;
    }
  }
`;

export default Container;
