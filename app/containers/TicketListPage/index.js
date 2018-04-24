/**
 *
 * TicketListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import makeSelectApplication from 'containers/Application/selectors';
import NavigationBar from 'components/NavigationBar';
import CreateTicketByClientModal from 'components/CreateTicketByClientModal';

import { Grid, Header, Icon, Button, Table, Label } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTicketListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getTickets, postTicket } from './actions';

export class TicketListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isCreateTicketByClientModalOpen: false,
    };

    this.onCreateTicket = this.onCreateTicket.bind(this);
    this.ticketRow = this.ticketRow.bind(this);

    this.openCreateTicketByClientModal = this.openCreateTicketByClientModal.bind(this);
    this.closeCreateTicketByClientModal = this.closeCreateTicketByClientModal.bind(this);
  }

  componentDidMount() {
    const { account, accountType } = this.props.application;
    this.props.getTicketList(account.id, accountType);
  }

  onCreateTicket(ticket) {
    const { account, accountType } = this.props.application;
    this.props.postTicket(ticket, account.id, accountType);

    this.closeCreateTicketByClientModal();
  }

  openCreateTicketByClientModal() {
    this.setState({
      isCreateTicketByClientModalOpen: true,
    });
  }

  closeCreateTicketByClientModal() {
    this.setState({
      isCreateTicketByClientModalOpen: false,
    });
  }

  ticketRow(ticket) {
    let color = 'blue';

    switch (ticket.status) {
      case 'new':
        color = 'green';
        break;
      case 'in-progress':
        color = 'yellow';
        break;
      case 'closed':
        color = 'red';
        break;
      default:
        break;
    }

    return (
      <Table.Row key={`containers_ticketlistpage_ticket_${ticket.id}`} onClick={() => this.props.redirectTo(`/tickets/${ticket.id}`)}>
        <Table.Cell>{ ticket.title }</Table.Cell>
        <Table.Cell>{ `${ticket.client.firstName} ${ticket.client.lastName}` }</Table.Cell>
        <Table.Cell><Label color={color} content={ticket.status} /></Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <CreateTicketByClientModal open={this.state.isCreateTicketByClientModalOpen} onCancel={this.closeCreateTicketByClientModal} onCreate={this.onCreateTicket} clients={this.props.application.clients} />
        <NavigationBar redirectTo={this.props.redirectTo}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h2'>
                  <Icon name='ticket' />
                  <Header.Content>
                    Tickets
                    <Header.Subheader>
                      All tickets for KennUWare
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column width={8} textAlign='right'>
                { this.props.application.accountType === 'customer' ? (<Button size='large' color='blue' onClick={this.openCreateTicketByClientModal}><Icon name='add' />Create ticket</Button>) : null }
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Table style={{ marginTop: '0px' }} striped selectable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell width={8}>Title</Table.HeaderCell>
                      <Table.HeaderCell width={5}>Client</Table.HeaderCell>
                      <Table.HeaderCell width={3}>Status</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.props.ticketlistpage.tickets.map(this.ticketRow)}
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </NavigationBar>
      </div>
    );
  }
}

TicketListPage.propTypes = {
  redirectTo: PropTypes.func.isRequired,
  application: PropTypes.object.isRequired,
  ticketlistpage: PropTypes.object.isRequired,
  getTicketList: PropTypes.func.isRequired,
  postTicket: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  application: makeSelectApplication(),
  ticketlistpage: makeSelectTicketListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
    getTicketList: (accountId, accountType) => dispatch(getTickets(accountId, accountType)),
    postTicket: (ticket, accountId, accountType) => dispatch(postTicket(ticket, accountId, accountType)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'ticketListPage', reducer });
const withSaga = injectSaga({ key: 'ticketListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TicketListPage);
