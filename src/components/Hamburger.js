import React from "react";
import styled from "styled-components";
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline";
import { Close } from "@styled-icons/evaicons-solid/Close";

const Hamburger = ({ open, setOpen }) => {
  const handleClick = () => {
    open === true ? setOpen(false) : setOpen(true);
  };

  return (
    <StyledButton>
      {open === true ? (
        <CloseImg onClick={() => handleClick()} />
      ) : (
        <Menu onClick={() => handleClick()} />
      )}
    </StyledButton>
  );
};

export default Hamburger;

const StyledButton = styled.button`
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

const Menu = styled(MenuOutline)`
  width: 2.5rem;
  color: ${(props) => props.theme.textSec};
`;

const CloseImg = styled(Close)`
  width: 2.5rem;
  color: ${(props) => props.theme.textSec};
`;
