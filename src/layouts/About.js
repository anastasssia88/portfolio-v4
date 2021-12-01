import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// import Container from "./wrappers/Container";
import { Container } from "./Wrappers";
import Card from "../components/Card";
import WorkCard from "../components/WorkCard";
import Project from "../components/Project";

const About = () => {
  const [tools, setTools] = useState([
    {
      id: 1,
      type: "Languages",
      content: "Javascript, Python, HTML5, CSS3, SQL",
    },
    {
      id: 2,
      type: "Tools",
      content: "React.js, Next.js, Flask, Django, Postgres, MongoDB, Git",
    },
    {
      id: 3,
      type: "Other",
      content: "Text-to-speech, Voice Building, Machine learning",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 11,
      state: "current",
      title: "Siri Voice Buidler / Frontend Engineer",
      dates: "Aug 2021 - Present",
      company: "Apple via Advantis",
      description:
        "Improving Russian voices of Siri. Helping increase TTS team's productivity by building user interfaces for voice building tools.",
      tags: [
        "Python",
        "JavaScript",
        "Flask",
        "Postgres",
        "React.js",
        "Machine learning",
        "Phonetics",
        "IPA",
        "Git",
      ],
    },
    {
      id: 12,
      state: "past",
      title: "Frontend Engineer",
      dates: "Jan 2019 - Aug 2021",
      company: "Freelance",
      description:
        "Developed performant and accessible user interfaces with Reactjs and Nextjs. Reduced by 20% cost-per-lead by investigating and improving the performance of a website by eliminating render-blocking CSS and JavaScript. Increased  development productivity by 2 hours/day by refactoring & buidling reusable components.",
      tags: [
        "JavaScript",
        "HTML/CSS",
        "React.js",
        "Next.js",
        "TailwindCSS",
        "Bootstrap",
        "Styled Components",
        "Git",
      ],
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: 111,
      name: "petspaw",
      title: "PetsPaw",
      type: "Web app",
      description:
        "Individual project. Built a React web application based on The Dogs API.",
      tags: ["React.js", "Styled Components", "API"],
      demoLink: "https://petspaw-by-anastasia-titova.netlify.app/",
    },
    {
      id: 122,
      name: "oxana",
      title: "Oxana's Cakes",
      type: "Website",
      description:
        "Website for a local small business - bakery in Los Angeles.",
      tags: ["JavaScript", "HTML/CSS"],
      demoLink: "https://oxanascakes.netlify.app/",
    },
  ]);
  return (
    <>
      <Skills id="skills">
        <Container>
          <h2>Skills & Toolset</h2>
          <CardContainer>
            {tools.map((i) => (
              <Card key={i.id} type={i.type} content={i.content} />
            ))}
          </CardContainer>
        </Container>
      </Skills>

      <Experience id="work-experience">
        <Container>
          <h2>Work Experience</h2>
          <CardContainer>
            {experience.map((i) => (
              <WorkCard
                key={i.id}
                state={i.state}
                title={i.title}
                dates={i.dates}
                company={i.company}
                description={i.description}
                tags={i.tags}
              />
            ))}
          </CardContainer>
        </Container>
      </Experience>

      <Projects id="projects">
        <Container>
          <h2>Coding Projects</h2>
          <CardContainer>
            {projects.map((i) => (
              <Project
                key={i.id}
                name={i.name}
                title={i.title}
                type={i.type}
                description={i.description}
                tags={i.tags}
                demoLink={i.demoLink}
              />
            ))}
          </CardContainer>
        </Container>
      </Projects>
    </>
  );
};

export const Skills = styled.div``;
export const Experience = styled.div``;
export const Projects = styled.div``;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  ${Skills} & {
    padding: 3rem 0;
  }

  ${Experience} & {
    margin: 3rem 10%;
    flex-direction: column;
    border-left: 4px solid;
    border-color: ${(props) => props.theme.accentMain};
    @media (max-width: 768px) {
      margin: 3rem 0%;
    }
  }

  ${Projects} & {
    padding: 3rem 0;
    width: 100%;
  }
`;

About.propTypes = {
  tools: PropTypes.array,
  experience: PropTypes.array,
  projects: PropTypes.array,
};

export default About;
