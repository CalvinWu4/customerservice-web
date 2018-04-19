/**
*
* RegistrationForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import isEmail from 'validator/lib/isEmail';

import style from './style';
import kennUWareWatch from './images/KennUWareWatch.png';

class RegistrationForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      firstName: {
        value: '',
        isInvalid: false,
        helperText: '',
      },
      lastName: {
        value: '',
        isInvalid: false,
        helperText: '',
      },
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
      repeatPassword: {
        value: '',
        isInvalid: false,
        helperText: '',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onRegister = this.onRegister.bind(this);

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: { ...this.state[e.target.name], value: e.target.value },
    });
  }

  onRegister() {
    const isEmailValid = this.validateEmail();
    const isPasswordValid = this.validatePassword();
    const isFirstNameValid = this.validateFirstName();
    const isLastNameValid = this.validateLastName();

    if (!isEmailValid || !isPasswordValid || !isFirstNameValid || !isLastNameValid) return;

    this.props.onRegister({
      username: this.state.email.value,
      password: this.state.password.value,
      type: 'customer',
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
      helperText = 'Password must be at least 6 characters long';

      this.setState({
        password: { ...this.state.password, isInvalid, helperText },
      });
      return !isInvalid;
    }

    if (this.state.password.value !== this.state.repeatPassword.value) {
      isInvalid = true;
      helperText = 'Passwords do not match';
    }

    this.setState({
      password: { ...this.state.password, isInvalid, helperText },
      repeatPassword: { ...this.state.password, isInvalid, helperText },
    });

    return !isInvalid;
  }

  validateFirstName() {
    let isInvalid = false;
    let helperText = '';

    if (this.state.firstName.value.length <= 0) {
      isInvalid = true;
      helperText = 'First name cannot be empty';
    }

    this.setState({
      firstName: { ...this.state.firstName, isInvalid, helperText },
    });

    return !isInvalid;
  }

  validateLastName() {
    let isInvalid = false;
    let helperText = '';

    if (this.state.lastName.value.length <= 0) {
      isInvalid = true;
      helperText = 'Last name cannot be empty';
    }

    this.setState({
      lastName: { ...this.state.lastName, isInvalid, helperText },
    });

    return !isInvalid;
  }

  render() {
    return (
      <Paper style={style.paper}>
        <Typography variant="headline" component="h3">Create your KennUWare account</Typography>
        <Typography component="p">to receive customer service</Typography>
        <Grid style={style.grid} container>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={6}>
                <TextField style={style.textField} label="First name" name="firstName" helperText={this.state.firstName.helperText} error={this.state.firstName.isInvalid} onChange={this.onChange} autoFocus />
              </Grid>
              <Grid item xs={6}>
                <TextField style={style.textField} label="Last name" name="lastName" helperText={this.state.lastName.helperText} error={this.state.lastName.isInvalid} onChange={this.onChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField style={style.textField} label="Email" name="email" helperText={this.state.email.helperText} error={this.state.email.isInvalid} onChange={this.onChange} />
              </Grid>
              <Grid item xs={6}>
                <TextField style={style.textField} label="Password" name="password" type="password" helperText={this.state.password.helperText} error={this.state.password.isInvalid} onChange={this.onChange} />
              </Grid>
              <Grid item xs={6}>
                <TextField style={style.textField} label="Repeat password" name="repeatPassword" type="password" helperText={this.state.repeatPassword.helperText} error={this.state.repeatPassword.isInvalid} onChange={this.onChange} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">Use 6 or more character with a mix of letters, numbers & symbols</Typography>
              </Grid>
              <Grid item xs={6} style={style.grid}>
                <Typography variant="body1" style={style.signInLink} color="primary">Sign in instead</Typography>
              </Grid>
              <Grid item xs={6} style={style.grid}>
                <Button variant="raised" color="primary" style={{ float: 'right' }} onClick={this.onRegister}>Next</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
              <img src={kennUWareWatch} alt="Kenn Model X Watch" style={{ width: '150px' }} />
              <Typography variant="caption" style={{ paddingTop: '10px' }}>Kenn Model X</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

RegistrationForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegistrationForm;
