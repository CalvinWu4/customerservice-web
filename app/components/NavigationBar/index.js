/**
*
* NavigationBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar, Segment, Menu, Icon, Dropdown } from 'semantic-ui-react';


class NavigationBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen,
    });
  }

  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.state.isSidebarOpen} icon='labeled' vertical inverted>
          <Menu.Item name='tickets' onClick={() => this.props.redirectTo('/tickets')}>
            <Icon name='ticket' />
            Tickets
          </Menu.Item>
          <Menu.Item name='Clients' onClick={() => this.props.redirectTo('/clients')}>
            <Icon name='users' />
            Clients
          </Menu.Item>
          <Menu.Item name='Reviews' onClick={() => this.props.redirectTo('/reviews')}>
            <Icon name='thumbs outline up' />
            My reviews
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Menu color='orange' size='huge' className='borderless' style={{ borderRadius: '0px' }} inverted>
            <Menu.Item onClick={this.toggleSidebar}>
              <Icon name='sidebar' />
            </Menu.Item>
            <Menu.Menu position='right'>
              <Dropdown item text='Camilo Gonzalez'>
                <Dropdown.Menu>
                  <Dropdown.Item>My profile</Dropdown.Item>
                  <Dropdown.Item onClick={() => this.props.redirectTo('/')}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
          <Segment basic>
            { this.props.children }
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

NavigationBar.propTypes = {
  redirectTo: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default NavigationBar;
