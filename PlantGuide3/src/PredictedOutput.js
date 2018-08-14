import React from 'react';
import {Text, View} from 'react-native';

class PredictedCrop extends React.Component{
  
  static navigationOptions = {
    title: 'Predicted Crops',
    headerStyle: {

      backgroundColor: '#f4511e',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {

      fontWeight: 'bold',
    },
  };

  render(){
    return (
      <View>
            <Text> predictions page   </Text>
      </View>
    );
  }
}


export default PredictedCrop;
