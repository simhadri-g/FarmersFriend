import React from 'react';
import {Text,View,ImageBackground,Dimensions} from 'react-native';
import {Container,Content} from 'native-base';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;


class LoadingPage extends React.Component{


  render(){
    var plantName = this.props.val;
    return(
      <View      style={{flex:1}}>
    <ImageBackground
    source={{uri: "http://192.168.137.40:3000/cucumber.png"}}
    style={{flex:1,
    //resizeMode:'cover'
    height:height,
    width:width}}>


    </ImageBackground>
    </View>


    )
  }
}

export default LoadingPage
