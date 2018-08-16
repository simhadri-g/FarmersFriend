import React from 'react';
import {Text,View,Image} from 'react-native';
import { Container, Header, Content,Input ,Item, Button, Icon} from 'native-base';
import LoadingPage from './Loading';
import Meteor, {createContainer} from 'react-native-meteor';
import PinchZoomView from 'react-native-pinch-zoom-view';
import Croplist from './CropList';

const getSuggestions = (value, plants) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    var filteredArray=[];
    if(inputLength === 0){
         filteredArray=plants;
    }
    else{

        for(i=0; i< plants.length; i++){
            if(plants[i].title.toLowerCase().slice(0, inputLength) === inputValue){
                filteredArray.push(plants[i]);
        }
                //console.log(plants[i].title.toLowerCase().slice(0, inputLength));
                //filteredArray.append[plants[i]]

        }
    }
    return (filteredArray);
};

 class PlantSearch extends React.Component{
   
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        suggestions: [],
        page:1,

      };


 }

  /*addPlant = ()=>{
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
if (filteredArray.length != 0 ){
  console.log("filteredArray not zero")
  this.setState({array:filteredArray});


}

else{
    this.setState({array:plants});
}



  }
  renderBody=()=>{

      if(this.state.page===1)
      {
        return(<Croplist navigation = {this.props.navigation} />);
      }
      else if (this.state.page===2) {
           var image= this.props.Plants;
           console.log('show image '+image._id)
return(
  <Croplist />
			)

      }
      /*else{
        return(<Text>Page Not loaded</Text>)
    }*/

  }

  render(){
    console.log('text'+this.props.Plants);
    console.log("filteredArray not zero on Start")
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
              <Croplist plants= {this.state.array} unfiltered = {this.props.Plants}  navigation = {this.props.navigation} />
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
