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

import CreateTicketForm from 'components/CreateTicketForm';
import CommentForm from 'components/CommentForm/Loadable';
import CenterGrid from 'components/CenterGrid';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTicketPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { postTicket } from './actions';


export class TicketPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onCreateTicket = this.onCreateTicket.bind(this);
  }
  onCreateTicket(ticket) {
    this.props.postTicket(ticket);
  }

  render() {
    return (
      <div>
        <CenterGrid>
          <CreateTicketForm onCreate={this.onCreateTicket} />
          <CommentForm />
        </CenterGrid>
      </div>
    );
  }
}

TicketPage.propTypes = {
  postTicket: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ticketpage: makeSelectTicketPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    postTicket: (ticket) => dispatch(postTicket(ticket)),
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
