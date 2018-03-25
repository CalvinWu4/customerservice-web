/**
*
* ClientTicketTable
*
*/

import React from 'react';
// import styled from 'styled-components';


class ClientTicketTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table>
            <TableHead>
              <TableRow>
                <TableCell>Issue</TableCell>
                <TableCell>Device Model</TableCell>
                <TableCell>Date Opened</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.dashboard.tickets.map(t =>{
                return (
                  <TableRow key={t.id}>
                    <TableCell>{t.title}</TableCell>
                    <TableCell>{t.device.model}</TableCell>
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

ClientTicketTable.propTypes = {
  ticket: PropTypes.object.isRequired,
};

export default ClientTicketTable;
