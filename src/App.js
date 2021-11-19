import React, {useState} from 'react'

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";

import Navbar from "./layouts/Navbar";
import Hero from "./layouts/Hero";
import Core from "./layouts/Core";
import Form from "./layouts/Form";
import Footer from "./layouts/Footer";


const App = () => {
    const [ theme, setTheme ] = useState(lightTheme);
    return (
        <ThemeProvider theme={theme}>
            <header>
                <Navbar theme={theme} setTheme={setTheme}/>
            </header>
            <main>
                <Hero />
                <Core />
                <Form />
            </main>
            <footer>
                <Footer />
            </footer>
        </ThemeProvider>
    )
}

export default App
