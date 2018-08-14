import React from 'react';
import {View, Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Button,Body} from 'native-base';
//import { navigationOptions } from 'react-navigation';

class PredictionsScreen extends React.Component{

  static navigationOptions = {
    title: 'Enter Soil Data',
    headerStyle: {

      backgroundColor: '#f4511e',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {

      fontWeight: 'bold',
    },
  };

  /* render function, etc */

  render(){
    {
    return (
      <Container>



        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Soil type</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>pH </Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Nitrogen %</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Potassium % </Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Phosphorous % </Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Location </Label>
              <Input />
            </Item>

          </Form>
          <Button primary rounded block style = {{margin:10}}
          onPress = {() => this.props.navigation.navigate('PredictionOutputScreen')}

          >
                <Text style={{color:'#fff'}}> Submit </Text>
          </Button>
        </Content>
      </Container>
    );
  }
  }
}

export default PredictionsScreen;
