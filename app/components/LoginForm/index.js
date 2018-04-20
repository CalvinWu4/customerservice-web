/**
*
* LoginForm
*
*/

import React from 'react';

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';


class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='red' textAlign='center'>
              Login to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                <Button color='red' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New customer? <a>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

LoginForm.propTypes = {

};

export default LoginForm;
