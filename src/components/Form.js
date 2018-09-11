import React from 'react';
import styled from 'styled-components';

const ApplicationForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: ${props => props.theme.black};
    margin: 20px 0 15px;
  }

  input {
    border: ${props => props.theme.inputBorderStyle};
    border-color: ${props => props.theme.black};
    height: ${props => props.theme.inputHeight};
    padding: ${props => props.theme.inputPadding};
  }
`;

const Submit = styled.button`
  margin-top: 30px;
  padding: ${props => props.theme.ctaPadding};
  background: ${props => props.theme.secondaryAccent};
  border: none;
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.secondaryFont};
  font-weight: ${props => props.theme.bold};
  font-size: ${props => props.theme.ctaFontSize};
  text-transform: ${props => props.theme.ctaCasing};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${props => props.theme.black};
  }
`;

const Form = () => {
  return (
    <ApplicationForm>
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" required />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" required />

      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" id="email" required />

      <label htmlFor="phone">Phone Number (Please include Country code)</label>
      <input type="tel" name="phone" id="phone" required />

      <label htmlFor="country">
        Where are you applying from? (City, Country)
      </label>
      <input type="text" name="country" id="country" required />

      <label htmlFor="retreat">Select an upcoming retreat</label>
      <select name="retreat" id="retreat" required>
        <option>...</option>
      </select>

      <label htmlFor="textarea">
        What would you like to accomplish during your Saraswati Experience?
      </label>
      <textarea name="textarea" id="textarea" />

      <Submit type="submit">Submit</Submit>
    </ApplicationForm>
  );
};

export default Form;
