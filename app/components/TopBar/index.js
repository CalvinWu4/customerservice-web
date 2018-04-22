/**
*
* TopBar
*
*/

import React from 'react';

import Button from 'material-ui/Button';

// import styled from 'styled-components';


class TopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ paddingBottom: '5px' }}>
        <Button variant="raised" style={{ position: 'absolute', right: '30px' }} color="primary" align="right" >Logout</Button>
      </div>
    );
  }
}

TopBar.propTypes = {

};

export default TopBar;
