import React from 'react';
import {Text, View,Image} from 'react-native';
import {Container,Content} from 'native-base';
import Meteor, {createContainer} from 'react-native-meteor';

import LoadingResult from './LoadResult';
var pic2 = require('../assets/icons/appIcon.png');

class PredictedCrop extends React.Component{

  componentDidMount(){
    this.resArr()
 }


  


  resArr=()=>{
    if(this.props.result[0]===undefined){
      console.log("In listArray  when empty")
      return('nothing to display')
    }
    else{
      console.log("In listArray  when not empty")
    return(this.props.result[0].result_pred);
    }
  }

  render(){

    var result = this.resArr()
    //var c = this.stringHandel(b)
    console.log('the result[0]',result);
     //const b = a.getParam('result','NA');

     //console.log('the result[0]', typeof(b) );
//console.log('the result',b );
  //    const c = b.split("\n");
//console.log('the dxa',c);
//console.log('the result[0]', this.props.result[0].result);

    return (
      <Container>
        <Content>

            <Text style={{'fontSize':20,'fontWeight':'bold','margin':10}}> Based on the soil details entered the Decision tree recommends the following crop for maximum yield:</Text>
            <Text style={{'color':'brown','fontSize':30,'fontWeight':'bold','margin':20}}> Crop prediction: {result.crop}  </Text>
            <Text style={{'color':'brown','fontSize':30,'fontWeight':'bold','margin':20}}> Appox. Previous years yield/hectare in tonnes/lbs: {result.yeild} </Text>
            <Text  style={{'color':'blue','fontSize':15,'fontWeight':'bold','margin':10}}> How it works :</Text>
            <Text style={{'color':'gray','fontSize':15,'margin':10}}>   The machine learing model based on decision tree, takes in the Average soil moisture, Dry matter and NPK values in % as input and determines
            the crop that yields maxium yield for the given soil conditions.   </Text>
            <Image source={pic2} style={{width:'100%',height:400}}/>
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

	Meteor.subscribe('Results');

	return{
		result: Meteor.collection('Results').find({predictionId: id })
	};
}, PredictedCrop);
