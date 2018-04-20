/**
*
* HomepageContentWrapper
*
*/

import React from 'react';
import propTypes from 'prop-types';

import HomepageHeading from 'components/HomepageHeading';

import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';

class HomepageContentWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      fixed: false,
    };

    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
  }

  hideFixedMenu() {
    this.setState({ fixed: false });
  }

  showFixedMenu() {
    this.setState({ fixed: true });
  }

  render() {
    const { fixed } = this.state;

    return (
      <span >
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 700, paddingTop: '0px', paddingBottom: '0px' }} vertical>
            <div style={{ width: '100%', height: '100vh' }} className='freshColorAnimiation'>
              <Menu inverted={!fixed} pointing={!fixed} secondary={!fixed} size='large' style={{ borderBottom: '0px', borderTop: '0px' }}>
                <Container style={{ marginTop: '0px' }}>
                  <Menu.Item active disabled>Customer Support</Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed} onClick={this.props.goLogin}>Log in</Button>
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Container>
              </Menu>
              <div style={{ paddingTop: '5%' }}>
                <HomepageHeading goLogin={this.props.goLogin} />
              </div>
            </div>
          </Segment>
        </Visibility>
        {this.props.children}
      </span>
    );
  }
}

HomepageContentWrapper.propTypes = {
  children: propTypes.node,
  goLogin: propTypes.func.isRequired,
};

export default HomepageContentWrapper;
