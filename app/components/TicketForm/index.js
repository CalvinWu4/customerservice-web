/**
*
* TicketForm
*
*/

import React from 'react';


import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
import Icon from 'material-ui/Icon';

class TicketForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      CustomerEmail: '',
      Issue: '',
      Priority: '',
      Complexity: '',
    };
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  editForm = () => {
    this.setState({ disabled: !this.state.disabled });
  }
  render() {
    return (
      <form>
        <Card>
          <CardContent>
            <Button variant="fab" color="primary" label="edit" onClick={this.editForm} disabled={!(this.state.disabled) ? 'disabled' : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /> </svg>
            </Button>
            <h1>Ticket</h1>
            <h3>Customer Details</h3>
            <TextField label="Customer" name="CustomerName" defaultValue="First Last" disabled />
            <TextField label="Customer Email" name="CustomerEmail" type="email" defaultValue="email@gmail.com" disabled={(this.state.disabled) ? 'disabled' : ''} onChange={this.handleChange} />
            <h3>Issue Details</h3>
            <TextField label="Issue" name="IssueDescription" defaultValue="Insert description of the issue with the KennUWare Device here" disabled={(this.state.disabled) ? 'disabled' : ''} onChange={this.handleChange} />
            <TextField label="Agent Assigned" name="AgentAssigned" defaultValue="Best CS Agent" disabled />
            <TextField label="Priority" name="Priority" defaultValue="High/Medium/Low" disabled={(this.state.disabled) ? 'disabled' : ''} onChange={this.handleChange} />
            <TextField label="Complexity" name="Complexity" defaultValue="Complexity" disabled={(this.state.disabled) ? 'disabled' : ''} onChange={this.handleChange} />
            <TextField id="date" name="OpenDate" label="Opened On" type="date" defaultValue="2018-02-24" disabled />
            <h3>Product</h3>
            <TextField id="product" name="Product" label="Product" defaultValue="KennUWare Device 2.0" disabled />
            <TextField id="productSerialNum" name="ProductSerialNum" label="Product Serial Number" defaultValue="123820952323" type="number" disabled />
            <Button variant="raised" color="secondary" label="save" onClick={this.editForm} disabled={(this.state.disabled) ? 'disabled' : ''}>
              <Icon>Save</Icon>
            </Button>
          </CardContent>
        </Card>
      </form>
    );
  }
}

TicketForm.propTypes = {

};

export default TicketForm;
