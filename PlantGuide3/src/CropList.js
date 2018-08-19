import React from 'react';
import {Text,View} from 'react-native';
import {Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button } from 'native-base';

var pic = require('../assets/icons/landing.jpeg');

class Croplist extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false

    };
  }


  componentDidMount(){
    this.listArray()
 }

listArray=()=>{
  if(this.props.plants===undefined){
    console.log("In listArray  when empty")
    return(this.props.unfiltered);
  }
  else{
    console.log("In listArray  when not empty")
  return(this.props.plants);
  }
}



  render(){
    //  console.log("the CropList :",this.props);
      //console.log("the CropList 2:",this.props.plants);
       //console.log("the CropList unfiltered:",this.props.unfiltered);

//console.log("user data",this.state.data)
  return(

    <Container>

       <Content>
         <List  dataArray= {this.listArray()}
         renderRow={
           (item)=>
           <ListItem   >

             <Body>
               <Text style={{'fontSize':20,'fontWeight':'bold'}}>{item.title} </Text>
               <Text style={{'fontSize':15,'color':'#ff0000'}} note numberOfLines={2}>Market price: {item.price} </Text>
             </Body>
             <Right>
               <Button rounded block style={{'backgroundColor':'#1B5E20'}} onPress={() => this.props.navigation.navigate('CropDirDetails',{
                 title:item.title,
                 price:item.price,
                 content:item.content
               })}>
                 <Text style={{color:'white'}}>View </Text>
               </Button>
             </Right>


           </ListItem>
         }>

         </List>
       </Content>
     </Container>
  );
  }
  }

  export default Croplist;
