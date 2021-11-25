import React, { useState } from "react";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";

import Navbar from "./layouts/Navbar";
import Hero from "./layouts/Hero";
import About from "./layouts/About";
import Form from "./layouts/Form";
import FormTest from "./layouts/FormTest";
import Footer from "./layouts/Footer";
import { Section } from "./layouts/Wrappers";

// images
import bgImage from "./images/bg-light.png";
import bgImageMobile from "./images/bg-mobile.png";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Navbar theme={theme} setTheme={setTheme} />
      </header>
      <main>
        <MainSection>
          <Hero />
          <About />
          <Form />
        </MainSection>
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
};

export default App;

const MainSection = styled(Section)`
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
`;
