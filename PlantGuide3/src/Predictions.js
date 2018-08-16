import React from 'react';
import {View, Text,TextInput} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label ,Body,Button} from 'native-base';
import Meteor, {createContainer} from 'react-native-meteor';

class PredictionsScreen extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      AvMoisture: '',
      AvDryMatter: '',
      nitrogen: '',
      potassium: '',
      phosphorus: '',
    };
  }
  static navigationOptions = {
    title: 'Enter soil details',
    headerStyle: {

      backgroundColor: '#f4511e',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {

      fontWeight: 'bold',
    },
  };
  handlePrediction = () => {
      console.log('prediction');

      const { AvMoisture, AvDryMatter, nitrogen, potassium, phosphorus } = this.state;
      const parameters={AvMoisture, AvDryMatter, nitrogen, potassium, phosphorus} ;

      Meteor.call('Predictions.addOne',parameters, ()=>{
      });
      console.log(AvMoisture);
      console.log(AvDryMatter);
      console.log(nitrogen);
      console.log(potassium);
      console.log(phosphorus);

  }
  render(){
    {
    return (
      <Container>



        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Moisture %</Label>
              <Input onChangeText={(AvMoisture) => this.setState({ AvMoisture })}/>
            </Item>

            <Item floatingLabel last>
              <Label>Dry Matter% </Label>
              <Input onChangeText={(AvDryMatter) => this.setState({ AvDryMatter })}/>
            </Item>

            <Item floatingLabel last>
              <Label>Nitrogen %</Label>
              <Input onChangeText={(nitrogen) => this.setState({ nitrogen })}/>
            </Item>

            <Item floatingLabel last>
              <Label> Potassium % </Label>
              <Input onChangeText={(potassium) => this.setState({ potassium })}/>
            </Item>

            <Item floatingLabel last>
              <Label> Phosphorus % </Label>
              <Input onChangeText={(phosphorus) => this.setState({ phosphorus })}/>
            </Item>
          </Form>

          <Button primary rounded block style = {{margin:10}}
          onPress={this.handlePrediction}>
          <Text style={{color:'#fff'}}>
          Submit</Text>

          </Button>

          <Button primary rounded block style = {{margin:10}}
          onPress = {() => this.props.navigation.navigate('PredictionOutputScreen')}

          >
                <Text style={{color:'#fff'}}> Get results </Text>
          </Button>



        </Content>
      </Container>
    );
  }
  }
}

export default PredictionsScreen;
