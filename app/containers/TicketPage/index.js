/**
 *
 * TicketPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import NavigationBar from 'components/NavigationBar';
import UpdateTicketModal from 'components/UpdateTicketModal';

import { Grid, Card, Breadcrumb, Comment, Header, Form, Button, Icon } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTicketPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getTicket, putTicket } from './actions';

export class TicketPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isUpdateTicketModalOpen: false,
    };

    this.openUpdateTicketModal = this.openUpdateTicketModal.bind(this);
    this.closeUpdateTicketModal = this.closeUpdateTicketModal.bind(this);

    this.onUpdateTicket = this.onUpdateTicket.bind(this);
    this.commentRow = this.commentRow.bind(this);
  }

  componentDidMount() {
    const { ticketId } = this.props.match.params;
    this.props.getTicket(ticketId);
  }

  onUpdateTicket(ticket) {
    this.props.putTicket(ticket, this.props.ticketpage.ticket.id);
    this.closeUpdateTicketModal();
  }

  openUpdateTicketModal() {
    this.setState({
      isUpdateTicketModalOpen: true,
    });
  }

  closeUpdateTicketModal() {
    this.setState({
      isUpdateTicketModalOpen: false,
    });
  }

  commentRow(comment) {
    return (
      <Comment key={`containers_ticketpage_comment_${comment.id}`}>
        <Comment.Content>
          <Comment.Author as='a'>{comment.clientId !== -1 ? 'Me' : 'Agent'}</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>{comment.content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }

  render() {
    const { ticket } = this.props.ticketpage;

    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <NavigationBar redirectTo={this.props.redirectTo}>
          <UpdateTicketModal open={this.state.isUpdateTicketModalOpen} onCancel={this.closeUpdateTicketModal} ticket={ticket} onUpdate={this.onUpdateTicket} />
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Breadcrumb size='huge'>
                  <Breadcrumb.Section onClick={() => this.props.redirectTo('/tickets')} link>Tickets</Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section>{ticket.title}</Breadcrumb.Section>
                </Breadcrumb>
              </Grid.Column>
              <Grid.Column textAlign='right' width={8}>
                <Button onClick={this.openUpdateTicketModal}><Icon name='edit' /> Edit</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Card style={{ width: '100%' }}>
                  <Card.Content style={{ padding: '35px' }}>
                    <Grid centered>
                      <Grid.Row>
                        <Grid.Column width={8}>
                          <Card.Header style={{ fontSize: '2em' }}>{ticket.title}</Card.Header>
                          <Card.Meta>Agent id: {ticket.agentId}</Card.Meta>
                          <Card.Meta>Status: {ticket.status}</Card.Meta>
                          <Card.Meta>Serial number: {ticket.productSerialNumber}</Card.Meta>
                          <Card.Description>{ticket.description}</Card.Description>
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Card.Header style={{ fontSize: '2em' }}>{ticket.client.firstName} {ticket.client.lastName}</Card.Header>
                          <Card.Meta>{ticket.client.address.line1}</Card.Meta>
                          <Card.Meta>{ticket.client.address.line2}</Card.Meta>
                          <Card.Meta>{ticket.client.address.city}, {ticket.client.address.state}, {ticket.client.address.zipcode}</Card.Meta>
                          <Card.Description> </Card.Description>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Comment.Group size='large'>
                  <Header as='h3'>Comments</Header>
                  { ticket.comments.map(this.commentRow) }
                  <Form reply>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                  </Form>
                </Comment.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </NavigationBar>
      </div>
    );
  }
}

TicketPage.propTypes = {
  match: PropTypes.object.isRequired,
  ticketpage: PropTypes.object.isRequired,
  redirectTo: PropTypes.func.isRequired,
  getTicket: PropTypes.func.isRequired,
  putTicket: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ticketpage: makeSelectTicketPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
    getTicket: (ticketId) => dispatch(getTicket(ticketId)),
    putTicket: (ticket, ticketId) => dispatch(putTicket(ticket, ticketId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'ticketPage', reducer });
const withSaga = injectSaga({ key: 'ticketPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TicketPage);
