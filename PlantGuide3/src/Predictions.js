import React from 'react';
import {View, Text} from 'react-native';
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
  render(){
    {
    return (
      <Container>
        <Header>
            <Body>
                <Text style={{color:'#fff',fontSize:30}}>Enter Soil Data</Text>
            </Body>
        </Header>
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
          <Button
          onPress={this.handlePrediction}
          title="Submit"
          />
        </Content>
      </Container>
    );
  }
  }
}

export default PredictionsScreen;
