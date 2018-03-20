/**
*
* LoginForm
*
*/

import React from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import style from './style';

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <Paper style={style.paper} elevation={4}>
        <Typography variant="headline" component="h3">Sign in</Typography>
        <Typography component="p">With your agent account</Typography>
        <TextField style={style.emailTextField} label="Email" type="email" />
        <TextField style={style.passwordTextField} label="Password" type="password" />
        <Typography style={style.forgotEmailLabel} component="p">Forgot email?</Typography>
        <Button style={style.button} variant="raised" color="primary">Next</Button>
      </Paper>
    );
  }
}

LoginForm.propTypes = {

};

export default LoginForm;
