/**
*
* NewCommentForm
*
*/

import React from 'react';

import PropTypes from 'prop-types';

import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

import style from './style';


class NewCommentForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      subject: {
        value: '',
        isInvalid: false,
        helperText: '',
      },
      description: {
        value: '',
        isInvalid: false,
        helperText: '',
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onCreateComment = this.onCreateComment.bind(this);
    this.validateSubject = this.validateSubject.bind(this);
    this.validateDescription = this.validateDescription.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: { ...this.state[e.target.name], value: e.target.value },
    });
  }

  onCreateComment() {
    const isSubjectValid = this.validateSubject();
    const isDescriptionValid = this.validateDescription();

    if (!isSubjectValid || !isDescriptionValid) return;

    this.props.onCreateComment({
      subject: this.state.subject.value,
      description: this.state.description.value,
    });
  }

  // Check that the subject isn't empty
  validateSubject() {
    let isInvalid = false;
    let helperText = '';

    if (this.state.subject.value === '') {
      isInvalid = true;
      helperText = 'Subject is required';
    }

    this.setState({
      subject: { ...this.state.subject, isInvalid, helperText },
    });

    return !isInvalid;
  }

  // Check that the description isn't empty
  validateDescription() {
    let isInvalid = false;
    let helperText = '';

    if (this.state.description.value === '') {
      isInvalid = true;
      helperText = 'Description is required';
    }

    this.setState({
      description: { ...this.state.description, isInvalid, helperText },
    });

    return !isInvalid;
  }

  render() {
    return (
      <div id="container">
        <Card style={style.Card}>
          <Grid container alignItems="stretch" justify="flex-start" direction="column">
            <Grid item xs={12} >
              <TextField
                style={style.TextField}
                variant="body1"
                label="Subject"
                name="subject"
                helperText={this.state.subject.helperText}
                error={this.state.subject.isInvalid}
                onChange={this.onChange}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                style={style.TextField}
                variant="body1"
                label="Description"
                name="description"
                helperText={this.state.description.helperText}
                error={this.state.description.isInvalid}
                onChange={this.onChange}
                multiline
              />
            </Grid>
            <Button variant="raised" onClick={this.onCreateComment}>Post</Button>
          </Grid>
        </Card>
      </div>
    );
  }
}

NewCommentForm.propTypes = {
  onCreateComment: PropTypes.func.isRequired,
};

export default NewCommentForm;
