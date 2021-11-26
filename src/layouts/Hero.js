import React from "react";
import styled from "styled-components";
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
  @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    height: auto;
  }

  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding-right: 0.5rem;
  }

  @media (max-width: 768px) {
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
    @media (max-width: 1024px) {
      line-height: 3rem;
    }
  }
  h3 {
    padding: 1rem 0;
    padding-right: 5rem;
  }

  h1,
  h3 {
    @media (max-width: 768px) {
      padding: 1rem 0;
    }
  }
`;

const ImageBox = styled.div`
  height: 100%;
  @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    height: auto;
  }

  @media (max-width: 768px) {
    display: grid;
    place-items: center;
    padding-top: 2rem;
  }

  @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    padding-top: 2rem;
  }

  img {
    width: 25rem;

    @media (max-width: 1024px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      width: 100%;
      border-radius: 10px;
    }
  }
`;
// const HeroSection = styled(Container)`
//   padding: 1rem 0 4rem 0;
//   display: flex;
//   flex-direction: row;

//   @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
//     padding: 0rem 0 2rem 0;
//   }

//   @media (max-width: 768px) {
//     padding: 0rem 0 6rem 0;
//     flex-direction: column;
//   }

//   div {
//     height: 100%;

//     @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
//       height: auto;
//     }
//   }

//   div:first-child {
//     padding-right: 5rem;
//     display: flex;
//     flex-direction: column;
//     align-items: space-between;
//     justify-content: space-between;

//     @media (max-width: 1024px) {
//       padding-right: 0.5rem;
//     }

//     @media (max-width: 768px) {
//       padding-right: 0;
//       align-items: flex-start;
//       justify-content: flex-start;
//     }

//     p {
//       font-size: 18px;
//       color: ${(props) => props.theme.textMain};
//     }

//     p:first-child {
//       text-transform: uppercase;
//       font-size: 12px;
//       letter-spacing: 4px;
//       color: ${(props) => props.theme.textSec};
//     }

//     p:nth-child(4) {
//       padding-bottom: 2.2rem;
//     }

//     h1,
//     h3 {
//       color: ${(props) => props.theme.accentMain};
//     }

//     h1 {
//       padding: 0.3rem 0 1rem 0;
//       @media (max-width: 1024px) {
//         line-height: 3rem;
//       }
//     }
//     h3 {
//       padding: 1rem 0;
//       padding-right: 5rem;
//     }

//     h1,
//     h3 {
//       @media (max-width: 768px) {
//         padding: 1rem 0;
//       }
//     }
//   }

//   div:nth-child(2) {
//     @media (max-width: 768px) {
//       display: grid;
//       place-items: center;
//       padding-top: 2rem;
//     }

//     @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
//       padding-top: 2rem;
//     }

//     img {
//       width: 25rem;

//       @media (max-width: 1024px) {
//         width: 100%;
//       }
//       @media (max-width: 768px) {
//         width: 100%;
//         border-radius: 10px;
//       }
//     }
//   }
// `;
