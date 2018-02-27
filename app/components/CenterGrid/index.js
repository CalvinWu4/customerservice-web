/**
*
* CenterGrid
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';


function CenterGrid(props) {
  return (
    <Grid container alignItems="center" direction="column" justify="center" spacing={16} style={{ height: '100vh' }}>
      <Grid item xs={4}>
        {props.children}
      </Grid>
    </Grid>
  );
}

CenterGrid.propTypes = {
  children: PropTypes.any,
};

export default CenterGrid;
