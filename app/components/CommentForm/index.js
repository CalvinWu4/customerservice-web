/**
*
* CommentForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

class CommentForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Paper elevation={4}>
          <Typography component="h1" variant="title">Subject</Typography>
          <Typography component="p">
            Comments about the ticket can go here and be repeated.
          </Typography>
        </Paper>
      </div>
    );
  }
}

CommentForm.propTypes = {

};

export default CommentForm;
