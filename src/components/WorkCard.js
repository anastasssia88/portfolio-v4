import React from 'react'
import styled from "styled-components";

// components
import {List} from "../layouts/Wrappers"
import Tag from "../components/Tag"


const WorkCard = ({state, title, dates, company, description, tags}) => {
    description = description.split(". ");
    console.log(description)

    return (
        <StyledWorkCard state={state}>
            <h3>{title}</h3>
            <p>{dates}</p>
            <p>{company}</p>
            {
                description.map( sentence => <p key={sentence}>- {sentence}</p>)
            }
            <List experience>
                {
                    tags.map( i => <Tag key={i} content={i}/>)
                }
            </List>
            
        </StyledWorkCard>
    )
}

export default WorkCard


const StyledWorkCard = styled.div`
    padding: 3rem 0;
    padding-left: 4rem;

    h3 {
        color: ${ props => props.theme.accentMain };
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 1rem;
    }

    h3:before{
        content: " ";
        display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 20px;
        position: absolute;
        left: 22.9%;
        border: 4px solid;

        background: ${ props => props.theme.accentMain };
        border-color: ${ props => props.theme.accentMain };
        background: ${ props => props.state === "current" && props.theme.bgMain};
    }

    /* p:first-child {
        font-weight: bold;
        padding-bottom: 1rem;
    } */

    p:nth-child(2) {font-size: 12px;}
    p:nth-child(3) {font-size: 12px;}

    p:nth-child(4) {
        padding-top: 1rem;
    }
`

