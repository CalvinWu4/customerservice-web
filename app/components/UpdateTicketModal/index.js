/**
*
* UpdateTicketModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button, Form, Input } from 'semantic-ui-react';


class UpdateTicketModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      title: { value: '', hasError: false },
      productSerialNumber: { value: '', hasError: false },
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
    pastState.productSerialNumber.value = newProps.ticket.productSerialNumber;
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

    const { title, productSerialNumber, description } = this.state;
    this.props.onUpdate({
      title: title.value,
      productSerialNumber: productSerialNumber.value,
      description: description.value,
    });
  }

  validateForm() {
    const { title, productSerialNumber } = this.state;
    const isTitleValid = title.value.length > 5;
    const isProductSerialNumberValid = productSerialNumber.value.length > 0;
    const isValid = isTitleValid && isProductSerialNumberValid;

    const pastState = Object.assign({}, this.state);
    pastState.title.hasError = !isTitleValid;
    pastState.productSerialNumber.hasError = !isProductSerialNumberValid;
    this.setState(pastState);

    return isValid;
  }

  render() {
    const { title, productSerialNumber, description } = this.state;

    return (
      <Modal open={this.props.open} size='small'>
        <Modal.Header>Update ticket</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input control={Input} label='Title' name='title' onChange={this.onChange} value={title.value} error={title.hasError} required />
              <Form.Input control={Input} label='Product serial number' name='productSerialNumber' onChange={this.onChange} value={productSerialNumber.value} error={productSerialNumber.hasError} required />
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
