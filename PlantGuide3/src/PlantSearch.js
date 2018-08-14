import React from 'react';
import {Text,View,Image} from 'react-native';
import { Container, Header, Content,Input ,Item, Button, Icon} from 'native-base';
import LoadingPage from './Loading';
import Meteor, {createContainer} from 'react-native-meteor';
import PinchZoomView from 'react-native-pinch-zoom-view';
import Croplist from './CropList';

<<<<<<< HEAD
class PlantSearch extends React.Component{
  state={
    plantSearch:"",
    val:"",
    page:1

  }
  addPlant = ()=>{
=======
const getSuggestions = (value, plants) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    console.log(inputValue);
    return inputLength === 0 ? plants : plants.filter(plant =>
   plant.title.toLowerCase().slice(0, inputLength) === inputValue);
};

 class PlantSearch extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        suggestions: [],
        page:1
      };


 }
  /*addPlant = ()=>{
>>>>>>> 790c2212ab2e9f6393d0ec40b8025c89a112ab3b
    console.log('i do not knonw if its calling');
		Meteor.call('Plants.add',this.state.val, (err,res)=>{
			console.log('add function', err,res);
		})
	}*/

  searchPlant=()=>{
    /*var name = this.state.value;
    var arr = this.state.val;
    arr = name
    this.setState({val:arr})
    console.log(this.state.value);
    this.addPlant();*/
    const value=this.state.value;
    const plants=this.props.Plants;
    const filteredArray = getSuggestions(value,plants);
    console.log(filteredArray);

  }
  renderBody=()=>{

      if(this.state.page===1)
      {
        return(<Croplist  />);
      }
      else if (this.state.page===2) {
           var image= this.props.Plants;
           console.log('show image '+image._id)
return(
  <Croplist  />
<<<<<<< HEAD

=======
>>>>>>> 790c2212ab2e9f6393d0ec40b8025c89a112ab3b
			)

      }
      /*else{
        return(<Text>Page Not loaded</Text>)
    }*/

  }

  render(){
    console.log('text'+this.props.Plants);
    return(

   <View  style={{flex: 1,flexDirection:'row'}}>
   <Container>
          <Header searchBar rounded>
              <Item>
                  <Icon name="ios-search"
                  onPress={this.searchPlant}/>
                  <Input
                  value = {this.state.value}
                  placeholder="Search"
                  onChange={this.searchPlant}
                  onChangeText={(value)=>this.setState({value})}
                   />

              </Item>
              <Button transparent>
                  <Text>Search</Text>
              </Button>
          </Header>
          <Content>
<<<<<<< HEAD
          
              <Text>
                    {this.state.val}
                    //Plant deltails will appear here
              </Text>
              {this.renderBody()}

=======
              {this.renderBody()}
>>>>>>> 790c2212ab2e9f6393d0ec40b8025c89a112ab3b
          </Content>
        </Container>
</View>

    )
  }
}

export default createContainer(params=>{
	Meteor.subscribe('Plants');

	return{
		Plants: Meteor.collection('Plants').find({})
	};
}, PlantSearch);
