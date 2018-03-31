/**
 *
 * NewTicketPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Typography from 'material-ui/Typography';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNewTicketPage from './selectors';
import reducer from './reducer';
import saga from './saga';


import NewTicketForm from '../../components/NewTicketForm';


const divStyle = {
  width: '80%',
  marginRight: '10%',
  marginLeft: '10%',
  marginTop: '10%',
};
const titleStyle = {
  paddingBottom: 30,
  paddingLeft: '45%',
  paddingRight: '45%',
};

export class NewTicketPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={divStyle}>
        <Typography variant="title" component="h2" style={titleStyle}>Create Ticket</Typography>
        <NewTicketForm onCreateTicket={(e) => console.log(e)} />
      </div>
    );
  }
}

NewTicketPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  newticketpage: makeSelectNewTicketPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'newTicketPage', reducer });
const withSaga = injectSaga({ key: 'newTicketPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewTicketPage);
