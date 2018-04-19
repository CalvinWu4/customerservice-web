/**
*
* NewTicketForm
*
*/

import React from 'react';

import PropTypes from 'prop-types';

// import styled from 'styled-components';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';


class NewTicketForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      serialNo: '',
      priority: '',
      status: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onCreateTicket = this.onCreateTicket.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onCreateTicket() {
    this.props.onCreateTicket({
      title: this.state.title,
      description: this.state.description,
      serialNo: this.state.serialNo,
      status: this.state.status,
      deviceId: this.state.deviceId,
    });
  }
  render() {
    return (
      <div>
        <Card>
          <Grid container >
            <Grid item xs={12} container justify="center" >
              <TextField label="Ticket Title" name="title" onChange={this.onChange}></TextField>
            </Grid>
            <Grid item xs={4} container justify="center">
              <TextField label="Details" name="description" onChange={this.onChange}></TextField>
            </Grid>
            <Grid item xs={4} container justify="center">
              <TextField label="Serial No:" name="serialNo" onChange={this.onChange} type="number"></TextField>
            </Grid>
            <Grid item xs={4} container justify="center">
              <TextField label="Priority" name="priority" onChange={this.onChange}></TextField>
            </Grid>
            <Grid item xs={12} ><Grid container justify="center"><Button variant="raised" color="primary" onClick={this.onCreateTicket} >Submit</Button></Grid></Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

NewTicketForm.propTypes = {
  onCreateTicket: PropTypes.func.isRequired,
};

export default NewTicketForm;
