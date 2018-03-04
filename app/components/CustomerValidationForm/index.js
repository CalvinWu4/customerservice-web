/**
*
* CustomerValidationForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

class CustomerValidationForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      serialNumber: '',
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.props.onValidate();
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <Paper>
        <form onSubmit={this.onSubmitForm}>
          <Grid container alignItems="center" direction="column" justify="center" spacing={16} >
            <Grid item xs={12}>
              <Typography align="center" color="primary" paragraph variant="title">Welcome to the KennUWare Customer Service Portal!</Typography>
              <Typography align="center" color="textSecondary" variant="subheading" >Please enter the serial number of your KennUWare device below.</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField id="serialNumber" label="Serial Number" type="Text" name="serialNumber" onChange={this.handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <Button variant="raised" color="primary" type="submit">Enter</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }
}

CustomerValidationForm.propTypes = {
  onValidate: PropTypes.func.isRequired,
};

export default CustomerValidationForm;
