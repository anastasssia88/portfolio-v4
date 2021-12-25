import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onError = (errors, e) => console.log(errors, e);
  const onSubmit = (data, e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then((response) => {
        reset();
        setSent(true);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FormContainer id="contact">
      <h2>Let's talk</h2>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        method="POST"
        action={() => setSent(true)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name*</label>
          <input id="name" {...register("name", { required: true })} />
          {errors.name && <Error>It shouldn't be empty</Error>}
        </div>

        <div>
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            {...register("email", {
              required: "It shouldn't be empty",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                message: "Oops! Incorrect email",
              },
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" {...register("message")} />
        </div>
        <StyledSubmit type="submit">Submit</StyledSubmit>
      </form>
      {sent && <p>Thanks! 🙌🏼 Talk to you soon</p>}
    </FormContainer>
  );
};

const FormContainer = styled(Container)`
  padding: 3rem 0;
  width: 100%;
  @media (max-width: 768px) {
    padding: 3rem 0 0 0;
  }

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

    div:nth-child(2) {
      grid-column: 1 / 3;
      grid-row: 1;
      @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 1;
      }
    }
    div:nth-child(3) {
      grid-column: 3 / 5;
      grid-row: 1;
      @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 2;
      }
    }
    div:nth-child(4) {
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
    min-height: 48px;
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

Form.propTypes = {
  sent: PropTypes.bool,
};

export default Form;
