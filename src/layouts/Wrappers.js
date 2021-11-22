import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    padding-left: 17%;
    padding-right: 17%;
    padding-top: 6rem;
    padding-bottom: 6rem;
    background: ${ props => props.theme.bgMain};
`

export const Div = styled.div`
    width: 100%;
    padding: 1.5rem 17%;
    
    background: ${ props => props.theme.bgMain };
`

export const Container = styled.div`
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-top: 4rem;
    padding-bottom: 4rem;
`

export const TagContainer = styled.ul`
    margin-top: 0.6rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

`
