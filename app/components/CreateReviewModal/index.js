/**
*
* CreateReviewModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button, Form, Header } from 'semantic-ui-react';


class CreateReviewModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      content: { value: '', hasError: false },
    };

    this.onCreateReview = this.onCreateReview.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  onCreateReview() {
    if (!this.validation()) return;

    this.props.onCreate({
      content: this.state.content.value,
    });
  }

  handleChange(e, { name, value }) {
    this.setState({
      [name]: { value, hasError: false },
    });
  }

  validation() {
    const hasError = this.state.content.value.length === 0;

    this.setState({
      content: { ...this.state.content, hasError },
    });

    return !hasError;
  }

  render() {
    return (
      <Modal open={this.props.open} size='small'>
        <Modal.Content>
          <Form>
            <Header as='h2' content='Your feeback is very much appreciated' />
            <Form.Group widths='equal'>
              <Form.TextArea style={{ height: '200px' }} name='content' value={this.state.content.value} error={this.state.content.hasError} onChange={this.handleChange} />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button content='Cancel' onClick={this.props.onCancel} />
          <Button content='Create' onClick={this.onCreateReview} positive />
        </Modal.Actions>
      </Modal>
    );
  }
}

CreateReviewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CreateReviewModal;
