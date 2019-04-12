import React, { Component } from 'react';
import styled from 'styled-components';

const ApplicationForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: ${props => props.theme.black};
    margin: 20px 0 15px;
  }

  input,
  select {
    border: ${props => props.theme.inputBorderStyle};
    border-color: ${props => props.theme.black};
    border-radius: ${props => props.theme.inputBorderRadius};
    height: ${props => props.theme.inputHeight};
    padding: ${props => props.theme.inputPadding};
    background: white;
  }

  textarea {
    border: ${props => props.theme.inputBorderStyle};
    border-color: ${props => props.theme.black};
    padding: ${props => props.theme.textareaPadding};
    border-radius: ${props => props.theme.inputBorderRadius};
    min-height: ${props => props.theme.textareaHeight};
    resize: none;
    line-height: ${props => props.theme.textareaLineHeight};
  }
`;

const Required = styled.span`
  color: ${props => props.theme.secondaryAccent};
  font-weight: ${props => props.theme.bold};
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
  cursor: ${props => (props.disabled ? `arrow` : `pointer`)};
  transition: all 0.3s;
  opacity: ${props => (props.disabled ? `0.2` : `1`)};
`;

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      location: '',
      retreats: ['October 27 – November 6, 2019'],
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePhoneChange = event => {
    this.setState({ phone: event.target.value });
  };

  handleLocationChange = event => {
    this.setState({ location: event.target.value });
  };

  render() {
    const { name, email } = this.state;
    const isEnabled = name.length && email.length > 0;

    return (
      <ApplicationForm
        action="http://www.focuspocus.io/magic/hello@saraswatibali.com"
        method="POST"
      >
        <label htmlFor="name">
          Name <Required>*</Required>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleNameChange}
          autoComplete="off"
        />

        <label htmlFor="email">
          Email Address <Required>*</Required>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          autoComplete="off"
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder={'+ (Country Code) Phone Number'}
          value={this.state.phone}
          autoComplete="off"
          onChange={this.handlePhoneChange}
        />

        <label htmlFor="location">Where are you applying from?</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder={'City, Country'}
          value={this.state.location}
          autoComplete="off"
          onChange={this.handleLocationChange}
        />

        <label htmlFor="selectedRetreat">
          Select an upcoming retreat <Required>*</Required>
        </label>
        <select name="selectedRetreat" id="selectedRetreat">
          {this.state.retreats.map((date, i) => (
            <option key={i}>{date}</option>
          ))}
        </select>

        <label htmlFor="comments">
          What would you like to accomplish during your Saraswati Experience?
        </label>
        <textarea name="comments" id="comment" />

        <Submit type="submit" disabled={!isEnabled}>
          Submit
        </Submit>
      </ApplicationForm>
    );
  }
}

export default Form;
