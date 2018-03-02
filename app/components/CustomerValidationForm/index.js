/**
*
* CustomerValidationForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Textarea from 'material-ui/Input/Textarea';

class CustomerValidationForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      serialNumber: '',
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
            <Textarea rows="3" fullWidth="true" disabled="true" >Please enter the serial number of your KennUWare device.</Textarea>
          </Grid>
          <Grid item xs={12}>
            <TextField id="serialNumber" label="Serial Number" type="Text" name="serialNumber" onChange={this.handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <Button variant="raised" color="secondary" type="submit">Enter</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

CustomerValidationForm.propTypes = {

};

export default CustomerValidationForm;
