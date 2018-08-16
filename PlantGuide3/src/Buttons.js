import React, { Component } from 'react';
import { Container, Header, Content, Button,Title,Body } from 'native-base';
import {Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PlantSearch from './PlantSearch';
import PredictionsScreen from './Predictions';
import SellingScreen from './Selling';
import Croplist from './CropList';
import CropDetails from './cropDetails';
import PredictedCrop from './PredictedOutput';


import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';

const PredictionsStack = createStackNavigator({
  Predictions: PredictionsScreen,
  PredictionOutputScreen: PredictedCrop

});

const CroplistStack = createStackNavigator({
  CropDirectory: Croplist,
  CropDirDetails:CropDetails,

});

const TabNav = createBottomTabNavigator(
  {
  //ButtonsScreen: { screen:RootStack},
  Predictions:{ screen: PredictionsStack},
  PlantFindScreen: { screen: PlantSearch},
  Selling:{screen:SellingScreen},
  CropDirectory: {screen:CroplistStack}

},
{
navigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === 'CropDirectory') {
      iconName = `ios-navigate${focused ? '' : '-outline'}`;
    }
   else if (routeName === 'PlantFindScreen') {
      iconName = `ios-search${focused ? '' : '-outline'}`;
    }
    else if (routeName === 'Predictions') {
      iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    }else if (routeName === 'Selling') {
      iconName = `ios-pricetag${focused ? '' : '-outline'}`;
    }

    return <Ionicons name={iconName} size={25} color={tintColor} />;
  },
}),

tabBarOptions: {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
},
animationEnabled: false,
swipeEnabled: false,
}
// }
);



export default class App extends React.Component{
  render(){
    return(<TabNav/>);
  }
}
