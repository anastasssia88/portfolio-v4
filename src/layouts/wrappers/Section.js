import styled from "styled-components";
import bgImage from "../../images/bg-light.png";
import bgImageMobile from "../../images/bg-mobile.png";

export const Section = styled.section`
  width: 100%;
  padding-left: var(--padding-y-md);
  padding-right: var(--padding-y-md);
  padding-top: 6rem;
  padding-bottom: 6rem;
  background: ${(props) => props.theme.bgMain};

  @media (max-width: 768px) {
    padding-left: 10%;
    padding-right: 10%;
  }

  // App.js
  main & {
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: contain;
    max-width: 100vw;

    @media (max-width: 768px) {
      background-image: url(${bgImageMobile});
    }

    h2 {
      color: ${(props) => props.theme.accentMain};
      text-align: center;
    }
  }
`;
