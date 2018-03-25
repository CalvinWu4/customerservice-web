/**
*
* AgentTicketTable
*
*/

import React from 'react';
// import styled from 'styled-components';


class AgentTicketTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table>
            <TableHead>
              <TableRow>
                <TableCell>Issue</TableCell>
                <TableCell>Device Model</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Date Opened</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.tickets.map(t =>{
                return (
                  <TableRow key={t.id}>
                    <TableCell>{t.title}</TableCell>
                    <TableCell>{t.device.model}</TableCell>
                    <TableCell>{t.client.name}</TableCell>
                    <TableCell>{t.priority}</TableCell>
                    <TableCell>{t.openDate}</TableCell>
                    <TableCell>{t.status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
    );
  }
}

AgentTicketTable.propTypes = {
  tickets: PropTypes.object.isRequired,
};

export default AgentTicketTable;
