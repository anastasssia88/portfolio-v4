import React from 'react'
import styled from "styled-components";

const Tag = ({ content, color }) => {
    return (
        <TagBox color={color}>
            { content }
        </TagBox>
    )
}

export default Tag

const TagBox = styled.li`
    margin-right: 0.6rem;
    margin-top: 1rem;
    padding: 0.4rem 1rem;
    font-size: 12px;
    min-width: 4rem;
    border-radius: 10px;
    background: lavender;
    color: ${ props => props.theme.mainSec};
    text-align: center;

    background: ${ props => props.color }
`
