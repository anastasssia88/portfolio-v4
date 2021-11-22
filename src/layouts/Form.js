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
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name</label>
                    <input id="name" {...register("name", { required: true, maxLength: 20,})} />
                    <label htmlFor="email">Email</label>
                    <input id="email" {...register("email", { required: true, maxLength: 50, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })} />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" {...register("message")} />
                    <input type="submit" />
                </form>
                <img src={Computer} alt="" />
            
            </div> 
        </FormContainer>
    )
}

export default Form


const FormContainer = styled(Container)`

    > div {
        padding: 3rem 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-end;
    }

    > div img {
        width: 40%;
        justify-self: flex-end;
        margin-bottom: 1rem;
    }

    > div form {
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    input, textarea {
        border: none;
        border-bottom: 2px solid ${ props => props.theme.textSec };
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        background: ${ props => props.theme.bgMain };
        /* border: 2px solid white;
        -webkit-box-shadow: 0px 1px 14px 4px rgba(194,194,194,0.11); 
        box-shadow: 0px 1px 14px 4px rgba(194,194,194,0.11); */

        &:focus{
            outline: none;
            border: 2px solid;
            border-color: ${ props => props.theme.accentLav };
        }
    }

    textarea {
        min-height: 5rem;
        resize: none;
    }

    input[type="submit"] {
        margin-top: 1rem;
        background: ${ props => props.theme.accentLav };
        border: 2px solid ${ props => props.theme.accentLav };
    }

    label {
        padding: 0rem 0 0.3rem 1rem;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 4px;
        color: ${ props => props.theme.textSec};
    }

`

// const FormContainer = styled(Container)`

//     > div {
//         padding: 3rem 0;
//         display: flex;
//         width: 100%;
//         justify-content: space-between;
//         align-items: flex-end;
//     }

//     > div > img {
//         width: 40%;
//         justify-self: flex-end;
//         margin-bottom: 1rem;
//     }

//     > div > form {
//         width: 50%;
//         display: flex;
//         flex-direction: column;
//     }

//     input, textarea {
//         border: none;
//         border-radius: 10px;
//         margin-bottom: 1rem;
//         padding: 1rem;
//         border: 2px solid white;
//         -webkit-box-shadow: 0px 1px 14px 4px rgba(194,194,194,0.11); 
//         box-shadow: 0px 1px 14px 4px rgba(194,194,194,0.11);

//         &:focus{
//             outline: none;
//             border: 2px solid;
//             border-color: ${ props => props.theme.accentLav };
//         }
//     }

//     textarea {
//         min-height: 10rem;
//         resize: none;
//     }

//     input[type="submit"] {
//         margin-top: 1rem;
//         background: ${ props => props.theme.accentLav };
//         border: 2px solid ${ props => props.theme.accentLav };
//     }

//     label {
//         padding: 0rem 0 0.3rem 1rem;
//         text-transform: uppercase;
//         font-size: 12px;
//         letter-spacing: 4px;
//         color: ${ props => props.theme.textSec};
//     }

// `