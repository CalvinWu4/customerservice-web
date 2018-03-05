/**
*
* TicketForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
import Icon from 'material-ui/Icon';


class TicketForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      email: props.ticket.CustomerEmail,
      description: props.ticket.description,
      status: props.ticket.status,
      firstName: props.ticket.firstName,
      lastName: props.ticket.lastName,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      disabled: true,
      email: newProps.ticket.CustomerEmail,
      description: newProps.ticket.description,
      status: newProps.ticket.status,
      firstName: newProps.ticket.firstName,
      lastName: newProps.ticket.lastName,
      address: {
        line1: '123 Golisano Rd',
        line2: 'apt 3',
        city: 'Rochester',
        state: 'ny',
        zipcode: '14623',
        country: 'usa',
      },
    },
   );
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  editForm = () => {
    this.setState({ disabled: !this.state.disabled });
    if (this.props.onCreate) {
      this.props.onCreate(this.state);
    }
  }
  isDisabled() {
    return (this.state.disabled);
  }
  render() {
    return (
      <form>
        <Card>
          <CardContent>
            <Button variant="fab" color="primary" label="edit" onClick={this.editForm} disabled={!this.state.disabled} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /> </svg>
            </Button>
            {/*
            <Button variant="fab" color="secondary" label="add" >
              <p>Add</p>
            </Button>
            */}
            <h1>Ticket</h1>
            <h3>Customer Details</h3>
            <TextField label="Customer" name="CustomerName" defaultValue={`${this.state.firstName} ${this.state.lastName}`} disabled={this.state.disabled} />
            <TextField label="Customer Email" name="CustomerEmail" type="email" defaultValue={this.state.email} disabled={this.state.disabled} onChange={this.handleChange} />
            <h3>Issue Details</h3>
            <TextField label="Issue" name="IssueDescription" defaultValue={this.state.description} disabled={this.state.disabled} onChange={this.handleChange} />
            <TextField label="Agent Assigned" name="AgentAssigned" defaultValue="Best CS Agent" disabled />
            <TextField label="Priority" name="Priority" defaultValue="High/Medium/Low" disabled={this.state.disabled} onChange={this.handleChange} />
            <TextField label="Status" name="Status" defaultValue={this.state.status} disabled={this.state.disabled} onChange={this.handleChange} />
            <TextField label="Complexity" name="Complexity" defaultValue="Complexity" disabled={this.state.disabled} onChange={this.handleChange} />
            <TextField id="date" name="OpenDate" label="Opened On" type="date" defaultValue="2018-03-06" disabled />
            <h3>Product</h3>
            <TextField id="product" name="Product" label="Product" defaultValue="KennUWare Device 2.0" disabled />
            <TextField id="productSerialNum" name="ProductSerialNum" label="Product Serial Number" defaultValue="123820952323" type="number" disabled />
            <Button type="submit" variant="raised" color="secondary" label="save" onClick={this.editForm} disabled={this.state.disabled}>
              <Icon>Submit</Icon>
            </Button>
          </CardContent>
        </Card>
      </form>
    );
  }
}

TicketForm.propTypes = {
  ticket: PropTypes.object.isRequired,
  onCreate: PropTypes.func.isRequired,

};

export default TicketForm;
