import React from "react";
import styled from "styled-components";

const Tag = ({ content, color }) => {
  return <StyledTag>{content}</StyledTag>;
};

export default Tag;

const StyledTag = styled.li`
  margin-right: 0.6rem;
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  font-size: 12px;
  min-width: 4rem;
  border-radius: 10px;
  background: lavender;
  color: ${(props) => props.theme.mainSec};
  text-align: center;

  background: ${(props) => props.color};
`;
