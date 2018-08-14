import React from 'react';
import {View, Text} from 'react-native';
<<<<<<< HEAD
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

=======
import { Button } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Body} from 'native-base';
import Meteor, {createContainer} from 'react-native-meteor';

class PredictionsScreen extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      soilType: '',
      pH: '',
      nitrogen: '',
      potassium: '',
      phosphorous: '',
    };
  }
  handlePrediction = () => {
      console.log('prediction');
      const { soilType, pH, nitrogen, potassium, phosphorous } = this.state;
      const parameters={soilType, pH, nitrogen, potassium, phosphorous} ;
      Meteor.call('Predictions.addOne',parameters, ()=>{
      });
      console.log(soilType);
      console.log(pH);
      console.log(nitrogen);
      console.log(potassium);
      console.log(phosphorous);

  }
>>>>>>> 790c2212ab2e9f6393d0ec40b8025c89a112ab3b
  render(){
    {
    return (
      <Container>



        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Soil type</Label>
              <Input onChangeText={(soilType) => this.setState({ soilType })}/>
            </Item>

            <Item floatingLabel last>
              <Label>pH </Label>
              <Input onChangeText={(pH) => this.setState({ pH })}/>
            </Item>

            <Item floatingLabel last>
              <Label>Nitrogen %</Label>
              <Input onChangeText={(nitrogen) => this.setState({ nitrogen })}/>
            </Item>

            <Item floatingLabel last>
              <Label>Potassium % </Label>
              <Input onChangeText={(potassium) => this.setState({ potassium })}/>
            </Item>

            <Item floatingLabel last>
              <Label>Phosphorous % </Label>
              <Input onChangeText={(phosphorous) => this.setState({ phosphorous })}/>
            </Item>
          </Form>
<<<<<<< HEAD
          <Button primary rounded block style = {{margin:10}}
          onPress = {() => this.props.navigation.navigate('PredictionOutputScreen')}

          >
                <Text style={{color:'#fff'}}> Submit </Text>
          </Button>
=======
          <Button
          onPress={this.handlePrediction}
          title="Submit"
          />
>>>>>>> 790c2212ab2e9f6393d0ec40b8025c89a112ab3b
        </Content>
      </Container>
    );
  }
  }
}

export default PredictionsScreen;
