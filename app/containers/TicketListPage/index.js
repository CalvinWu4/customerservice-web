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
import CreateTicketByAgentModal from 'components/CreateTicketByAgentModal';

import { Grid, Header, Icon, Button, Table, Label, Menu } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTicketListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getTickets } from './actions';

export class TicketListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isCreateTicketByAgentModalOpen: false,
    };

    this.ticketRow = this.ticketRow.bind(this);

    this.openCreateTicketByAgentModal = this.openCreateTicketByAgentModal.bind(this);
    this.closeCreateTicketByAgentModal = this.closeCreateTicketByAgentModal.bind(this);
  }

  componentDidMount() {
    const { account, accountType } = this.props.application;
    this.props.getTicketList(account.id, accountType);
  }

  openCreateTicketByAgentModal() {
    this.setState({
      isCreateTicketByAgentModalOpen: true,
    });
  }

  closeCreateTicketByAgentModal() {
    this.setState({
      isCreateTicketByAgentModalOpen: false,
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
      case 'done':
        color = 'red';
        break;
      default:
        break;
    }

    return (
      <Table.Row key={`containers_ticketlistpage_ticket_${ticket.id}`}>
        <Table.Cell>{ ticket.title }</Table.Cell>
        <Table.Cell>{ `${ticket.client.firstName} ${ticket.client.lastName}` }</Table.Cell>
        <Table.Cell><Label color={color} content={ticket.status} /></Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <CreateTicketByAgentModal open={this.state.isCreateTicketByAgentModalOpen} onCancel={this.closeCreateTicketByAgentModal} onCreate={(e) => console.log(e)} clients={this.props.application.clients} />
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
                <Button size='large' color='blue' onClick={this.openCreateTicketByAgentModal}><Icon name='add' />Create ticket</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Menu style={{ marginLeft: '0px', marginBottom: '0px' }} text>
                  <Menu.Item header>Sort by</Menu.Item>
                  <Menu.Item content='Assigned to me' active />
                  <Menu.Item content='New' />
                  <Menu.Item content='In-progress' />
                  <Menu.Item content='Closed' />
                  <Menu.Item content='All' />
                </Menu>
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
};

const mapStateToProps = createStructuredSelector({
  application: makeSelectApplication(),
  ticketlistpage: makeSelectTicketListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
    getTicketList: (accountId, accountType) => dispatch(getTickets(accountId, accountType)),
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
