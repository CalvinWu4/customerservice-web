/**
*
* LoginForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import isEmail from 'validator/lib/isEmail';

import style from './style';

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: '',
        isInvalid: false,
        helperText: '',
      },
      password: {
        value: '',
        isInvalid: false,
        helperText: '',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);

    this.shouldRenderButton = this.shouldRenderButton.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: { ...this.state[e.target.name], value: e.target.value },
    });
  }

  onLogin() {
    const isEmailValid = this.validateEmail();
    const isPasswordValid = this.validatePassword();

    if (!isEmailValid || !isPasswordValid) return;

    this.props.onLogin({
      username: this.state.email.value,
      password: this.state.password.value,
    });
  }

  validateEmail() {
    let isInvalid = false;
    let helperText = '';

    if (!isEmail(this.state.email.value)) {
      isInvalid = true;
      helperText = 'That\'s not a real email';
    }

    this.setState({
      email: { ...this.state.email, isInvalid, helperText },
    });

    return !isInvalid;
  }

  validatePassword() {
    let isInvalid = false;
    let helperText = '';

    if (this.state.password.value.length < 6) {
      isInvalid = true;
      helperText = 'Password must be at least 6 characters';
    }

    this.setState({
      password: { ...this.state.password, isInvalid, helperText },
    });

    return !isInvalid;
  }

  shouldRenderButton() {
    if (this.props.name === 'clients') {
      return (<Button color="primary" onClick={() => this.props.redirectToCreateAccount()}>{"I don't have an account"}</Button>);
    }
    return null;
  }

  render() {
    return (
      <Paper style={style.paper} elevation={4}>
        <Typography variant="headline" component="h3">Sign in</Typography>
        <Typography component="p">With your {this.props.name} account</Typography>
        { this.shouldRenderButton() }
        <TextField style={style.emailTextField} label="Email" type="email" name="email" helperText={this.state.email.helperText} error={this.state.email.isInvalid} onChange={this.onChange} autoFocus />
        <TextField style={style.passwordTextField} label="Password" type="password" name="password" helperText={this.state.password.helperText} error={this.state.password.isInvalid} onChange={this.onChange} />
        <Typography style={style.forgotEmailLabel} component="p">Forgot email?</Typography>
        <Button style={style.button} variant="raised" color="primary" onClick={this.onLogin}>Next</Button>
      </Paper>
    );
  }
}

LoginForm.propTypes = {
  name: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
  redirectToCreateAccount: PropTypes.func.isRequired,
};

export default LoginForm;
