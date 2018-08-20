import { Meteor } from 'meteor/meteor';
import  AccountsServer  from 'meteor/accounts-base';
import {Plants} from '../imports/collections/Plants';
import {Results} from '../imports/collections/results';
import {Predictions} from '../imports/collections/predictions';
import { HTTP } from 'meteor/http';
var fs = Npm.require("fs");


Meteor.startup(() => {
  // code to run on server at startup
  console.log('hello this is our console '+process.env.PWD)
});
Predictions.after.insert(function(userId, doc) {
    //Meteor.http.get("http://127.0.0.1:5000/test");
    console.log('hooks');
    console.log("docs",doc);
    var result = HTTP.call('GET','http://127.0.0.1:5000/',{params: {parameters:doc.parameters } });
    result = result.content;
    var valu = result.split('"');
    console.log("result",valu[1],valu[3])
    const yeild=valu[1];
    const crop=valu[3];
    const result_pred={yeild,crop};
    const predictionId=doc._id ;
    Results.insert({ predictionId,result_pred });


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
    //  Predictions.insert({ parameters,userId });
    const id=Predictions.insert({ parameters,userId });
    return(id);

  },
});
