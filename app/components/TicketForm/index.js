/**
*
* TicketForm
*
*/

import React from 'react';

import Card from 'material-ui/Card';
import { Typography } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { TextField } from 'material-ui/TextField';
import Button from 'material-ui/Button';

class TicketForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Card>
          <Grid container >
            <Grid item><Typography variant="body1">Customer Information</Typography></Grid>
            <Grid item><Typography variant="title">Customer Support Agent</Typography></Grid>
            <Grid item><Typography variant="body1">Customer Support Agent</Typography></Grid>
            <Grid item><Typography variant="title">Device Information</Typography></Grid>
            <Grid item><Typography variant="body1">Device Information</Typography></Grid>
            <Grid item><Typography variant="title">Issue Details:</Typography></Grid>
            <Grid item><Typography variant="body1">These are the issues with the device, this should show as a long text field looking area</Typography></Grid>
            <Grid item><Typography variant="title">Date Opened</Typography></Grid>
            <Grid item><TextField type="date" disabled></TextField></Grid>
            <Grid item><Typography variant="title">Date Closed</Typography></Grid>
            <Grid item><TextField type="date" disabled></TextField></Grid>
            <Grid item><Typography variant="title">Priority</Typography></Grid>
            <Grid item><Typography variant="body1">High/Medium/Low</Typography></Grid>
            <Grid item><Button>Edit</Button></Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

TicketForm.propTypes = {

};

export default TicketForm;
