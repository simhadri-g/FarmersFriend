import React from 'react';
import {Text, View} from 'react-native';
import {Container,Content} from 'native-base';
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
      <Container>
        <Content>
            <Text> predictions page   </Text>
            <Text style={{'fontSize':20,'fontWeight':'bold','margin':10}}> Based on the soil details entered the Decision tree recommends the following crop for maximum yield:</Text>
            <Text style={{'color':'brown','fontSize':30,'fontWeight':'bold','margin':20}}> Display crop here</Text>
            <Text  style={{'color':'blue','fontSize':15,'fontWeight':'bold','margin':10}}> How it works</Text>
            <Text style={{'color':'gray','fontSize':15,'margin':10}}>   The machine learing model based on decision tree, takes in the Average soil moisture, Dry matter and NPK values in % as input and determines
            the crop that yields maxium yield for the given soil conditions.   </Text>
        </Content>
      </Container>
    );
  }
}


export default PredictedCrop;
