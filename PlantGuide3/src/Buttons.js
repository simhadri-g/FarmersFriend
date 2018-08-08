import React, { Component } from 'react';
import { Container, Header, Content, Button,Title,Body } from 'native-base';
import {Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PlantSearch from './PlantSearch';
import PredictionsScreen from './Predictions';
import SellingScreen from './Selling';

class LogoTitle extends React.Component {
  render() {
    return (
      <Text style={{flex:1, marginLeft:'30%',alignItems:'center',justifyContent:'center',fontSize:20,color:'#fff'}}>
              Select Screen
      </Text>
    );
  }
}

 class ButtonThemes extends Component {
   // state = {
   //   screenNumber : 0
   //
   // }
   static navigationOptions = {
   // headerTitle instead of title
   headerTitle: <LogoTitle />,
 };

  render() {
    return (
      <Container >

        <Content style = {{margin:10}}>
          <Button success  block  style = {{margin:10}}
           onPress={() => this.props.navigation.navigate('PlantFindScreen')}
          >
                <Text> Plant search </Text>
           </Button>
          <Button primary block style = {{margin:10}}
            onPress={() => this.props.navigation.navigate('Predictions')}
          >
                <Text> Predictions </Text>
          </Button>

          <Button warning block style = {{margin:10}}
          onPress={() => this.props.navigation.navigate('Selling')}
          >
                <Text> Selling </Text>
          </Button>
          <Button info block  style = {{margin:10}}>
                 <Text> Logout </Text>
          </Button>

        </Content>
      </Container>
    );



  }
}

const RootStack = createStackNavigator(
  {
    Buttons: {
      screen: ButtonThemes,
    },
    PlantFindScreen: {
      screen: PlantSearch,
    },
    Predictions:{
      screen: PredictionsScreen,
    },
    Selling:{
      screen:SellingScreen,
    }
    // LogOut:{
    //   screen:
    // }

  },
  {
    initialRouteName: 'Buttons',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#4169E1',
      },

  }}
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
