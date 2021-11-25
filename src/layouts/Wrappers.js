import styled from "styled-components";
import { motion } from "framer-motion";

// ------> HTML tags <------

export const Section = styled.section`
  width: 100%;
  padding-left: 17%;
  padding-right: 17%;
  padding-top: 6rem;
  padding-bottom: 6rem;
  background: ${({ theme }) => theme.colors.bgMain};

  @media (max-width: 768px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export const Div = styled(motion.div)`
  width: 100%;
  padding-left: 17%;
  padding-right: 17%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: ${({ theme }) => theme.colors.bgMain};

  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  /* flex */
  display: ${(props) => props.flex && "flex"};

  /* nav */
  flex-direction: ${(props) => props.nav && "row"};
  justify-content: ${(props) => props.nav && "flex-end"};
  align-items: ${(props) => props.nav && "center"};
  @media (max-width: 768px) {
    flex-direction: ${(props) => props.nav && "column"};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.6rem;

  /* projects */
  justify-content: ${(props) => props.projects && "center"};
`;

// ------> Compound components <------

export const Container = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
  }

  > li {
    margin-right: 4rem;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-top: 1rem;
    }
  }

  > li > a {
    color: ${({ theme }) => theme.colors.textMain};
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accentSec};
    }
  }
`;
