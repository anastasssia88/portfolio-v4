import React, {useState} from 'react'
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";

import Navbar from "./layouts/Navbar";
import Hero from "./layouts/Hero";
import Core from "./layouts/Core";
import Form from "./layouts/Form";
import Footer from "./layouts/Footer";
import {Section} from "./layouts/Wrappers"

import bgImage from "./images/bg-light.png"


const App = () => {
    const [ theme, setTheme ] = useState(lightTheme);
    return (
        <ThemeProvider theme={theme}>
            <header>
                <Navbar theme={theme} setTheme={setTheme}/>
            </header>
            <main>
                <MainSection>
                    <Hero />
                    <Core />
                    <Form />
                </MainSection>
            </main>
            <footer>
                <Footer />
            </footer>
        </ThemeProvider>
    )
}

export default App

const MainSection = styled(Section)`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: contain;
`