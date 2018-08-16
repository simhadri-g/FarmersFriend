import React from 'react';
import {Text,View} from 'react-native';
import {Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button,Item,Input ,Icon} from 'native-base';

var pic = require('../assets/icons/landing.jpeg');

class Croplist extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      fulldata:[],
      query:"",


    };
  }

  componentDidMount(){
    this.makeRemoteRequest();


  }

  makeRemoteRequest = () => {
      const { page, seed } = this.state;
      const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=10`;
      this.setState({ loading: true });

      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            fulldata: page === 1 ? res.results : [...this.state.fulldata, ...res.results],
            data: page === 1 ? res.results : [...this.state.fulldata, ...res.results],
            error: res.error || null,
            loading: false,
            refreshing: false
          });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    };



handelSearch=(text) =>{
  const formatQuery = text.toLowerCase();
  console.log("text query",formatQuery)
const da = this.state.fulldata;
console.log(da)
const result = da.filter(d=>d["email"] == (formatQuery));

  console.log("text",text)
  console.log("result",result)
  this.setState({query:text});
}




  render(){
      console.log(this.props);
  return(
    <Container>
    <Header searchBar rounded>
        <Item>
            <Icon name="ios-search"
            //onPress={this.searchPlant}
            />
            <Input
            value = {this.state.value}
            placeholder="Search"
            //onChange={this.searchPlant}
            onChangeText={this.handelSearch}
             />

        </Item>
        <Button transparent>
            <Text>Search</Text>
        </Button>
    </Header>
       <Content>
<<<<<<< HEAD
         <List  dataArray={this.state.fulldata}
=======
         <List  dataArray={this.props.plants}
>>>>>>> 4d444b1a8c61b3f1c93e1f630db8e3cf1fb275dc
         renderRow={
           (item)=>
           <ListItem thumbnail>
             <Left>
             {item}
               <Text>{item.title}</Text>
             </Left>
             <Body>
               <Text>{item.content} </Text>
             </Body>
<<<<<<< HEAD
             <Right>
               <Button rounded block backgroundColor='gray' onPress = {() => this.props.navigation.navigate('CropDirDetails',{
                 userName: item.name.first,
                 email:item.email

               })}>
                 <Text style={{color:'white'}}>View</Text>
               </Button>
             </Right>
=======
>>>>>>> 4d444b1a8c61b3f1c93e1f630db8e3cf1fb275dc
           </ListItem>
         }>

         </List>
       </Content>
     </Container>
  );
  }
  }

  export default Croplist;
