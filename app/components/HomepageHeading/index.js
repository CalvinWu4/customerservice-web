/**
*
* HomepageHeading
*
*/

import React from 'react';

import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

class HomepageHeading extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container text>
        <Header as='h1' content='KennUWare' inverted style={{ fontFamily: 'aileronbold_italic', fontSize: '4em', fontWeight: 'normal', paddingBottom: '0px', marginBottom: '0em', marginTop: '3em' }} />
        <Header as='p' content='Mobile computing made easy. Seriously.' inverted style={{ fontSize: '1.25em', fontWeight: 'normal', marginTop: '0em', marginBottom: '2.5em' }} />
        <Button color='orange' style={{ textShadow: '1px 1px 0 #8e4110' }} size='huge'>
          Need help?
          <Icon name='right arrow' />
        </Button>
      </Container>
    );
  }
}

HomepageHeading.propTypes = {

};

export default HomepageHeading;
