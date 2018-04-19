/**
*
* ReviewForm
*
*/

import React from 'react';


import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

import style from './style';


class ReviewForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="container">
        <Card style={style.Card}>
          <Grid container alignItems="stretch" justify="flex-start" direction="column">
            <Grid item xs={12} >
              <TextField style={style.TextField} defaultValue="Subject">Subject</TextField>
            </Grid>
            <Grid item xs={12} >
              <TextField style={style.TextField} defaultValue="Comment">Add Review</TextField>
            </Grid>
            <Button variant="raised">Post</Button>
          </Grid>
        </Card>
      </div>
    );
  }
}

ReviewForm.propTypes = {

};

export default ReviewForm;
