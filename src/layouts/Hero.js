import React from "react";
import styled from "styled-components";
import { device } from "../theme/device";

import { Container } from "./Wrappers";
import SocialBtns from "../components/SocialBtns";
import Avatar from "../images/profile_pic.jpg";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <TextBox>
          <p>linguist / frontend engineer</p>
          <h1>I'm Anastasia</h1>
          <h3>Text-to-speech & Frontend engineering</h3>
          <p>
            I help build a voice assistant technology by applying my background
            in linguistics and experience in web development.
          </p>
          <SocialBtns />
        </TextBox>
        <ImageBox>
          <img src={Avatar} alt="Anastasia Titova" />
        </ImageBox>
      </Container>
    </HeroSection>
  );
};

export default Hero;

export const HeroSection = styled.div``;

const TextBox = styled.div`
  height: 100%;
  @media ${device.iPhoneProMax} {
    height: auto;
  }

  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;

  @media ${device.tabLand} {
    padding-right: 0.5rem;
  }

  @media ${device.tabPort} {
    padding-right: 0;
    align-items: flex-start;
    justify-content: flex-start;
  }

  p {
    font-size: 18px;
    color: ${(props) => props.theme.textMain};
  }

  p:first-child {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 4px;
    color: ${(props) => props.theme.textSec};
  }

  p:nth-child(4) {
    padding-bottom: 2.2rem;
  }

  h1,
  h3 {
    color: ${(props) => props.theme.accentMain};
  }

  h1 {
    padding: 0.3rem 0 1rem 0;
    @media ${device.tabLand} {
      line-height: 3rem;
    }
  }
  h3 {
    padding: 1rem 0;
    padding-right: 5rem;
  }

  h1,
  h3 {
    @media ${device.tabPort} {
      padding: 1rem 0;
    }
  }
`;

const ImageBox = styled.div`
  height: 100%;
  @media ${device.iPhoneProMax} {
    height: auto;
  }

  @media ${device.tabPort} {
    display: grid;
    place-items: center;
    padding-top: 2rem;
  }

  @media ${device.iPhoneProMax} {
    padding-top: 2rem;
  }

  img {
    width: 25rem;

    @media ${device.tabLand} {
      width: 100%;
    }
    @media ${device.tabPort} {
      width: 100%;
      border-radius: 10px;
    }
  }
`;
