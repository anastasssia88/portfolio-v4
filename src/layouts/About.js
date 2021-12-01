import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import toolsJSON from "../data/tools.json";
import experienceJSON from "../data/experience.json";
import projectsJSON from "../data/projects.json";

import { Container } from "./Wrappers";
import Card from "../components/Card";
import WorkCard from "../components/WorkCard";
import Project from "../components/Project";

const About = () => {
  const [tools, setTools] = useState(toolsJSON);
  const [experience, setExperience] = useState(experienceJSON);
  const [projects, setProjects] = useState(projectsJSON);

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
