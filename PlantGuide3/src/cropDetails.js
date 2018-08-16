import React from 'react';
import {Text,View} from 'react-native';

class CropDetails extends React.Component{
  static navigationOptions = {
    title: 'Cultivation guide',
    headerStyle: {

      backgroundColor: '#a4c639',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {

      fontWeight: 'bold',
    },
  };
  render(){

    const { navigation } = this.props;
   const title = navigation.getParam('title', 'NO-ID');
   const content = navigation.getParam('content', 'some default value');


    return(
      <View>
            <Text>
                    crop details will appear here
            </Text>
            <Text>Crops: {JSON.stringify(title)}</Text>
       <Text>Dtails: {JSON.stringify(content)}</Text>
      </View>
    );
  }
}

export default CropDetails;
