import styled from "styled-components";

// ------> HTML tags <------

export const Section = styled.section`
  width: 100%;
  padding-left: 17%;
  padding-right: 17%;
  padding-top: 6rem;
  padding-bottom: 6rem;
  background: ${(props) => props.theme.bgMain};
`;

export const Div = styled.div`
  width: 100%;
  padding-left: 17%;
  padding-right: 17%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: ${(props) => props.theme.bgMain};

  /* flex */
  display: ${(props) => props.flex && "flex"};

  /* nav */
  flex-direction: ${(props) => props.nav && "flex"};
  justify-content: ${(props) => props.nav && "flex-end"};
  align-items: ${(props) => props.nav && "center"};
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

  > li {
    margin-right: 4rem;
    cursor: pointer;
  }

  > li > a {
    color: ${(props) => props.theme.textMain};
    transition: all 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.accentSec};
    }
  }
`;
