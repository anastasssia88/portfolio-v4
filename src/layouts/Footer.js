import React from 'react'
import styled from "styled-components";

import {Div, ListContainer} from "./Wrappers"
import Button from "../components/Button"
import SocialBtn from "../components/SocialBtns"

const Footer = () => {
    return (
        <StyledDiv>
            <div>
                <SocialBtn noMargin/>
            </div>

            <ListContainer>
                <li><a href="#skills">Skills</a></li>  
                <li><a href="#work-experience">Work Experience</a></li>  
                <li><a href="#projects">Projects</a></li> 
            </ListContainer>
        </StyledDiv>
    )
}

export default Footer


const StyledDiv = styled(Div)`
    background: ${props => props.theme.accentPink};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > div {

    }

`