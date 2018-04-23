/**
*
* UpdateTicketModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button, Form, Input } from 'semantic-ui-react';

const statusOptions = [
  { key: 'new', text: 'New', value: 'new' },
  { key: 'in-progress', text: 'In-progress', value: 'in-progress' },
  { key: 'closed', text: 'Closed', value: 'closed' },
];

class UpdateTicketModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      title: { value: '', hasError: false },
      status: { value: '', hasError: false },
      description: { value: '', hasError: false },
    };

    this.validateForm = this.validateForm.bind(this);

    this.onChange = this.onChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.ticket) return;

    const pastState = Object.assign({}, this.state);
    pastState.title.value = newProps.ticket.title;
    pastState.status.value = newProps.ticket.status;
    pastState.description.value = newProps.ticket.description;
    this.setState(pastState);
  }

  onChange(e, { name, value }) {
    this.setState({
      [name]: { value, hasError: false },
    });
  }

  onUpdate() {
    if (!this.validateForm()) return;

    const { title, status, description } = this.state;
    this.props.onUpdate({
      title: title.value,
      status: status.value,
      description: description.value,
    });
  }

  validateForm() {
    const { title, status } = this.state;
    const isTitleValid = title.value.length > 5;
    const isStatusValid = status.value.length > 0;
    const isValid = isTitleValid && isStatusValid;

    const pastState = Object.assign({}, this.state);
    pastState.title.hasError = !isTitleValid;
    pastState.status.hasError = !isStatusValid;
    this.setState(pastState);

    return isValid;
  }

  render() {
    const { title, description, status } = this.state;

    return (
      <Modal open={this.props.open} size='small'>
        <Modal.Header>Update ticket</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input control={Input} label='Title' name='title' onChange={this.onChange} value={title.value} error={title.hasError} required />
              <Form.Select fluid label='Status' options={statusOptions} name='status' onChange={this.onChange} value={status.value} required />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.TextArea label='Description' name='description' onChange={this.onChange} value={description.value} />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button content='cancel' onClick={this.props.onCancel} />
          <Button content='Update' onClick={this.onUpdate} positive />
        </Modal.Actions>
      </Modal>
    );
  }
}

UpdateTicketModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateTicketModal;
