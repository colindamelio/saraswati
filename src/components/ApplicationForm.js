import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: ${props => props.theme.colors.black};
    margin: 20px 0 15px;
  }

  input {
    border: 1px solid ${props => props.theme.colors.black};
    height: 45px;
  }
`;

const Submit = styled.button`
  max-width: 180px;
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-weight: ${props => props.theme.weights.secondaryBold};
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.orange};
  text-transform: uppercase;
  margin-top: 50px;
  padding: 15px;
`;

export default class ApplicationForm extends Component {
  render() {
    return (
      <Form>
        <label for="firstName">First Name</label>
        <input type="text" firstName="firstName" id="firstName" required />

        <label for="lastName">Last Name</label>
        <input type="text" lastName="lastName" id="lastName" required />

        <label for="email">Email Address</label>
        <input type="email" lastName="email" id="email" required />

        <label for="phone">Phone Number (Please include Country code)</label>
        <input type="tel" lastName="phone" id="phone" required />

        <label for="country">
          Where are you applying from? (City, Country)
        </label>
        <input type="text" lastName="country" id="country" required />

        <label for="retreat">Select an upcoming retreat</label>
        <select type="text" lastName="retreat" id="retreat" required>
          <option>...</option>
        </select>

        <label for="textarea">
          What would you like to accomplish during your Saraswati Experience?
        </label>
        <textarea id="textarea" />

        <Submit type="submit">Submit</Submit>
      </Form>
    );
  }
}
