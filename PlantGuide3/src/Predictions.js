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
    title: 'SOIL NATURE',
    headerStyle: {

      backgroundColor: '#1B5E20',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {

      fontWeight: 'bold',
    },
  };
  handlePrediction = () => {
      console.log('prediction');

      const { AvMoisture, nitrogen, phosphorus, potassium,  AvDryMatter} = this.state;
      const parameters={AvMoisture,  nitrogen,phosphorus, potassium,  AvDryMatter,} ;
      Meteor.call('Predictions.addOne',parameters, (err,res)=>{
        console.log(res);
        this.props.navigation.navigate('PredictionOutputScreen',{
          id:res,

        });
      });

      //console.log('id',id);

      console.log(AvMoisture);
      console.log(AvDryMatter);
      console.log(nitrogen);
      console.log(potassium);
      console.log(phosphorus);

  }
  render(){
    {
    return (
      <Container >



        <Content>

          <Text  style={{'color':'red','fontSize':20, 'fontWeight':'bold','margin':10}}> Plese enter the soil details below :</Text>
          <Form>
            <Item floatingLabel>
              <Label>Moisture %</Label>
              <Input onChangeText={(AvMoisture) => this.setState({ AvMoisture })}/>
            </Item>



            <Item floatingLabel last>
              <Label>Nitrogen %</Label>
              <Input onChangeText={(nitrogen) => this.setState({ nitrogen })}/>
            </Item>

            <Item floatingLabel last>
              <Label> Phosphorus % </Label>
              <Input onChangeText={(phosphorus) => this.setState({ phosphorus })}/>
            </Item>

            <Item floatingLabel last>
              <Label> Potassium % </Label>
              <Input onChangeText={(potassium) => this.setState({ potassium })}/>
            </Item>



            <Item floatingLabel last>
              <Label>Dry Matter% </Label>
              <Input onChangeText={(AvDryMatter) => this.setState({ AvDryMatter })}/>
            </Item>

          </Form>

          <Button primary rounded block style = {{margin:10,'backgroundColor':'#1B5E20'}}
          onPress={this.handlePrediction}>
          <Text style={{color:'#fff','fontSize':15}}>
          Submit</Text>

          </Button>

          <Text  style={{'color':'blue','fontSize':20,'fontWeight':'bold','margin':10}}> Instructions :</Text>
          <Text style={{'color':'#000','fontSize':15,'margin':10}}>   Enter the the values of :{'\n'} {'\n'}
          1) Average soil moisture % {'\n'}
          2) Average Nitrogen (N) % {'\n'}
          3) Average Phosphorus (P) % {'\n'}
          4) Average Postassium (K) % {'\n'}
          5) Average Dry matter % {'\n'} {'\n'}
          obtained from the soil  test and hit submit to get crop prediction. </Text>



        </Content>
      </Container>
    );
  }
  }
}

export default PredictionsScreen;
