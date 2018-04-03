/**
*
* TicketForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import style from './style';

const divStyle = {
  marginTop: 100,
  marginBottom: 50,
};


class TicketForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.renderDateClosed = this.renderDateClosed.bind(this);
  }

  renderDateClosed() {
    if (!this.props.ticket.closed) return null;

    return (
      <span>
        <Typography variant="caption">Date Closed</Typography>
        <TextField type="date" value={this.props.ticket.closed ? (new Date(this.props.ticket.closed)).toISOString().slice(0, 10) : ''} disabled></TextField>
      </span>
    );
  }

  render() {
    return (
      <div style={divStyle} >
        <Card>
          <Grid container style={style.gridContainer}>
            <Grid item xs={12} container justify="center" style={style.gridContainerChild}>
              <Typography variant="headline" component="h2" >{this.props.ticket.title}</Typography>
            </Grid>
            <Grid item xs={12} container justify="center" >
              <Typography variant="headline" component="h3" >{this.props.ticket.status}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="title">Issue Details:</Typography>
              <Typography variant="body1">{this.props.ticket.description}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="title">Device Information</Typography>
              <Typography variant="body1" >Name: {this.props.ticket.product ? this.props.ticket.product.name : ''}</Typography>
            </Grid>
            <Grid item xs={6} style={style.gridContainerChild}>
              <Typography variant="body1" >Serial No: {this.props.ticket.product ? this.props.ticket.product.serialNumber : ''}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="title" component="h3" style={style.gridContainerChildBottom} >Customer Information</Typography>
              <Typography variant="body1" component="p" >{this.props.ticket.client ? `${this.props.ticket.client.firstName} ${this.props.ticket.client.lastName}` : ''} </Typography>
              <Typography variant="body1" component="p" >309 rit street</Typography>
              <Typography variant="body1" component="p" >Apt 1</Typography>
              <Typography variant="body1" component="p" >City, State, Zip</Typography>
            </Grid>
            <Grid item xs={6} style={style.gridContainerChildBottom}>
              <Typography variant="caption">Date Opened</Typography>
              <TextField type="date" value={this.props.ticket.opened ? (new Date(this.props.ticket.opened)).toISOString().slice(0, 10) : ''} disabled></TextField>
              {this.renderDateClosed()}
              <Typography variant="caption">Priority</Typography>
              <Typography variant="body1">{this.props.ticket.priority}</Typography>
            </Grid>
            <Grid item xs={12} style={style.gridContainerChildBottom}><Grid container justify="center"><Button variant="raised" color="primary" >Edit</Button></Grid></Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

TicketForm.propTypes = {
  ticket: PropTypes.object,
};

export default TicketForm;
