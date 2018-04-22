/**
*
* EditTicketForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';

// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
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


class EditTicketForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.ticket.title,
      status: this.props.ticket.status,
      description: this.props.ticket.description,
      priority: this.props.ticket.priority,
    };
    this.onChange = this.onChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onUpdate() {
    this.props.onUpdate({
      title: this.state.title,
      description: this.state.description,
      status: this.state.status,
    });
  }

  render() {
    return (
      <div style={divStyle} >
        <Card>
          <Grid container style={style.gridContainer}>
            <Grid item xs={12} container justify="center" style={style.gridContainerChild}>
              <Typography variant="headline" component="h2" > {this.state.title} </Typography>
            </Grid>
            <Grid item xs={12} container justify="center" >
              <TextField variant="headline" component="h3" label="Status" name="status" onChange={this.onChange} value={this.state.status} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="title">Issue Details:</Typography>
              <TextField variant="body1" name="description" onChange={this.onChange} value={this.state.description} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="title">Device Information</Typography>
              <TextField variant="body1" label="Model:"></TextField>
            </Grid>
            <Grid item xs={6} style={style.gridContainerChild}>
              <TextField type="number" label="Serial No"> </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="title" component="h3" style={style.gridContainerChildBottom} >Customer Information</Typography>
              <Typography variant="body1" component="p" >{this.props.ticket.client.firstName} {this.props.ticket.client.lastName}</Typography>
              <Typography variant="body1" component="p" >{this.props.ticket.client.address.line1}</Typography>
              <Typography variant="body1" component="p" >{this.props.ticket.client.address.line2}</Typography>
              <Typography variant="body1" component="p" >{this.props.ticket.client.address.city}, {this.props.ticket.client.address.state}, {this.props.ticket.client.address.zip}</Typography>
            </Grid>
            <Grid item xs={6} style={style.gridContainerChildBottom}>
              <Typography variant="title" component="h3">Customer Support Agent: </Typography>
              <Typography variant="body1" component="p">{this.props.ticket.agentId}</Typography>
              <Typography variant="caption">Priority</Typography>
              {/* <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="Low" />
                <MenuItem value={2} primaryText="Medium" />
                <MenuItem value={3} primaryText="High" />
              </DropDownMenu> */}
              <TextField variant="body1" label="High/Medium/Low" value={this.state.priority} />
            </Grid>
            <Grid item xs={12} style={style.gridContainerChildBottom}><Grid container justify="center"><Button variant="raised" color="primary" onClick={this.onUpdate}>Save</Button></Grid></Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onUpdate: PropTypes.func,
};

export default EditTicketForm;
