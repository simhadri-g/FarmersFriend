import { Meteor } from 'meteor/meteor';
import {PlantName} from '../imports/collections/Plants';
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
    var textPath =  '../../../../../public';
    console.log(textPath)
     var texts = fs.readdirSync(textPath);
     console.log(texts)
//     var txtFile = texts[2]
//     var file = new File(txtFile);
//
//     file.open("r"); // open file with read access
//     var str = "";
//     while (!file.eof) {
//     // read each line of text
//     str += file.readln() + "\n";
//     }
//     file.close();
//
// console.log(str)
    return PlantName.insert({text:texts[0]})
  }
});
