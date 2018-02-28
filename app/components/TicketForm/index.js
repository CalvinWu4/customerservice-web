/**
*
* TicketForm
*
*/

import React from 'react';


import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import CenterGrid from 'components/CenterGrid';
import Card, { CardContent } from 'material-ui/Card';

class TicketForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CenterGrid>
        <form>
          <Card>
            <CardContent>
              <h1>Ticket Details</h1>
              <TextField label="Customer" name="CustomerName" />
              <TextField label="Customer Email" name="CustomerEmail" />
              <Typography variant="headline" component="h3">Issue Description</Typography>
              <Typography component="p">Insert description of the issue with the KennUWare Device here</Typography>
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
