import React from 'react'
import styled from "styled-components";

// components
import {Container} from "./Wrappers"
import SocialBtns from "../components/SocialBtns"

// images
import bgImage from "../images/bg-light.png"
import Avatar from "../images/profile_pic.jpg"


const Hero = () => {
    return (
        <HeroSection>
            <div>
                <p>linguist / frontend engineer</p>
                <h1>I'm Anastasia</h1>
                <h3>Text-to-speech & Frontend engineering</h3>
                <p>I help build a voice assistant technology by applying my background in linguistics and experience in web development.</p>
                <SocialBtns />
            </div>
            <div>
                <img src={Avatar} alt="Anastasia Titova" />
            </div>
        </ HeroSection>
    )
}

export default Hero


const HeroSection = styled(Container)`
    display: flex;
    flex-direction: row;

    div {
        height: 100%;
    }

    div:first-child{
        z-index: 222;
        padding-right: 5rem;
        display: flex;
        flex-direction: column;
        align-items: space-between;
        justify-content: space-between;

        p {
            font-size: 18px;
            color: ${ props => props.theme.textMain};
        }

        p:first-child{
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 4px;
            color: ${ props => props.theme.textSec};
        }

        h1, h3 {
            color: ${ props => props.theme.accentMain};
        }
        
        h1 {
            padding: 0.3rem 0 1rem 0;
        }
        h3 {
            padding: 1rem 0;
            padding-right: 5rem;
        }
    }

    div:nth-child(2){
        /* width: 30%; */
        z-index: 222;
        img {
            width: 25rem;
        }
    }

`

