/**
 *
 * MyReviewsPage
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
import makeSelectMyReviewsPage from './selectors';
import makeSelectApplication from './../Application/selectors';
import reducer from './reducer';
import saga from './saga';
import { getReviews } from './actions';

export class MyReviewsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.reviewRow = this.reviewRow.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.application.account;
    this.props.getReviews(id);
  }

  reviewRow(review) {
    return (
      <Table.Row key={`containers_myreviewspage_review_${review.id}`}>
        <Table.Cell>{review.title}</Table.Cell>
        <Table.Cell>{review.ticketId}</Table.Cell>
        <Table.Cell>{review.description}</Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <NavigationBar redirectTo={this.props.redirectTo}>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as='h2'>
                  <Icon name='thumbs outline up' />
                  <Header.Content>
                    Reviews
                    <Header.Subheader>
                      From my clients
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
                      <Table.HeaderCell width={5}>Title</Table.HeaderCell>
                      <Table.HeaderCell width={3}>Ticket ID</Table.HeaderCell>
                      <Table.HeaderCell width={8}>Description</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    { this.props.myreviewspage.reviews.map(this.reviewRow) }
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

MyReviewsPage.propTypes = {
  redirectTo: PropTypes.func.isRequired,
  myreviewspage: PropTypes.object.isRequired,
  application: PropTypes.object.isRequired,
  getReviews: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myreviewspage: makeSelectMyReviewsPage(),
  application: makeSelectApplication(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
    getReviews: (agentId) => dispatch(getReviews(agentId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myReviewsPage', reducer });
const withSaga = injectSaga({ key: 'myReviewsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyReviewsPage);
