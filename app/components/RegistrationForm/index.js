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

import style from './style';

class RegistrationForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Paper style={style.paper}>
        <Typography variant="headline" component="h3">Create your KennUWare account</Typography>
        <Typography component="p">to receive customer service</Typography>
        <Grid style={style.grid} container>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={6}>
                <TextField style={style.textField} label="First name" name="firstName" autoFocus />
              </Grid>
              <Grid item xs={6}>
                <TextField style={style.textField} label="Last name" name="lastName" />
              </Grid>
              <Grid item xs={12}>
                <TextField style={style.textField} label="Email" name="email" />
              </Grid>
              <Grid item xs={6}>
                <TextField style={style.textField} label="Password" name="password" type="password" />
              </Grid>
              <Grid item xs={6}>
                <TextField style={style.textField} label="Repeat password" name="repeatPassword" type="password" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">Use 6 or more character with a mix of letters, numbers & symbols</Typography>
              </Grid>
              <Grid item xs={6} style={style.grid}>
                <Typography variant="body1" style={style.signInLink} color="primary">Sign in instead</Typography>
              </Grid>
              <Grid item xs={6} style={style.grid}>
                <Button variant="raised" color="primary" style={{ float: 'right' }}>Next</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              Picture here
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
