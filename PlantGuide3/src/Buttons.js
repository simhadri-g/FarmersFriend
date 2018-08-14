import React, { Component } from 'react';
import { Container, Header, Content, Button,Title,Body } from 'native-base';
import {Text} from 'react-native';
//import { createStackNavigator } from 'react-navigation';
import PlantSearch from './PlantSearch';
import PredictionsScreen from './Predictions';
import SellingScreen from './Selling';
import Croplist from './CropList';
<<<<<<< HEAD
import CropDetails from './cropDetails';
import PredictedCrop from './PredictedOutput';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';

const PredictionsStack = createStackNavigator({
  Predictions: PredictionsScreen,
  PredictionOutputScreen: PredictedCrop

});
=======


import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';


>>>>>>> 790c2212ab2e9f6393d0ec40b8025c89a112ab3b

const TabNav = createBottomTabNavigator(
  {
  //ButtonsScreen: { screen:RootStack},
<<<<<<< HEAD
  Predictions:{ screen: PredictionsStack},
=======
  Predictions:{ screen: PredictionsScreen},
>>>>>>> 790c2212ab2e9f6393d0ec40b8025c89a112ab3b
  PlantFindScreen: { screen: PlantSearch},
  Selling:{screen:SellingScreen},
//  CropDirectory: {screen:Croplist}

},
{
navigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state;
    let iconName;
    // if (routeName === 'CropDirectory') {
    //   iconName = `ios-navigate${focused ? '' : '-outline'}`;
    // }
   if (routeName === 'PlantFindScreen') {
      iconName = `ios-search${focused ? '' : '-outline'}`;
    }
    else if (routeName === 'Predictions') {
      iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    }else if (routeName === 'Selling') {
      iconName = `ios-pricetag${focused ? '' : '-outline'}`;
    }
<<<<<<< HEAD

=======
    // You can return any component that you like here! We usually use an
    // icon component from react-native-vector-icons
>>>>>>> 790c2212ab2e9f6393d0ec40b8025c89a112ab3b
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
