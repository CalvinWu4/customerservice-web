/**
*
* TicketForm
*
*/

import React from 'react';


import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import CenterGrid from 'components/CenterGrid';
import Card, { CardContent } from 'material-ui/Card';

class TicketForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CenterGrid>
        <form>
          <Card>
            <CardContent>
              <Button variant="fab" color="primary" label="edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /> </svg>
              </Button>
              <h1>Ticket</h1>
              <h3>Customer Details</h3>
              <TextField label="Customer" name="CustomerName" defaultValue="First Last" disabled />
              <TextField label="Customer Email" name="CustomerEmail" type="email" defaultValue="email@gmail.com" disabled />
              <h3>Issue Details</h3>
              <TextField label="Issue" name="IssueDescription" defaultValue="Insert description of the issue with the KennUWare Device here" disabled />
              <TextField label="Priority" name="Priority" defaultValue="High/Medium/Low" disabled />
              <TextField label="Complexity" name="Complexity" defaultValue="Complexity" disabled />
              <TextField id="date" label="Opened On" type="date" defaultValue="2018-02-24" disabled />
              <h3>Product</h3>
              <TextField id="product" label="Product" defaultValue="KennUWare Device 2.0" disabled />
              <TextField id="productSerialNum" label="Product Serial Number" defaultValue="123820952323" type="number" disabled />
            </CardContent>
          </Card>
        </form>
      </CenterGrid>
    );
  }
}

TicketForm.propTypes = {

};

export default TicketForm;
