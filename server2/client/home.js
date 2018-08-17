import React from 'react';
import {history} from '../imports/startup/client/routes';
import {Meteor} from 'meteor/meteor';
//import {insertFeedbacks} from '../../api/feedbacks/methods'

var value =null;
var title=null;
var price=null;
export class Home extends React.Component {
    constructor(props) {
    super(props);

    this.state ={
      value,
      title,
      price
    }
  }
  createFeedback(event) {
    // Becaus the test cannot get event argument
    // so call preventDefault() on undefined cause an error
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    //const userId =Meteor.userId();
    const { contentRef,titleRef, priceRef} = this.refs;
    const content =contentRef.value ;
    const title= titleRef.value ;
    const price= priceRef.value;
    const plant={title,content,price};
    Meteor.call('Plants.add',plant, ()=>{
    });
    console.log(content);
    location.reload();
    //const feedback = {userId ,content}
    /*insertFeedbacks.call({
      feedback
  });*/

    /*this.setState({value:''});
    this.setState({title:''});
    */


  }

  render() {
    return (
      <form className="new-plant" onSubmit={this.createFeedback.bind(this)}>
      <p><b>ADD CROP</b></p>
        <textarea className='text-title' ref="titleRef" value={this.state.title} placeholder="Enter the title" /> <br/>
        <textarea className='text-title' ref="priceRef" value={this.state.price} placeholder="Enter the price" /> <br/>
        <textarea className='text-area' ref="contentRef" value={this.state.value} placeholder="Enter the details of the crop" /> <br/>
        <button type="submit">Add Crop</button>
      </form>
    );
  }
}
