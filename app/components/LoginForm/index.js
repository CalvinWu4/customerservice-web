/**
*
* LoginForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { isEmail } from 'validator';

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';


class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: '',
        hasError: false,
      },
      password: {
        value: '',
        hasError: false,
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  onChange(e, { name, value }) {
    this.setState({
      [name]: { value, hasError: false },
    });
  }

  onSubmitForm() {
    const isFormValid = this.validateForm();
    if (!isFormValid) return;

    this.props.onLogin({
      email: this.state.email.value,
      password: this.state.password.value,
    });
  }

  validateForm() {
    const isEmailValid = isEmail(this.state.email.value);
    const isPasswordValid = this.state.password.value.length > 6;

    this.setState({
      email: { ...this.state.email, hasError: !isEmailValid },
      password: { ...this.state.password, hasError: !isPasswordValid },
    });

    return isEmailValid && isPasswordValid;
  }


  render() {
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ marginTop: '15%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' color='black' style={{ fontSize: '2.5em' }} textAlign='center'>
              Login to your account
            </Header>
            <Form size='large' onSubmit={this.onSubmitForm}>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name='email' value={this.state.email.value} onChange={this.onChange} error={this.state.email.hasError} />
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password' value={this.state.password.value} onChange={this.onChange} error={this.state.password.hasError} />
                <Button color='orange' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New customer? <a role='presentation' onClick={this.props.goLogin} style={{ cursor: 'pointer' }}>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  goLogin: PropTypes.func.isRequired,
};

export default LoginForm;
