import React from 'react';
import {Text, View} from 'react-native';
import {Container,Content} from 'native-base';
import Meteor, {createContainer} from 'react-native-meteor';

import LoadingResult from './LoadResult';

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

    stringHandel = (b) =>{
      if (b === undefined){
        console.log("some thing ",b)
        return(b);
          }
      else{
        var c = b.split('\n');
        console.log('c hahahaha ', c);
        return( b);
      }
    }

    const a = this.props.result[0];
    const b = JSON.stringify(a) ;
    //var c = this.stringHandel(b)
    console.log('the result[0]', typeof(a) );
     //const b = a.getParam('result','NA');

     console.log('the result[0]', typeof(b) );
//console.log('the result',b );
  //    const c = b.split("\n");
//console.log('the dxa',c);
//console.log('the result[0]', this.props.result[0].result);

    return (
      <Container>
        <Content>

            <Text style={{'fontSize':20,'fontWeight':'bold','margin':10}}> Based on the soil details entered the Decision tree recommends the following crop for maximum yield:</Text>
            <Text style={{'color':'brown','fontSize':30,'fontWeight':'bold','margin':20}}> {b} </Text>
            <Text  style={{'color':'blue','fontSize':15,'fontWeight':'bold','margin':10}}> How it works :</Text>
            <Text style={{'color':'gray','fontSize':15,'margin':10}}>   The machine learing model based on decision tree, takes in the Average soil moisture, Dry matter and NPK values in % as input and determines
            the crop that yields maxium yield for the given soil conditions.   </Text>
        </Content>
      </Container>
    );
  }
}



export default createContainer(params=>{


const id =params.navigation.state.params.id;
//  const id = this.props.navigation;
  console.log("id params",params);
console.log('id',params.navigation.state.params.id );
//   const { navigation } = this.props;
//  //const id = navigation.getParam('id', 'Not loaded');
// console.log("predict out",navigation.getParam('id'));

	Meteor.subscribe('Predictions');

	return{
		result: Meteor.collection('Predictions').find({_id: id })
	};
}, PredictedCrop);
