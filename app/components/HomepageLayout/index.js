/**
*
* HomepageLayout
*
*/

import React from 'react';

import kennuwareWatches from 'images/kennuware-watches.png';
import tcImage from 'images/tc.png';
import wiredImage from 'images/wired.png';

import {
  Container,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';


class HomepageLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Look and feel for everyone</Header>
                <p style={{ fontSize: '1.33em' }}>
                  A KennUWare device can pimp your style from 0 to 100 real quick guaranteed or your money back.
                  With our limited choices of color, you are sure not to find the right device for you.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Nothing out there compares to our tech</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We literally copy apple watches, so there is aboslutelty no way they can be better or worst then us. High tech made easy.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={8}>
                <Image
                  centered
                  size='medium'
                  style={{ width: '400px' }}
                  src={kennuwareWatches}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>&quot;Literally the next big thing.&quot;</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <img alt='TechCrunch logo' src={tcImage} style={{ width: '150px' }} />
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>&quot;Top-notch customer service right here.&quot;</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <img alt='Wired logo' src={wiredImage} style={{ width: '100px' }} />
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>We wear KenUWare, can you?</Header>
                  <p>For deals and special offers, please call 1-(800)-376-1567</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

HomepageLayout.propTypes = {

};

export default HomepageLayout;
