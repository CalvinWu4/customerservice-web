/**
*
* CreateTicketByAgentModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button, Form, Input } from 'semantic-ui-react';


class CreateTicketByAgentModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      title: { value: '', hasError: false },
      productSerialNumber: { value: '', hasError: false },
      clientId: { value: -1, hasError: false },
      description: { value: '', hasError: false },
    };

    this.validateForm = this.validateForm.bind(this);

    this.onChange = this.onChange.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }

  onChange(e, { name, value }) {
    this.setState({
      [name]: { value, hasError: false },
    });
  }

  onCreate() {
    if (!this.validateForm()) return;

    const { title, productSerialNumber, clientId, description } = this.state;
    this.props.onCreate({
      title: title.value,
      productSerialNumber: productSerialNumber.value,
      clientId: clientId.value,
      description: description.value,
    });
  }

  validateForm() {
    const { title, productSerialNumber, clientId } = this.state;
    const isTitleValid = title.value.length > 5;
    const isProductSerialNumberValid = productSerialNumber.value.length > 0;
    const isClientIdValid = clientId.value > 0;
    const isValid = isTitleValid && isProductSerialNumberValid && isClientIdValid;

    const pastState = Object.assign({}, this.state);
    pastState.title.hasError = !isTitleValid;
    pastState.productSerialNumber.hasError = !isProductSerialNumberValid;
    pastState.clientId.hasError = !isClientIdValid;
    this.setState(pastState);

    return isValid;
  }

  render() {
    const { title, productSerialNumber, clientId, description } = this.state;
    return (
      <Modal open={this.props.open} size='small'>
        <Modal.Header>Create ticket</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input control={Input} label='Title' name='title' onChange={this.onChange} value={title.value} error={title.hasError} required />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input control={Input} label='Product serial number' name='productSerialNumber' onChange={this.onChange} value={productSerialNumber.value} error={productSerialNumber.hasError} required />
              <Form.Input control={Input} label='Client' name='clientId' onChange={this.onChange} value={clientId.value} error={clientId.hasError} required />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.TextArea label='Description' name='description' onChange={this.onChange} value={description.value} />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button content='Cancel' onClick={this.props.onCancel} />
          <Button content='Create' onClick={this.onCreate} positive />
        </Modal.Actions>
      </Modal>
    );
  }
}

CreateTicketByAgentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CreateTicketByAgentModal;
