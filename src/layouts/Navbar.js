import React from 'react'
import styled from "styled-components";

import {Section, Div} from "./Wrappers"

const Navbar = () => {
    return (
        <StyledNav>
            <ListWtapper>
                <ul>
                    <li>Skills</li>  
                    <li>Work Experience</li>  
                    <li>Projects</li>  
                    <li>Contact</li>
                </ul>
            </ListWtapper>
        </StyledNav>
    )
}

export default Navbar

const StyledNav = styled.nav`
    min-height: 30rem;
`

const ListWtapper = styled(Div)`

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

`
