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
  constructor(props) {
    super(props);
    this.renderTicketRow = this.renderTicketRow.bind(this);
  }

  renderTicketRow(t) {
    return (
      <TableRow key={t.id} onClick={() => this.props.onClickRow(t.id)} hover>
        <TableCell>{t.title}</TableCell>
        <TableCell>{t.deviceId}</TableCell>
        {/* <TableCell>{t.device.model}</TableCell> */}
        <TableCell>{new Date(t.opened).toDateString()}</TableCell>
        <TableCell>{t.status}</TableCell>
      </TableRow>
    );
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell >Issue</TableCell>
            <TableCell>Device Model</TableCell>
            <TableCell>Date Opened</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.tickets.map((t) => this.renderTicketRow(t))}
        </TableBody>
      </Table>
    );
  }
}

ClientTicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
  onClickRow: PropTypes.func.isRequired,
};

export default ClientTicketTable;
