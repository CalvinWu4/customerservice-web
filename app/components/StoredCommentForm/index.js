/**
*
* StoredCommentForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';

class StoredCommentForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.commentRow = this.commentRow.bind(this);
  }
  commentRow(comment) {
    return (
      <Card key={`components_storedcommentform_comment_${comment.id}`} >
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="title">{comment.content}</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="title">{comment.clientId === 0 ? comment.agentId : comment.clientId }</Typography>
          </Grid>
        </Grid>
      </Card>
    );
  }
  render() {
    return (
      <div>
        {this.props.comments.map(this.commentRow)}
      </div>
    );
  }
}

StoredCommentForm.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default StoredCommentForm;
