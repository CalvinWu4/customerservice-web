/**
*
* NewTicketForm
*
*/

import React from 'react';
// import styled from 'styled-components';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';


class NewTicketForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.setState = {
      ticket: {
        title: '',
        description: '',
        model: '',
        serial: '',
        priority: '',
        status: 'new',
      },
    };
  }
  onChange(e) {
    this.setState({
      [e.target.name]: { ...this.state[e.target.name], value: e.target.value },
    });
  }
  /*
   * Need to automate the setting of the open date and the setting of a customer support agent
   */
  render() {
    return (
      <div>
        <Card>
          <Grid container >
            <Grid item xs={12} container justify="center" >
              <TextField label="Ticket Title" name="title" value={this.setState.ticket.title}></TextField>
            </Grid>
            <Grid item xs={6} container justify="center">
              <Typography variant="title">Issue Details:</Typography>
              <TextField label="Details" name="description"></TextField>
            </Grid>
            <Grid item xs={6} container justify="center">
              <Typography variant="title">Priority</Typography>
              <TextField label="High/Medium/Low" name="priority"></TextField>
            </Grid>
            <Grid item xs={12} ><Grid container justify="center"><Button variant="raised" color="primary" >Submit</Button></Grid></Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

NewTicketForm.propTypes = {

};

export default NewTicketForm;
