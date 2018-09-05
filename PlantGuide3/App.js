import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/SignIn';
import Meteor ,{createContainer,Accounts} from 'react-native-meteor';
//import PlantSearch from './src/PlantSearch';
import NavigationPage from './src/NavigationPage';

const SERVER_URL='ws://192.168.43.175:3000/websocket';

export default class App extends React.Component{
  state={
    loggedIn : false
  }

  componentWillMount(){
    Meteor.connect(SERVER_URL);
    console.log('user id'+Meteor.userId())
    if (Meteor.userId()){
      this.flipTo(true)

    }

  }

  flipTo=(x)=>{
    console.log('bool'+x)
    this.setState({loggedIn:x});
  }


  signIn=(email,password)=>{
  Meteor.loginWithPassword(email,password,(error,data)=>{
      console.log(email);
    if(error){
      console.log(error);
      if(error.reason === 'User not found'){
        console.log('There was no record found, creating new user');
        Accounts.createUser({email,password},(error)=>{
          console.log(error);
        })
      }
    }
    else{
      console.log('user found');
      this.setState({loggedIn:true});

    }

  });
  //console.log(Meteor.userId())
  }
  renderView=()=>{
    if(!this.state.loggedIn){
      return(<SignIn signIn={this.signIn}/>)
    }
    else{
      return(<NavigationPage/>)
    }
  }

  render() {

    return (
      <View style={styles.container}>
          {this.renderView()}
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:24
    },
  });
