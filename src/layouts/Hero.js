import React from 'react'
import styled from "styled-components";

// components
import {Section, Div} from "./Wrappers"
import SocialBtns from "../components/SocialBtns"

// images
import bgImage from "../images/bg-light.png"
import Avatar from "../images/profile_pic.jpg"


const Hero = () => {
    return (
        <HeroSection>
            <div>
                <p>voice builder / web developer</p>
                <h1>Hi, I'm Anastasia</h1>
                <p> I enjoy building things, doing workouts & being out in nature. And I can't live without Youtube tutorials and historical tv shows on Netflix! At work, I help improve a voice assistant technology and improve internal web tools.</p>
                <SocialBtns />
            </div>
            <div>
                <img src={Avatar} alt="Anastasia Titova" />
            </div>
        </HeroSection>
    )
}

export default Hero

const HeroSection = styled(Section)`
    min-height: 100rem;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: row;

    div:first-child{
        padding-right: 4rem;

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

        h1 {
            padding-bottom: 1rem;
            color: ${ props => props.theme.accentMain};
        }
    }

    div:nth-child(2){
        width: 70%;
        img {
            width: 25rem;
        }
    }

`

