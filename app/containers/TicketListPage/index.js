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

import NavigationBar from 'components/NavigationBar';

import { Grid, Header, Icon, Button, Table, Label, Menu } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTicketListPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class TicketListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
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
                <Button size='large' color='blue'><Icon name='add' />Create ticket</Button>
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
                    <Table.Row>
                      <Table.Cell>My watch screen is not working</Table.Cell>
                      <Table.Cell>John Doe</Table.Cell>
                      <Table.Cell><Label color='yellow' content='In-progress' /></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Is there a way to upgrade to the model X watch from model T?</Table.Cell>
                      <Table.Cell>Steven Ho</Table.Cell>
                      <Table.Cell><Label color='green' content='New' /></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>I do not like the color of my watch, money back?</Table.Cell>
                      <Table.Cell>Vladimir Putin</Table.Cell>
                      <Table.Cell><Label color='red' content='Closed' /></Table.Cell>
                    </Table.Row>
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
};

const mapStateToProps = createStructuredSelector({
  ticketlistpage: makeSelectTicketListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
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
