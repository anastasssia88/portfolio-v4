import React, {useState} from 'react'
import styled from "styled-components";

// components
import {Container} from "./Wrappers"
import Card from "../components/Card"
import WorkCard from "../components/WorkCard"
import Project from "../components/Project"

const About = () => {
    const [experience, setExperience] = useState(
    [{
        id: 11,
        state: "current",
        title: "Siri Voice Buidler / Frontend Engineer",
        dates: "Aug 2021 - Present",
        company: "Apple via Advantis",
        description: "Improving Russian voices of Siri. Helping increase TTS team's productivity by building user interfaces for voice building tools.",
        tags: ["Python", "JavaScript", "Flask", "Postgres", "React.js", "Machine learning", "Phonetics", "IPA", "Git"]
    },
    {
        id: 12,
        state: "past",
        title: "Frontend Engineer",
        dates: "Jan 2019 - Aug 2021",
        company: "Upwork",
        description: "Developed performant and accessible user interfaces with Reactjs and Nextjs. Reduced by 20% cost-per-lead by investigating and improving the performance of a website by eliminating render-blocking CSS and JavaScript. Increased  development productivity by 2 hours/day by refactoring & buidling reusable components.",
        tags: ["JavaScript", "HTML/CSS", "React.js", "Next.js", "TailwindCSS", "Bootstrap", "Styled Components", "Git"]
    },
    ]);

    const [projects, setProjects] = useState(
        [{
            id: 111,
            name: "petspaw",
            title: "PetsPaw",
            type: "Web app",
            description: "Individual project. Built a React web application based on The Dogs API.",
            tags: ["React.js", "Styled Components", "API"],
            demoLink: "https://petspaw-by-anastasia-titova.netlify.app/",
        },
        {
            id: 122,
            name: "oxana",
            title: "Oxana's Cakes",
            type: "Website",
            description: "Website for a local small business - bakery in Los Angeles.",
            tags: ["JavaScript", "HTML/CSS"],
            demoLink: "https://oxanascakes.netlify.app/",
        },
        ]);
    return (
        <>
            <StyledContainer skills id="skills">
                <h2>Skills & Toolset</h2>  
                <div>
                    <Card type="Languages" content="Javascript, Python, HTML5, CSS3, SQL, C++"/>
                    <Card type="Tools" content="React.js, Next.js, Flask, Django, Postgres, MongoDB, Git"/>
                    <Card type="Other" content="Text-to-speech, Voice Building, Machine learning"/>
                </div>
            </StyledContainer>  
            <StyledContainer experience id="work-experience">
                <h2>Work Experience</h2>  
                <div>
                    {
                        experience.map( i => <WorkCard key={i.id} state={i.state} title={i.title} dates={i.dates} company={i.company} description={i.description} tags={i.tags}
                        
                        />)
                    }
                </div>   
            </StyledContainer>  
            <StyledContainer projects id="projects">
                <h2>Coding Projects</h2>  
                <div>
                    {
                        projects.map( i => <Project key={i.id} name={i.name} title={i.title} type={i.type} description={i.description} tags={i.tags} demoLink={i.demoLink}
                        />)
                    }
                </div>     
            </StyledContainer>  
        </>
    )
}

export default About






const StyledContainer = styled(Container)`
    > div {
        display: flex;
        justify-content: space-between;
        align-items: space-between;

        /* skills */
        padding: ${ props => props.skills && "3rem 0"};
        
        /* experience */
        margin: ${ props => props.experience && "3rem 10%"};
        flex-direction: ${ props => props.experience && "column"};
        border-left: ${ props => props.experience && "4px solid"};
        border-color: ${ props => props.experience && props.theme.accentMain};

        /* projects */
        padding: ${ props => props.projects && "3rem 0"};
        width: ${ props => props.projects && "100%"};
    }

`

        
                                 