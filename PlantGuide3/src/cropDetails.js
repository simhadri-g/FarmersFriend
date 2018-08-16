import React from 'react';
import {Text,View} from 'react-native';

class CropDetails extends React.Component{
  render(){

    const { navigation } = this.props;
   const userName = navigation.getParam('userName', 'NO-ID');
   const email = navigation.getParam('email', 'some default value');

    return(
      <View>
            <Text>
                    crop details will appear here
            </Text>
            <Text>itemId: {JSON.stringify(userName)}</Text>
       <Text>otherParam: {JSON.stringify(email)}</Text>
      </View>
    );
  }
}

export default CropDetails;
