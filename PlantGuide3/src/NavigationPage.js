import React from 'react';
import {Text,View} from 'react-native';
import { Container, Header, Content, Button ,Title,Body} from 'native-base';
import App from './Buttons';
import PlantSearch from './PlantSearch';
class NavigationPage extends React.Component{

  state = {
    screenNum : 0

  }



renderBody=()=>{
  switch (this.state.screenNum) {
    case 0:
            return (<App/>)
            break;
    case 1:
      return(<PlantSearch/>)
      break;
    default:
      return(<PlantSearch />)

  }
}
  render(){


    return(
      <View style = {{flex:1,flexDirection:'row'}}>
          {this.renderBody()}

      </View>
    )
  }
}

export default NavigationPage;
