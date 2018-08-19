import React from 'react';
import {Text,View} from 'react-native';
import {Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button } from 'native-base';
//import PredictedOutput from './PredictedOutput';
import Meteor, {createContainer} from 'react-native-meteor';

class LoadingResult extends React.Component{

  render()
  { 
    return(
      <Text>nothing</Text>
    );
  }
}

export default createContainer(params=>{


const {navigation} = this.props
//  const id = this.props.navigation;
  console.log("id",{navigtion});

	Meteor.subscribe('Predictions');

	return{
		result: Meteor.collection('Predictions').find({ })
	};
}, LoadingResult);
