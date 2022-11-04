import React, { useState } from "react";
import styled from "styled-components";
import ErrorIcon from "../images/icon-error.svg";

const FormContainer = styled.form`
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
  @media only screen and (max-width: 850px) {
    padding: 1.5rem;
  }
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
  @media only screen and (max-width: 850px) {
    margin-top: 4rem;
    margin-bottom: 1.5rem;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  &::before {
    height: 100%;
    display: flex;
    align-items: center;
    right: 1.5rem;
    position: absolute;
    content: url(${(props) => props.error && ErrorIcon});
    z-index: 1;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 3.4rem;
  padding-left: 2rem;
  border: ${(props) =>
    props.error ? "2px solid hsl(0, 100%, 74%)" : "1px solid #ccc"};
  border-radius: 0.3rem;
  font-weight: 700;
  &:focus {
    border: ${(props) =>
      props.error
        ? "2px solid hsl(0, 100%, 74%)"
        : "1px solid hsl(248, 32%, 49%)"};
    outline: none;
  }
`;

const Error = styled.p`
  align-self: flex-end;
  color: red;
  text-align: end;
  font-style: italic;
  font-size: 0.7rem;
  margin-bottom: 1.3rem;
  @media only screen and (max-width: 850px) {
    margin-bottom: 1rem;
  }
`;

const Submit = styled.input`
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

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    emailNotValid: false,
    password: false,
  });

  const handleChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });

    //reset error if user types to input
    setFormErrors({ ...formErrors, [e.target.name]: false, emailNotValid: false});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //If test was't completed return
    if (!handleCheckForm()) return;
    console.log("Form submitted")
  };

  const handleCheckMail = (email) => {
    // eslint-disable-next-line no-useless-escape
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleCheckForm = () => {
    let isFormValid = true;
    let tempFormErrors = {...formErrors};

    //If any input is empty, set value of its key to true, and mark form as not valid 
    for (const [key, value] of Object.entries(formInputs)) {
      if (value === "") {
        tempFormErrors[key] = true;
        isFormValid = false;
      }
    }

    //If email input is not empty and didn't pass the test set value of its key to true
    if (!(formInputs.email === "") && !handleCheckMail(formInputs.email)) {
      tempFormErrors.emailNotValid = true;
      isFormValid = false;
    }

    //Set error state
    setFormErrors(tempFormErrors);
    return isFormValid;
  };

  return (
    <>
      <Header>
        <b>Try it free 7 days</b> then $20/mo. thereafter
      </Header>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer error={formErrors.firstName ? true : false}>
          <Input
            error={formErrors.firstName ? true : false}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formInputs.firstName}
            onChange={handleChange}
          />
        </InputContainer>
        <Error>{formErrors.firstName && "First name cannot be empty"}</Error>
        <InputContainer error={formErrors.lastName ? true : false}>
          <Input
            error={formErrors.lastName ? true : false}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formInputs.lastName}
            onChange={handleChange}
          />
        </InputContainer>
        <Error>{formErrors.lastName && "Last name cannot be empty"}</Error>
        <InputContainer
          error={formErrors.email || formErrors.emailNotValid ? true : false}
        >
          <Input
            error={formErrors.email || formErrors.emailNotValid ? true : false}
            type="text"
            name="email"
            placeholder="Email Address"
            value={formInputs.email}
            onChange={handleChange}
          />
        </InputContainer>
        <Error>
          {formErrors.email
            ? "Email cannot be empty"
            : formErrors.emailNotValid
            ? "Looks like this is not an email"
            : ""}
        </Error>
        <InputContainer error={formErrors.password ? true : false}>
          <Input
            error={formErrors.password ? true : false}
            type="password"
            name="password"
            placeholder="Password"
            autocomplete="new-password"
            value={formInputs.password}
            onChange={handleChange}
          />
        </InputContainer>
        <Error>{formErrors.password && "Password cannot be empty"}</Error>
        <Submit type="submit" value="CLAIM YOUR FREE TRIAL" />

        <Paragraph>
          {"By clicking the button, you are agreeing to our "}
          <TermsLink href="a">Terms and Services</TermsLink>
        </Paragraph>
      </FormContainer>
    </>
  );
}

export default Form;
