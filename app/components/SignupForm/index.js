/**
*
* SignupForm
*
*/

import React from 'react';

import { Step, Icon, Segment, Button, Form, Input, Header, Popup } from 'semantic-ui-react';
import { isEmail } from 'validator';

// eslint-disable-next-line
const stateList = [{"key":"AL","text":"Alabama","value":"AL"},{"key":"AK","text":"Alaska","value":"AK"},{"key":"AS","text":"American Samoa","value":"AS"},{"key":"AZ","text":"Arizona","value":"AZ"},{"key":"AR","text":"Arkansas","value":"AR"},{"key":"CA","text":"California","value":"CA"},{"key":"CO","text":"Colorado","value":"CO"},{"key":"CT","text":"Connecticut","value":"CT"},{"key":"DE","text":"Delaware","value":"DE"},{"key":"DC","text":"District Of Columbia","value":"DC"},{"key":"FM","text":"Federated States Of Micronesia","value":"FM"},{"key":"FL","text":"Florida","value":"FL"},{"key":"GA","text":"Georgia","value":"GA"},{"key":"GU","text":"Guam","value":"GU"},{"key":"HI","text":"Hawaii","value":"HI"},{"key":"ID","text":"Idaho","value":"ID"},{"key":"IL","text":"Illinois","value":"IL"},{"key":"IN","text":"Indiana","value":"IN"},{"key":"IA","text":"Iowa","value":"IA"},{"key":"KS","text":"Kansas","value":"KS"},{"key":"KY","text":"Kentucky","value":"KY"},{"key":"LA","text":"Louisiana","value":"LA"},{"key":"ME","text":"Maine","value":"ME"},{"key":"MH","text":"Marshall Islands","value":"MH"},{"key":"MD","text":"Maryland","value":"MD"},{"key":"MA","text":"Massachusetts","value":"MA"},{"key":"MI","text":"Michigan","value":"MI"},{"key":"MN","text":"Minnesota","value":"MN"},{"key":"MS","text":"Mississippi","value":"MS"},{"key":"MO","text":"Missouri","value":"MO"},{"key":"MT","text":"Montana","value":"MT"},{"key":"NE","text":"Nebraska","value":"NE"},{"key":"NV","text":"Nevada","value":"NV"},{"key":"NH","text":"New Hampshire","value":"NH"},{"key":"NJ","text":"New Jersey","value":"NJ"},{"key":"NM","text":"New Mexico","value":"NM"},{"key":"NY","text":"New York","value":"NY"},{"key":"NC","text":"North Carolina","value":"NC"},{"key":"ND","text":"North Dakota","value":"ND"},{"key":"MP","text":"Northern Mariana Islands","value":"MP"},{"key":"OH","text":"Ohio","value":"OH"},{"key":"OK","text":"Oklahoma","value":"OK"},{"key":"OR","text":"Oregon","value":"OR"},{"key":"PW","text":"Palau","value":"PW"},{"key":"PA","text":"Pennsylvania","value":"PA"},{"key":"PR","text":"Puerto Rico","value":"PR"},{"key":"RI","text":"Rhode Island","value":"RI"},{"key":"SC","text":"South Carolina","value":"SC"},{"key":"SD","text":"South Dakota","value":"SD"},{"key":"TN","text":"Tennessee","value":"TN"},{"key":"TX","text":"Texas","value":"TX"},{"key":"UT","text":"Utah","value":"UT"},{"key":"VT","text":"Vermont","value":"VT"},{"key":"VI","text":"Virgin Islands","value":"VI"},{"key":"VA","text":"Virginia","value":"VA"},{"key":"WA","text":"Washington","value":"WA"},{"key":"WV","text":"West Virginia","value":"WV"},{"key":"WI","text":"Wisconsin","value":"WI"},{"key":"WY","text":"Wyoming","value":"WY"}];

class SignupForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 'account',
      accountInfo: {
        firstName: { value: '', hasError: false },
        lastName: { value: '', hasError: false },
        email: { value: '', hasError: false },
        password: { value: '', hasError: false },
        repeatPassword: { value: '', hasError: false },
      },
    };

    this.accountInfoFormVerification = this.accountInfoFormVerification.bind(this);

    this.handleAccountInfoForm = this.handleAccountInfoForm.bind(this);

    this.accountInfoForm = this.accountInfoForm.bind(this);
    this.addressForm = this.addressForm.bind(this);
    this.renderStepForm = this.renderStepForm.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  accountInfoFormVerification() {
    const { firstName, lastName, email, password, repeatPassword } = this.state.accountInfo;

    const isFirstNameValid = firstName.value.length > 0;
    const isLastNameValid = lastName.value.length > 0;
    const isEmailValid = isEmail(email.value);
    const isPasswordValid = (password.value.length > 6) && password.value === repeatPassword.value;
    const isValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;

    const pastState = Object.assign({}, this.state);
    pastState.accountInfo.firstName.hasError = !isFirstNameValid;
    pastState.accountInfo.lastName.hasError = !isLastNameValid;
    pastState.accountInfo.email.hasError = !isEmailValid;
    pastState.accountInfo.password.hasError = !isPasswordValid;
    pastState.accountInfo.repeatPassword.hasError = !isPasswordValid;
    this.setState(pastState);

    return isValid;
  }

  handleAccountInfoForm(e, { name, value }) {
    const pastState = Object.assign({}, this.state);
    pastState.accountInfo[name].value = value;
    pastState.accountInfo[name].hasError = false;
    this.setState(pastState);
  }

  accountInfoForm() {
    const { firstName, lastName, email, password, repeatPassword } = this.state.accountInfo;
    return (
      <Form style={{ textAlign: 'left' }}>
        <Form.Group widths='equal'>
          <Form.Input control={Input} label='First name' name='firstName' onChange={this.handleAccountInfoForm} value={firstName.value} error={firstName.hasError} required />
          <Form.Input control={Input} label='Last name' name='lastName' onChange={this.handleAccountInfoForm} value={lastName.value} error={lastName.hasError} required />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input control={Input} label='Email' name='email' onChange={this.handleAccountInfoForm} value={email.value} error={email.hasError} required />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input control={Input} label='Password' name='password' onChange={this.handleAccountInfoForm} value={password.value} error={password.hasError} required />
          <Form.Input control={Input} label='Repeat password' name='repeatPassword' onChange={this.handleAccountInfoForm} value={repeatPassword.value} error={repeatPassword.hasError} required />
        </Form.Group>
      </Form>
    );
  }

  addressForm() {
    return (
      <Form style={{ textAlign: 'left' }}>
        <Form.Group widths='equal'>
          <Form.Input control={Input} label='Line 1' required />
          <Form.Input control={Input} label='Line 2' required />
        </Form.Group>
        <Form.Group>
          <Form.Input control={Input} width={10} label='City' required />
          <Form.Select fluid width={6} label='State' placeholder='State' search options={stateList} required />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input control={Input} label='Zipcode' required />
          <Popup
            trigger={<Form.Input control={Input} label='Country' value='United States of America' />}
            header='Country selection'
            content='We are only available in the USA'
            on='focus'
          />
        </Form.Group>
      </Form>
    );
  }

  goNext() {
    switch (this.state.currentStep) {
      case 'account':
        if (!this.accountInfoFormVerification()) return;
        this.setState({ currentStep: 'address' });
        break;
      case 'address':
        break;
      default:
        break;
    }
  }

  goBack() {
    switch (this.state.currentStep) {
      case 'address':
        this.setState({ currentStep: 'account' });
        break;
      case 'verification':
        this.setState({ currentStep: 'address' });
        break;
      default:
        break;
    }
  }

  renderStepForm() {
    if (this.state.currentStep === 'address') return this.addressForm();

    return this.accountInfoForm();
  }

  render() {
    return (
      <div style={{ marginTop: '10%' }}>
        <Header as='h1'>Create account</Header>
        <Step.Group attached='top' stackable='tablet'>
          <Step active={this.state.currentStep === 'account'}>
            <Icon name='user' />
            <Step.Content>
              <Step.Title>Account</Step.Title>
              <Step.Description>Your account info</Step.Description>
            </Step.Content>
          </Step>
          <Step active={this.state.currentStep === 'address'}>
            <Icon name='location arrow' />
            <Step.Content>
              <Step.Title>Location</Step.Title>
              <Step.Description>Your home address</Step.Description>
            </Step.Content>
          </Step>
          <Step active={this.state.currentStep === 'verification'}>
            <Icon name='info circle' />
            <Step.Content>
              <Step.Title>Confirm account</Step.Title>
              <Step.Description>Verify account details</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
        <Segment attached>
          { this.renderStepForm() }
        </Segment>
        { this.state.currentStep !== 'verification' ? (<Button style={{ float: 'right', marginTop: '5px', marginRight: '0px' }} onClick={this.goNext} color='blue'>Next</Button>) : null }

        { this.state.currentStep !== 'account' ? (<Button style={{ float: 'right', marginTop: '5px', marginRight: '5px' }} onClick={this.goBack}>Back</Button>) : null }
      </div>
    );
  }
}

SignupForm.propTypes = {

};

export default SignupForm;
