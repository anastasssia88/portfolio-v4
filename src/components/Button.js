import React from "react";
import styled from "styled-components";

const Button = ({ content }) => {
  return (
    <a href="#contact">
      <StyledButton>{content}</StyledButton>
    </a>
  );
};

export default Button;

const StyledButton = styled.button`
  background: ${(props) => props.theme.accentSec};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 14px 4px rgba(194, 194, 194, 0.11);
  box-shadow: 0px 1px 14px 4px rgba(194, 194, 194, 0.11);

  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(106%, 106%);
  }
`;
