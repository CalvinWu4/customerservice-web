/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';

import style from './style';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid container alignItems="stretch" direction="row" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={12}>
          <Typography variant="headline" align="center" color="black">Welcome to the KennUWare Customer Service Portal!</Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper style={style.paper}>
            <Grid container alignItems="center" direction="row" justify="center">
              <Grid item xs={12}>
                <Button variant="button" color="primary">I am a customer</Button>
              </Grid>
              <Grid item xs={12}>
                <Button color="secondary">I am a service agent</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
