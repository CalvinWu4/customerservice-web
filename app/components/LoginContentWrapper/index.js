/**
*
* LoginContentWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Container,
  Menu,
  Icon,
} from 'semantic-ui-react';

class LoginContentWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Menu inverted size='large' color='orange' className='borderless'>
          <Container>
            <Menu.Item style={{ fontFamily: 'aileronbold_italic', fontSize: '1.2em' }} onClick={this.props.goHome}><Icon name='angle left' style={{ marginRight: '0px', paddingRight: '0px' }} />KennUWare</Menu.Item>
            <Menu.Item position='right'>
              <Button as='a' onClick={this.props.goSignup} inverted>Sign up</Button>
            </Menu.Item>
          </Container>
        </Menu>
        { this.props.children }
      </div>
    );
  }
}

LoginContentWrapper.propTypes = {
  children: PropTypes.node,
  goHome: PropTypes.func.isRequired,
  goSignup: PropTypes.func.isRequired,
};

export default LoginContentWrapper;
