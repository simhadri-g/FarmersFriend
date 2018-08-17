import React from 'react';
import {Text,View} from 'react-native';
import {Container,Content} from 'native-base';

class CropDetails extends React.Component{
  static navigationOptions = {
    title: 'Cultivation guide',
    headerStyle: {

      backgroundColor: '#1B5E20',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {

      fontWeight: 'bold',
    },
  };
  render(){

    const { navigation } = this.props;
   const title = navigation.getParam('title', 'Not loaded');
   const content = navigation.getParam('content', 'check database');
   const price = navigation.getParam('price','N/A');


    return(
      <Container>
        <Content>

            <Text style={{'fontSize':20,'fontWeight':'bold','color':'#000080','margin':5}}> {JSON.parse(JSON.stringify(title))} Farming Guide</Text>
            <Text style={{'fontSize':20,'fontWeight':'bold','color':'#ff0000','margin':5}}> Market Price:{JSON.parse(JSON.stringify(price))}</Text>
            <Text style={{'fontSize':15,'fontWeight':'bold','margin':5}}> Details:{JSON.parse(JSON.stringify(content))}</Text>
       </Content>
      </Container>
    );
  }
}

export default CropDetails;
