/**
 *
 * ClientsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import { Grid, Header, Icon, Table } from 'semantic-ui-react';
import NavigationBar from 'components/NavigationBar';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectClientsPage from './selectors';
import makeSelectApplication from './../Application/selectors';
import reducer from './reducer';
import saga from './saga';
import { getClients } from './actions';

export class ClientsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.clientRow = this.clientRow.bind(this);
  }

  componentDidMount() {
    this.props.getClients();
  }

  clientRow(client) {
    return (
      <Table.Row key={`containers_clientspage_client_${client.id}`}>
        <Table.Cell>{client.firstName}</Table.Cell>
        <Table.Cell>{client.lastName}</Table.Cell>
        <Table.Cell>{client.email}</Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <NavigationBar redirectTo={this.props.redirectTo} agent={this.props.application.accountType === 'employee'} name={`${this.props.application.account.firstName} ${this.props.application.account.lastName}`}>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as='h2'>
                  <Icon name='users' />
                  <Header.Content>
                    Clients
                    <Header.Subheader>
                      In KennUWare
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell width={5}>First name</Table.HeaderCell>
                      <Table.HeaderCell width={5}>Last name</Table.HeaderCell>
                      <Table.HeaderCell width={6}>Email</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.props.clientspage.clients.map(this.clientRow)}
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

ClientsPage.propTypes = {
  redirectTo: PropTypes.func.isRequired,
  clientspage: PropTypes.object.isRequired,
  getClients: PropTypes.func.isRequired,
  application: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  clientspage: makeSelectClientsPage(),
  application: makeSelectApplication(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
    getClients: () => dispatch(getClients()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'clientsPage', reducer });
const withSaga = injectSaga({ key: 'clientsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ClientsPage);
