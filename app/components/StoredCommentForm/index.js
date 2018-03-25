/**
*
* StoredCommentForm
*
*/

import React from 'react';

import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';

class StoredCommentForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Card>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="title">Subject</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="title">Author</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="title">Date</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Comment</Typography>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

StoredCommentForm.propTypes = {

};

export default StoredCommentForm;
