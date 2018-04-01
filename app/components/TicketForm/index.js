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
    this.state = {
    };
    this.onRequestReplacement = this.onRequestReplacement.bind(this);
  }

  onRequestReplacement() {
    this.props.onRequestReplacement({

    });
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
              <Typography variant="body1" >Model: X</Typography>
            </Grid>
            <Grid item xs={6} style={style.gridContainerChild}>
              <Typography variant="body1" >Serial No: </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="title" component="h3" style={style.gridContainerChildBottom} >Customer Information</Typography>
              <Typography variant="body1" component="p" >First Name Last Name</Typography>
              <Typography variant="body1" component="p" >Line 1 Address</Typography>
              <Typography variant="body1" component="p" >Line 2 Address</Typography>
              <Typography variant="body1" component="p" >City, State, Zip</Typography>
            </Grid>
            <Grid item xs={6} style={style.gridContainerChildBottom}>
              <Typography variant="title" component="h3">Customer Support Agent: </Typography>
              <Typography variant="body1" component="p">Customer Support Agent</Typography>
              <Typography variant="caption">Date Opened</Typography>
              <TextField type="date" value={this.props.ticket.opened ? (new Date(this.props.ticket.opened)).toISOString().slice(0, 10) : ''} disabled></TextField>
              <Typography variant="caption">Date Closed</Typography>
              <TextField type="date" value={this.props.ticket.closed ? (new Date(this.props.ticket.closed)).toISOString().slice(0, 10) : ''} disabled></TextField>
              <Typography variant="caption">Priority</Typography>
              <Typography variant="body1">High/Medium/Low</Typography>
            </Grid>
            <Grid item xs={12} style={style.gridContainerChildBottom}>
              <Grid container justify="center" alignItems="center" spacing={24}>
                { /* TODO: check JWT to ensure user is agent before displaying */ }
                <Grid item xs={2}>
                  <Button variant="raised" color="primary">Edit</Button>
                </Grid>
                <Grid item xs={2}>
                  <Button variant="raised" color="secondary" onClick={this.onRequestReplacement}>Replace Device</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>

      </div>
    );
  }
}

TicketForm.propTypes = {
  onRequestReplacement: PropTypes.func.isRequired,
  ticket: PropTypes.object,
};

export default TicketForm;
