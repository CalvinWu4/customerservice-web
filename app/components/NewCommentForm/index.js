/**
*
* NewCommentForm
*
*/

import React from 'react';


import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

import style from './style';


class NewCommentForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="container">
        <Card style={style.Card}>
          <Grid alignItems="stretch" justify="flex-start" direction="column">
            <Grid item s={12} >
              <TextField style={style.TextField} defaultValue="Subject">Subject</TextField>
            </Grid>
            <Grid item s={12} >
              <TextField style={style.TextField} defaultValue="Comment">New Comment</TextField>
            </Grid>
            <Button>Post</Button>
          </Grid>
        </Card>
      </div>
    );
  }
}

NewCommentForm.propTypes = {

};

export default NewCommentForm;
