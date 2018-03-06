/**
*
* CreateTicketForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
import Icon from 'material-ui/Icon';

class CreateTicketForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      description: '',
      status: '',
      address: {
        line1: '160 RIT INN',
        line2: 'apt 1',
        city: 'rochester',
        state: 'ny',
        zipcode: '02141',
        country: 'usa',
      },
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.props.onCreate({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      description: this.state.description,
      address: this.state.address,
    });
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <Card>
          <CardContent>
            <h1>Ticket</h1>
            <h3>Customer Details</h3>
            <TextField label="First Name" id="firstName" name="firstName" onChange={this.handleChange('firstName')} />
            <TextField label="Last Name" name="lastName" onChange={this.handleChange('lastName')} value={this.state.lastName} />
            <h3>Issue Details</h3>
            <TextField label="Issue" name="description" value={this.state.description} onChange={this.handleChange('description')} />
            <TextField label="Agent Assigned" name="agentAssigned" defaultValue="Best CS Agent" disabled />
            <TextField label="Priority" name="priority" defaultValue="High/Medium/Low" disabled onChange={this.handleChange} />
            <TextField label="Status" name="status" defaultValue={this.state.status} disabled={this.state.disabled} onChange={this.handleChange} />
            <TextField label="Complexity" name="Complexity" defaultValue="Complexity" disabled onChange={this.handleChange} />
            <TextField id="date" name="OpenDate" label="Opened On" type="date" defaultValue="2018-03-06" disabled />
            <h3>Product</h3>
            <TextField id="product" name="Product" label="Product" defaultValue="KennUWare Device 2.0" disabled />
            <TextField id="productSerialNum" name="ProductSerialNum" label="Product Serial Number" defaultValue="123820952323" type="number" disabled />
            <Button type="submit" variant="raised" color="secondary" label="save">
              <Icon>Submit</Icon>
            </Button>
          </CardContent>
        </Card>
      </form>
    );
  }
}

CreateTicketForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateTicketForm;
