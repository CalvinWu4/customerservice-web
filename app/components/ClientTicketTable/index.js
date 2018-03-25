/**
*
* ClientTicketTable
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
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
          {this.props.tickets.map((t) => {
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
  tickets: PropTypes.array.isRequired,
};

export default ClientTicketTable;
