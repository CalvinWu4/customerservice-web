/**
*
* SignupForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Step, Icon, Segment, Button, Form, Input, Header, Popup, Grid, List } from 'semantic-ui-react';
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
      address: {
        line1: { value: '', hasError: false },
        line2: { value: '', hasError: false },
        city: { value: '', hasError: false },
        state: { value: '', hasError: false },
        zipcode: { value: '', hasError: false },
        country: { value: 'USA', hasError: false },
      },
    };

    this.accountInfoFormVerification = this.accountInfoFormVerification.bind(this);
    this.addressFormVerification = this.addressFormVerification.bind(this);

    this.handleAccountInfoForm = this.handleAccountInfoForm.bind(this);
    this.handeAddressForm = this.handeAddressForm.bind(this);
    this.verificationForm = this.verificationForm.bind(this);

    this.accountInfoForm = this.accountInfoForm.bind(this);
    this.addressForm = this.addressForm.bind(this);
    this.renderStepForm = this.renderStepForm.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
    this.onSignup = this.onSignup.bind(this);
  }

  onSignup() {
    const { accountInfo, address } = this.state;

    this.props.onSignup({
      firstName: accountInfo.firstName.value,
      lastName: accountInfo.lastName.value,
      email: accountInfo.email.value,
      password: accountInfo.password.value,
      address: {
        line1: address.line1.value,
        line2: address.line2.value,
        city: address.city.value,
        state: address.state.value,
        zipcode: address.zipcode.value,
        country: address.country.value,
      },
    });
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

  addressFormVerification() {
    const { line1, city, state, zipcode } = this.state.address;

    const isLine1Valid = line1.value.length > 0;
    const isCityValid = city.value.length > 0;
    const isStateValid = state.value.length > 0;
    const isZipcodeValid = zipcode.value.length >= 5;
    const isValid = isLine1Valid && isCityValid && isStateValid && isZipcodeValid;

    const pastState = Object.assign({}, this.state);
    pastState.address.line1.hasError = !isLine1Valid;
    pastState.address.city.hasError = !isCityValid;
    pastState.address.state.hasError = !isStateValid;
    pastState.address.zipcode.hasError = !isZipcodeValid;
    this.setState(pastState);

    return isValid;
  }

  handleAccountInfoForm(e, { name, value }) {
    const pastState = Object.assign({}, this.state);
    pastState.accountInfo[name].value = value;
    pastState.accountInfo[name].hasError = false;
    this.setState(pastState);
  }

  handeAddressForm(e, { name, value }) {
    const pastState = Object.assign({}, this.state);
    pastState.address[name].value = value;
    pastState.address[name].hasError = false;
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
          <Form.Input control={Input} label='Password' type='password' name='password' onChange={this.handleAccountInfoForm} value={password.value} error={password.hasError} required />
          <Form.Input control={Input} label='Repeat password' type='password' name='repeatPassword' onChange={this.handleAccountInfoForm} value={repeatPassword.value} error={repeatPassword.hasError} required />
        </Form.Group>
      </Form>
    );
  }

  addressForm() {
    const { line1, line2, city, state, zipcode } = this.state.address;
    return (
      <Form style={{ textAlign: 'left' }}>
        <Form.Group widths='equal'>
          <Form.Input control={Input} label='Line 1' name='line1' onChange={this.handeAddressForm} value={line1.value} error={line1.hasError} required />
          <Form.Input control={Input} label='Line 2' name='line2' onChange={this.handeAddressForm} value={line2.value} error={line2.hasError} />
        </Form.Group>
        <Form.Group>
          <Form.Input control={Input} width={10} label='City' name='city' onChange={this.handeAddressForm} value={city.value} error={city.hasError} required />
          <Form.Select fluid width={6} label='State' placeholder='State' search options={stateList} name='state' onChange={this.handeAddressForm} value={state.value} error={state.hasError} required />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input control={Input} label='Zipcode' name='zipcode' onChange={this.handeAddressForm} value={zipcode.value} error={zipcode.hasError} required />
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

  verificationForm() {
    const { accountInfo, address } = this.state;
    return (
      <Grid style={{ width: '100%' }}>
        <Grid.Row>
          <Grid.Column textAlign='left'>
            <Header as='h3'>Please verify the following details:</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center' width={8}>
            <div style={{ textAlign: 'left', marginLeft: '20%' }}>
              <Header as='h4'>Account info</Header>
              <List style={{ marginLeft: '10px' }}>
                <List.Item>
                  <strong>First name: </strong> {accountInfo.firstName.value}
                </List.Item>
                <List.Item>
                  <strong>Last name: </strong> {accountInfo.lastName.value}
                </List.Item>
                <List.Item>
                  <strong>Email: </strong> {accountInfo.email.value}
                </List.Item>
              </List>
            </div>
          </Grid.Column>
          <Grid.Column textAlign='center' width={8}>
            <div style={{ textAlign: 'left', marginLeft: '20%' }}>
              <Header as='h4'>Address</Header>
              <List style={{ marginLeft: '10px' }}>
                <List.Item>
                  <strong>Line1: </strong> {address.line1.value}
                </List.Item>
                <List.Item>
                  <strong>Line2: </strong> {address.line2.value}
                </List.Item>
                <List.Item>
                  <strong>City: </strong> {address.city.value}
                </List.Item>
                <List.Item>
                  <strong>State: </strong> {address.state.value}
                </List.Item>
                <List.Item>
                  <strong>Zipcode: </strong> {address.zipcode.value}
                </List.Item>
                <List.Item>
                  <strong>Country: </strong> {address.country.value}
                </List.Item>
              </List>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  goNext() {
    switch (this.state.currentStep) {
      case 'account':
        if (!this.accountInfoFormVerification()) return;
        this.setState({ currentStep: 'address' });
        break;
      case 'address':
        if (!this.addressFormVerification()) return;
        this.setState({ currentStep: 'verification' });
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
    switch (this.state.currentStep) {
      case 'account':
        return this.accountInfoForm();
      case 'address':
        return this.addressForm();
      case 'verification':
        return this.verificationForm();
      default:
        return null;
    }
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
        { this.state.currentStep === 'verification' ? (<Button style={{ float: 'right', marginTop: '5px', marginRight: '0px' }} color='orange' onClick={this.onSignup}>Signup</Button>) : null }
        { this.state.currentStep !== 'verification' ? (<Button style={{ float: 'right', marginTop: '5px', marginRight: '0px' }} onClick={this.goNext} color='blue'>Next</Button>) : null }
        { this.state.currentStep !== 'account' ? (<Button style={{ float: 'right', marginTop: '5px', marginRight: '5px' }} onClick={this.goBack}>Back</Button>) : null }
      </div>
    );
  }
}

SignupForm.propTypes = {
  onSignup: PropTypes.func.isRequired,
};

export default SignupForm;
