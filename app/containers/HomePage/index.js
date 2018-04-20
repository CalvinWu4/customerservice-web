/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import HomepageContentWrapper from 'components/HomepageContentWrapper';
import HomepageLayout from 'components/HomepageLayout';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HomepageContentWrapper goLogin={() => this.props.redirectTo('/login')}>
        <HomepageLayout goLogin={() => this.props.redirectTo('/login')} />
      </HomepageContentWrapper>
    );
  }
}

HomePage.propTypes = {
  redirectTo: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(HomePage);
