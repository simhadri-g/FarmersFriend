import React, { Component } from 'react';
import { Image,Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body } from 'native-base';

var pic = require('../assets/icons/landing.jpeg');
var bBazar = require('../assets/icons/bigBazar.png');
var bBasket = require('../assets/icons/bigBasket.png');
var rFresh= require('../assets/icons/rFresh.png');


class SellingScreen extends Component {
  render() {
    return (
      <Container style={{'backgroundColor':'#F4FF81'}}>
        <Header style={{'backgroundColor':'#1B5E20'}}>
                <Body>
                <Text style={{'color':'#fff','fontSize':25,'fontWeight':'bold'}}>
                Sellers Platform
                </Text>
                </Body>
        </Header>
        <Content>
          <Card style={{flex: 0,'padding':10}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{'fontSize':30,'color':'brown','fontWeight':'bold'}}>Big Basket</Text>
                  <Text note >https://www.bigbasket.com/contact/</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={bBasket} style={{height: 200, width: 200, flex: 1}}/>
                <Text style={{'fontSize':15,'color':'brown','fontWeight':'bold'}}>
                Contact:
                </Text>
                <Text>
                Bangalore:{'\n'}
                # 7, Service Road,{'\n'}
                Off 100 Feet Road Indiranagar{'\n'}
                Landmark: Above HDFC Bank{'\n'}
                Bangalore, Karnataka 560071{'\n'}
                Phone: 1860-123-1000
                </Text>
              </Body>
            </CardItem>

          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{'fontSize':30,'color':'brown','fontWeight':'bold'}}>Reliance fresh</Text>
                  <Text note >https://relianceretail.com/reliance-fresh.html</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={rFresh} style={{height: 200, width: 200, flex: 1}}/>
                <Text style={{'fontSize':15,'color':'brown','fontWeight':'bold'}}>
                Contact:
                </Text>
                <Text>
                Registered Office: {'\n'}
                3 rd Floor, Court House, {'\n'}
                Lokmanya Tilak Marg, Dhobi Talao,{'\n'}
               Mumbai-400 002{'\n'}
               Phone: +91 22 3555 3800{'\n'}
                </Text>
              </Body>
            </CardItem>

          </Card>


          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{'fontSize':30,'color':'brown','fontWeight':'bold'}}>Big Bazar</Text>
                  <Text note >https://www.bigbazaar.com/</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={bBazar} style={{height: 200, width: 200, flex: 1}}/>
                <Text style={{'fontSize':15,'color':'brown','fontWeight':'bold'}}>
                Contact:
                </Text>
                <Text>
                Office Address,{'\n'}
                Big Bazaar, 4 th Floor,{'\n'}
                Tower C, 247 Park, {'\n'}
                LBS Marg, Vikhroli (West),{'\n'}
                Mumbai - 400 083.{'\n'}
                Phone: 1800 200 2255
                </Text>
              </Body>
            </CardItem>

          </Card>
        </Content>
      </Container>
    );
  }
}
export default SellingScreen;
