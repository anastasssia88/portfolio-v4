import React from "react";
import styled from "styled-components";
import { TwitterWithCircle } from "@styled-icons/entypo-social/TwitterWithCircle";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";
import { Github } from "@styled-icons/bootstrap/Github";

const SocialBtns = () => {
  return (
    <StyledDiv>
      <a href="https://twitter.com/linguanastya" target="_blank" rel="noreferrer">
        <Twitter />
      </a>
      <a href="https://github.com/anastasssia88" target="_blank" rel="noreferrer">
        <GitHub />
      </a>
      <a href="https://www.linkedin.com/in/anastasia-titova/" target="_blank" rel="noreferrer">
        <LinkedIn />
      </a>
    </StyledDiv>
  );
};

export default SocialBtns;

const StyledDiv = styled.div`
  height: 100%;
  /* justify-self: flex-end; */

  a {
    margin-right: 0.8rem;
    cursor: pointer;
  }
`;

const Twitter = styled(TwitterWithCircle)`
  color: ${(props) => props.theme.accentSec};
  width: 32px;
  transition: all 0.3s ease-in;

  &:hover {
    color: #f54438;
    transform: scale(106%, 106%);
  }
`;

const LinkedIn = styled(LinkedinWithCircle)`
  color: ${(props) => props.theme.accentSec};
  width: 32px;
  transition: all 0.3s ease-in;

  &:hover {
    color: #f54438;
    transform: scale(106%, 106%);
  }
`;

const GitHub = styled(Github)`
  color: ${(props) => props.theme.accentSec};
  width: 32px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    color: #f54438;
    transform: scale(106%, 106%);
  }
`;
