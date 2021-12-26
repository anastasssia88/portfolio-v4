import React from "react";
import styled from "styled-components";

const Hamburger = ({ open, setOpen }) => {
  const handleClick = () => {
    open === true ? setOpen(false) : setOpen(true);
  };

  return (
    <StyledButton onClick={() => handleClick()}>
      <Icon open={open} />
    </StyledButton>
  );
};

export default Hamburger;

const Icon = styled.span`
  position: relative;
  margin-top: 1rem;
  &,
  &::before,
  &::after {
    background-color: #777;
    width: 2rem;
    height: 2px;
    border-radius: 2px;
    display: inline-block;
  }

  & {
    background-color: ${(props) => props.open === true && "transparent"};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.open === true ? "0" : "-0.5rem")};
    transform: ${(props) => props.open === true && "rotate(135deg)"};
  }
  &::after {
    top: ${(props) => (props.open === true ? "0" : "0.5rem")};
    transform: ${(props) => props.open === true && "rotate(-135deg)"};
  }
`;

const StyledButton = styled.button`
  height: 2rem;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    border: none;
    background: ${(props) => props.theme.bgMain};
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
  }
`;
