import React from 'react';
import {Text,View,ImageBackground,Dimensions,StyleSheet} from 'react-native';
import {Input,Item,Form,Label,Button,Container,Content} from 'native-base';

var pic = require('../assets/icons/landing.jpeg');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;


class SignIn extends React.Component{
  state={
    email:"",
    password:""
  }
  logIn=()=>{
      console.log('button pressed');
      var email = this.state.email;
      var password = this.state.password;

      this.props.signIn(email,password);
  }
  render(){

    return(
      <View
      style={{flex:1}}>
    <ImageBackground
    source={pic}
    style={styles.contain}>

            <Text style ={{fontSize:30,color:'#fff',marginLeft:'30%',fontWeight:'bold'}}>Signin Page</Text>
            <Form>
                  <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                            style={{}}
                            autoCorrect={false}
                            onChangeText={(email)=>this.setState({email})}/>

                  </Item>
                  <Item floatingLabel>
                          <Label>Password</Label>
                          <Input
                          style={{}}
                          autoCorrect={false}
                          onChangeText={(password)=>this.setState({password})}
                          secureTextEntry
                          />

                  </Item>
            </Form>
            <View style={{margin:10}}>
                  <Button
                      primary
                      block
                      onPress={this.logIn}>
                          <Text style={{color:'#fff'}}>Sign In / Sign Up</Text>

                  </Button>
            </View>

    </ImageBackground>
    </View>
    )
  }
}
styles = StyleSheet.create({
  contain:{
    flex:1,
    //resizeMode:'cover'
    height:height,
    width:width
  }
});
export default SignIn;
