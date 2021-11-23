import React from 'react'
import styled from "styled-components";

import {Div, ListContainer} from "./Wrappers"
import Button from "../components/Button"

const Navbar = () => {
    return (
        <StyledNav>
                <ListWtapper>
                    <ul>
                        <li><a href="#skills">Skills</a></li>  
                        <li><a href="#work-experience">Work Experience</a></li>  
                        <li><a href="#projects">Projects</a></li>  
                    </ul>
                    <Button content="Contact"/>
                </ListWtapper>
        </StyledNav>
    )
}

export default Navbar

const StyledNav = styled.nav`
    min-height: 3rem;
`

const ListWtapper = styled(Div)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    
    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    ul > li {
        margin-right: 4rem;
        cursor: pointer;       
    }

    ul > li > a {
        color: ${ props => props.theme.textMain };
        transition: all 0.3s ease;

        &:hover {
            color: ${ props => props.theme.accentSec };
        }
    }

`
