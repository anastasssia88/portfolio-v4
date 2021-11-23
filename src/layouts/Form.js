import React from 'react'
import styled from "styled-components";
import { useForm } from "react-hook-form";

// components
import {Container} from "./Wrappers"

// images
import Computer from "../images/web-design.svg"


const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <FormContainer id="contact">
            <h2>Let's talk</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name*</label>
                    <input id="name" {...register("name", { required: true, maxLength: 20})} />
                </div>

                <div>
                    <label htmlFor="email">Email*</label>
                    <input id="email" {...register("email", { required: true, maxLength: 50, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })} />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" {...register("message")} />
                </div>
                <StyledSubmit type="submit">Submit</StyledSubmit>
            </form>
        </FormContainer>
    )
}

export default Form


const FormContainer = styled(Container)`
    padding: 3rem 0;
    width: 100%;

    > form {
        padding: 3rem 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5rem 2rem;
        grid-auto-rows: minmax(auto, auto);

        div:first-child{
            grid-column: 1 / 3;
            grid-row: 1;
        }
        div:nth-child(2){
            grid-column: 3 / 5;
            grid-row: 1;
        }
        div:nth-child(3){
            grid-column: 1 / 4;
            grid-row: 2;
        }
        div:last-child{
            grid-column: 4 / 5;
            grid-row: 2;
        }
        
    }

    > form div {
        display: flex;
        flex-direction: column;
    }

    input, textarea {
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        border: none;
        border-bottom: 2px solid ${ props => props.theme.textSec };
        background: ${ props => props.theme.bgMain };
        transition: all 0.3s ease;

        &:focus{
            outline: none;
            border-bottom: 2px solid ${ props => props.theme.accentSec };
        }
    }

    textarea {
        height: auto;
        resize: none;
    }

    input[type="submit"] {
        margin-top: 1rem;
        background: ${ props => props.theme.accentLav };
        border: 2px solid ${ props => props.theme.accentLav };
    }

    label {
        padding-left: 1rem;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 4px;
        color: ${ props => props.theme.textSec};
    }

`
const StyledSubmit = styled.button`
    align-self: end;
    padding: 0.8rem 1rem;
    margin: 1rem 0;
    width: 100%;
    max-height: 45%;
    background: ${ props => props.theme.accentSec };
    border: none;
    border-radius: 20px;
    -webkit-box-shadow: 0px 1px 14px 4px rgba(194,194,194,0.11); 
    box-shadow: 0px 1px 14px 4px rgba(194,194,194,0.11);
    
    font-size: 14px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1.2px;

    cursor: pointer;
    transition: all 0.3s ease-in;

    &:active{
        /* color: black; */
        background: #f54438;
    }
`