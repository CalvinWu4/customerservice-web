/**
*
* LoginForm
*
*/

import React from 'react';

import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <Grid container alignItems="center" direction="column" justify="center" spacing={16}>
          <Grid item xs={12}>
            <TextField id="email" label="Email" type="email" name="email" onChange={this.handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField id="password" label="Password" type="password" name="password" onChange={this.handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <Button variant="raised" color="secondary" type="submit">Login</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

LoginForm.propTypes = {

};

export default LoginForm;
