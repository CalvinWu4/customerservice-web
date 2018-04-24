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
import CreateReviewModal from 'components/CreateReviewModal';

import { Grid, Card, Breadcrumb, Comment, Header, Form, Button, Icon } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTicketPage from './selectors';
import makeSelectApplication from './../Application/selectors';
import reducer from './reducer';
import saga from './saga';
import { getTicket, putTicket, postComment, postReview } from './actions';

export class TicketPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isUpdateTicketModalOpen: false,
      isCreateReviewModalOpen: false,
      content: { value: '', hasError: false },
    };

    this.openUpdateTicketModal = this.openUpdateTicketModal.bind(this);
    this.closeUpdateTicketModal = this.closeUpdateTicketModal.bind(this);
    this.openCreateReviewModal = this.openCreateReviewModal.bind(this);
    this.closeCreateReviewModal = this.closeCreateReviewModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onUpdateTicket = this.onUpdateTicket.bind(this);
    this.onCreateComment = this.onCreateComment.bind(this);
    this.commentRow = this.commentRow.bind(this);
    this.validateComment = this.validateComment.bind(this);
    this.onCreateReview = this.onCreateReview.bind(this);
    this.getCommentAuthor = this.getCommentAuthor.bind(this);
  }

  componentDidMount() {
    const { ticketId } = this.props.match.params;
    this.props.getTicket(ticketId);
  }

  onUpdateTicket(ticket) {
    const { ticketId } = this.props.match.params;
    this.props.putTicket(ticket, ticketId);
    this.closeUpdateTicketModal();
  }

  onCreateComment() {
    if (!this.validateComment()) return;

    const { ticketId } = this.props.match.params;
    const { account, accountType } = this.props.application;
    this.props.postComment({ content: this.state.content.value, ticketId }, account.id, accountType);
  }

  onCreateReview(review) {
    const ticket = this.props.ticketpage.ticket;
    this.props.postReview({ ...review, agentId: ticket.agentId }, ticket.client.id, ticket.id);
    this.closeCreateReviewModal();
  }


  getCommentAuthor(comment) {
    const { accountType } = this.props.application;
    const commentedBy = comment.clientId !== -1 ? 'customer' : 'employee';
    if (accountType === commentedBy) return 'Me';

    return commentedBy === 'customer' ? 'Client' : 'Agent';
  }

  handleChange(e, { name, value }) {
    this.setState({
      [name]: { value, hasError: false },
    });
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

  openCreateReviewModal() {
    this.setState({
      isCreateReviewModalOpen: true,
    });
  }

  closeCreateReviewModal() {
    this.setState({
      isCreateReviewModalOpen: false,
    });
  }

  validateComment() {
    const hasError = this.state.content.value.length === 0;

    this.setState({ content: { ...this.state.content, hasError } });

    return !hasError;
  }

  commentRow(comment) {
    return (
      <Comment key={`containers_ticketpage_comment_${comment.id}`}>
        <Comment.Content>
          <Comment.Author as='a'>{ this.getCommentAuthor(comment) }</Comment.Author>
          <Comment.Metadata>
            <div>Sent via web</div>
          </Comment.Metadata>
          <Comment.Text>{comment.content}</Comment.Text>
          <Comment.Actions>

          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }

  render() {
    const { ticket } = this.props.ticketpage;

    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <NavigationBar redirectTo={this.props.redirectTo} agent={this.props.application.accountType === 'employee'} name={`${this.props.application.account.firstName} ${this.props.application.account.lastName}`}>
          <UpdateTicketModal open={this.state.isUpdateTicketModalOpen} onCancel={this.closeUpdateTicketModal} ticket={ticket} onUpdate={this.onUpdateTicket} />
          <CreateReviewModal open={this.state.isCreateReviewModalOpen} onCancel={this.closeCreateReviewModal} onCreate={this.onCreateReview} />
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
                { ticket.status === 'closed' ? (<Button color='yellow' onClick={this.openCreateReviewModal}><Icon name='pencil' /> Add review</Button>) : null }
                { ticket.status !== 'closed' ? (<Button onClick={this.openUpdateTicketModal}><Icon name='edit' /> Edit</Button>) : null }
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
                    <Form.TextArea name='content' onChange={this.handleChange} value={this.state.content.value} error={this.state.content.hasError} />
                    <Button content='Add Reply' labelPosition='left' icon='edit' onClick={this.onCreateComment} primary />
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
  application: PropTypes.object.isRequired,
  redirectTo: PropTypes.func.isRequired,
  getTicket: PropTypes.func.isRequired,
  putTicket: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  postReview: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ticketpage: makeSelectTicketPage(),
  application: makeSelectApplication(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
    getTicket: (ticketId) => dispatch(getTicket(ticketId)),
    putTicket: (ticket, ticketId) => dispatch(putTicket(ticket, ticketId)),
    postComment: (comment, accountId, accountType) => dispatch(postComment(comment, accountId, accountType)),
    postReview: (review, clientId, ticketId) => dispatch(postReview(review, clientId, ticketId)),
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
