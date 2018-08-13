import { Meteor } from 'meteor/meteor';
import {Plants} from '../imports/collections/Plants';
import {Predictions} from '../imports/collections/predictions';
var fs = Npm.require("fs");


Meteor.startup(() => {
  // code to run on server at startup
  console.log('hello this is our console '+process.env.PWD)
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
      console.log(parameters);
      Predictions.insert({ parameters });

  },
});
