import React, { Component } from 'react';
import { Image,Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body } from 'native-base';

class SellingScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
                <Body>
                <Text>
                Selling/Price Platform
                </Text>
                </Body>
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: '../assets/icons/landing.jpeg'}} />
                <Body>
                  <Text>Big Basket</Text>
                  <Text note>August 15, 2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: '../assets/icons/landing.jpeg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>

                  Supposed to be big basket
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>Awesome</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default SellingScreen;
