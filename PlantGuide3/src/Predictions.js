import React from 'react';
import {View, Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Button,Body} from 'native-base';

class PredictionsScreen extends React.Component{
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
