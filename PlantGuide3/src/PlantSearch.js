import React from 'react';
import {Text,View,Image} from 'react-native';
import { Container, Header, Content,Input ,Item, Button, Icon} from 'native-base';
import LoadingPage from './Loading';
import Meteor, {createContainer} from 'react-native-meteor';
import PinchZoomView from 'react-native-pinch-zoom-view';
import Croplist from './CropList';

class PlantSearch extends React.Component{
  state={
    plantSearch:"",
    val:"",
    page:1

  }
  addPlant = ()=>{
    console.log('i do not knonw if its calling');
		Meteor.call('Plants.add',this.state.val, (err,res)=>{
			console.log('add function', err,res);
		})
	}

  searchPlant=()=>{
    var name = this.state.plantSearch;
    var arr = this.state.val;
    arr = name
    this.setState({val:arr})
    console.log('some data')
    this.addPlant();

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

			)


      }
      else{
        return(<Text>Page Not loaded</Text>)
      }

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
                  value = {this.state.plantSearch}
                  placeholder="Search"
                  onChangeText={(plantSearch)=>this.setState({plantSearch})}
                   />

              </Item>
              <Button transparent>
                  <Text>Search</Text>
              </Button>
          </Header>
          <Content>
          
              <Text>
                    {this.state.val}
                    //Plant deltails will appear here
              </Text>
              {this.renderBody()}

          </Content>
        </Container>
</View>

    )
  }
}

export default createContainer(params=>{
	Meteor.subscribe('Plants');

	return{
		Plants: Meteor.collection('Plants').find({}).length


	};
}, PlantSearch);
