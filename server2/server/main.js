import { Meteor } from 'meteor/meteor';
import  AccountsServer  from 'meteor/accounts-base';
import {Plants} from '../imports/collections/Plants';
import {Predictions} from '../imports/collections/predictions';
var fs = Npm.require("fs");


Meteor.startup(() => {
  // code to run on server at startup
  console.log('hello this is our console '+process.env.PWD)
});
Predictions.after.insert(function(userId, doc) {
    console.log('hooks');
});
Meteor.methods({
  'Plants.add':function(plant){
    // var user = this.userId;
    // if(!user){
    //   console.log('user not logged in')
    //   return;
    // }
    console.log('adding plant')
    Plants.insert(plant);
  }
});
Meteor.methods({
  'Predictions.addOne': ( parameters ) => {

      const userId= Meteor.userId();
      console.log(parameters,userId);
      Predictions.insert({ parameters,userId });

  },
});
