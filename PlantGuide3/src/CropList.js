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
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
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
            data: page === 1 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null,
            loading: false,
            refreshing: false
          });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    };





  render(){
      console.log(this.props);
  return(
    <Container>
       <Header>
            <Body>
                <Text style={{color:'white'}}> Need to replace the json objects once we get json object for each crop </Text>
            </Body>
       </Header >
       <Content>
         <List  dataArray={this.props.plants}
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
           </ListItem>
         }>

         </List>
       </Content>
     </Container>
  );
  }
  }

  export default Croplist;
