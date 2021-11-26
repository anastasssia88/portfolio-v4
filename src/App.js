import React, { useState } from "react";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";

import Navbar from "./layouts/Navbar";
import Hero from "./layouts/Hero";
import About from "./layouts/About";
import Form from "./layouts/Form";
import Footer from "./layouts/Footer";
import { Section } from "./layouts/Wrappers";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Navbar theme={theme} setTheme={setTheme} />
      </header>
      <main>
        <Section>
          <Hero />
          <About />
          <Form />
        </Section>
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
};

export default App;

// const MainSection = styled(Section)`
//   background-image: url(${bgImage});
//   background-repeat: no-repeat;
//   background-size: contain;
//   max-width: 100vw;

//   @media (max-width: 768px) {
//     background-image: url(${bgImageMobile});
//   }

//   h2 {
//     color: ${(props) => props.theme.accentMain};
//     text-align: center;
//   }
// `;
