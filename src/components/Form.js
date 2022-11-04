import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../images/icon-error.svg";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  padding: 2.2rem;
  background-color: white;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  padding: 1rem 0;
  font-weight: 400;
  color: white;
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
  background-color: hsl(248, 32%, 49%);
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  height: 3.4rem;
  padding-left: 2rem;
  margin-bottom: 1.3rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  font-weight: 700;
  &:focus {
    border: 1px solid hsl(248, 32%, 49%);
    outline: none;
  }

  &::before {
    content: "testegsdgdsfjhghbsoignyhfszilgnfszhiogbnfsz";
  }
`;

const Error = styled.p`
  align-self: flex-end;
  color: red;
  text-align: end;
  font-style: italic;
  font-size: 0.7rem;
  margin-top: -1rem;
  margin-bottom: 1rem;
`;

const ErrorEmail = styled(Error)``;

const Submit = styled.button`
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  color: white;
  font-weight: 700;
  background-color: hsl(154, 59%, 51%);
  border: none;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 4px 0px 0px hsl(154, 59%, 45%);
  -moz-box-shadow: 0px 4px 0px 0px hsl(154, 59%, 45%);
  box-shadow: 0px 4px 0px 0px hsl(154, 59%, 45%);

  &:hover {
    background-color: hsl(154, 59%, 61%);
    -webkit-box-shadow: 0px 4px 0px 0px hsl(154, 59%, 55%);
    -moz-box-shadow: 0px 4px 0px 0px hsl(154, 59%, 55%);
    box-shadow: 0px 4px 0px 0px hsl(154, 59%, 55%);
  }
`;

const Paragraph = styled.p`
  font-size: 0.7rem;
  color: #bbb;
  margin-bottom: 1rem;
`;

const TermsLink = styled.a`
  color: hsl(0, 100%, 74%);
  font-weight: 700;
  text-decoration: none;
`;

function Form() {
  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <>
      <Header>
        <b>Try it free 7 days</b> then $20/mo. thereafter
      </Header>
      <FormContainer>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formInputs.firstName}
          onChange={(e) =>
            setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
          }
        />
        <Error>First name cannot be empty</Error>
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formInputs.lastName}
          onChange={(e) =>
            setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
          }
        />
        <Error>Last name cannot be empty</Error>
        <Input
          type="text"
          name="email"
          placeholder="Email Address"
          value={formInputs.email}
          onChange={(e) =>
            setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
          }
        />
        <Error>Email cannot be empty</Error>
        <ErrorEmail>Looks like this is not an email</ErrorEmail>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          autocomplete="new-password"
          value={formInputs.password}
          onChange={(e) =>
            setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
          }
        />
        <Error>Password cannot be empty</Error>
        <Submit type="submit">CLAIM YOUR FREE TRIAL</Submit>

        <Paragraph>
          {"By clicking the button, you are agreeing to our "}
          <TermsLink href="a">Terms and Services</TermsLink>
        </Paragraph>
      </FormContainer>
    </>
  );
}

export default Form;
