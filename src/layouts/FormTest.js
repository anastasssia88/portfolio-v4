import React, { useState } from "react";
import styled from "styled-components";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms";
import { useForm } from "react-hook-form";
// components
import { Container } from "./Wrappers";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [sent, setSent] = useState(false);

  const netlify = useNetlifyForm({
    name: "contact-form",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      console.log("Successfully sent form data to Netlify Server");
    },
  });

  const onSubmit = (data) => {
    console.log("Submitting the data ....");
    netlify.handleSubmit(null, data);
    reset();
    setSent(true);
  };

  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  return (
    <FormContainer id="contact">
      <h2>Let's talk</h2>
      <NetlifyFormProvider {...netlify}>
        <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
          <Honeypot />
          {netlify.success && (
            <p sx={{ variant: "alerts.success", p: 3 }}>
              Thanks for contacting us!
            </p>
          )}
          {netlify.error && (
            <p sx={{ variant: "alerts.muted", p: 3 }}>
              Sorry, we could not reach servers. Because it only works on
              Netlify, our GitHub demo does not provide a response.
            </p>
          )}
          <div>
            <label htmlFor="name" sx={{ variant: "forms.label" }}>
              Name*
            </label>
            <input
              name="name"
              id="name"
              {...register("name", {
                required: "Name is required",
              })}
              sx={{
                variant: "forms.input",
              }}
            />
            {errors.name && <Error>It shouldn't be empty</Error>}
          </div>

          <div>
            <label htmlFor="email" sx={{ variant: "forms.label" }}>
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Oops! Invalid email address",
                },
              })}
              sx={{
                variant: "forms.input",
              }}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </div>

          {/* <div>
            <label htmlFor="message" sx={{ variant: 'forms.label' }}>Message</label>
            <textarea id="message" {...register("message")} />
            </div> */}
          <StyledSubmit type="submit" sx={{ variant: "buttons.success" }}>
            Submit
          </StyledSubmit>
        </NetlifyFormComponent>
      </NetlifyFormProvider>
      {sent && <p>Thanks! 🙌🏼 Talk to you soon</p>}
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled(Container)`
  padding: 3rem 0;
  width: 100%;

  /* successful submit message */
  > p {
    text-align: center;
    background: ${(props) => props.theme.accentGray};
    padding: 1rem;
    border-radius: 20px;
    width: auto;
    @media (max-width: 768px) {
      padding: 1.5rem 1rem;
    }
  }

  > form {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem 2rem;
    grid-auto-rows: minmax(auto, auto);

    div:first-child {
      grid-column: 1 / 3;
      grid-row: 1;
      @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 1;
      }
    }
    div:nth-child(2) {
      grid-column: 3 / 5;
      grid-row: 1;
      @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 2;
      }
    }
    div:nth-child(3) {
      grid-column: 1 / 4;
      grid-row: 2;
      @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 3;
      }
    }
    div:last-child {
      grid-column: 4 / 5;
      grid-row: 2;
      @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 4;
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, auto);
      gap: 0.5rem 1rem;
      grid-auto-rows: minmax(auto, auto);
    }
  }

  > form div {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    border-radius: 10px;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.textSec};
    background: ${(props) => props.theme.bgMain};
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-bottom: 2px solid ${(props) => props.theme.accentSec};
    }
  }

  textarea {
    height: auto;
    resize: none;
  }

  input[type="submit"] {
    margin-top: 1rem;
    background: ${(props) => props.theme.accentLav};
    border: 2px solid ${(props) => props.theme.accentLav};
  }

  label {
    padding-left: 1rem;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 4px;
    color: ${(props) => props.theme.textSec};
  }
`;

const StyledSubmit = styled.button`
  align-self: end;
  padding: 0.8rem 1rem;
  margin: 1rem 0;
  width: 100%;
  max-height: 45%;
  background: ${(props) => props.theme.accentSec};
  border: none;
  border-radius: 20px;
  -webkit-box-shadow: 0px 1px 14px 4px rgba(194, 194, 194, 0.11);
  box-shadow: 0px 1px 14px 4px rgba(194, 194, 194, 0.11);

  font-size: 14px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    transform: scale(106%, 106%);
  }

  &:active {
    background: #f54438;
  }
`;

const Error = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.accentSec};
  margin-left: 1rem;
`;
