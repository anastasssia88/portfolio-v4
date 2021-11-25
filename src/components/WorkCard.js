import React, { useEffect } from "react";
import styled from "styled-components";

// components
import { List } from "../layouts/Wrappers";
import Tag from "../components/Tag";

const WorkCard = ({ state, title, dates, company, description, tags }) => {
  description = description.split(". ");

  return (
    <StyledWorkCard state={state}>
      <h3>{title}</h3>
      <p>{dates}</p>
      <p>{company}</p>
      {description.map((sentence) => (
        <p key={sentence}>- {sentence}</p>
      ))}
      <List experience>
        {tags.map((i) => (
          <Tag key={i} content={i} />
        ))}
      </List>
    </StyledWorkCard>
  );
};

export default WorkCard;

const StyledWorkCard = styled.div`
  padding: 3rem 0;
  padding-left: 4rem;

  @media (max-width: 768px) {
    padding: 2rem 0;
    padding-left: 2rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.accentMain};
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 1rem;
  }

  h3:before {
    content: " ";
    display: inline-block;
    width: 17px;
    height: 17px;
    border-radius: 20px;
    position: absolute;
    left: 22.9%;
    border: 4px solid;

    background: ${({ theme }) => theme.colors.accentMain};
    border-color: ${({ theme }) => theme.colors.accentMain};
    background: ${({ state, theme }) =>
      state === "current" && theme.colors.bgMain};

    /* @media (max-width: 375px) {
      left: 6%;
    } */

    @media (max-width: 1024px) {
      left: 22.7%;
    }
    @media (max-width: 768px) {
      left: 8.7%;
    }
    @media (max-width: 540px) {
      left: 8%;
    }
    @media (max-width: 425px) {
      left: 7.4%;
    }
    @media (max-width: 375px) {
      left: 7.1%;
    }
    @media (max-width: 320px) {
      left: 7%;
    }
    @media (max-width: 280px) {
      left: 5.9%;
    }
    @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
      left: 7.1%;
    }
  }

  p:nth-child(2) {
    font-size: 12px;
  }
  p:nth-child(3) {
    font-size: 12px;
  }

  p:nth-child(4) {
    padding-top: 1rem;
  }
`;
