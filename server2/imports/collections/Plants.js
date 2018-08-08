import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const PlantName = new Mongo.Collection('Plants');

Meteor.publish('Plants',()=>{
return PlantName.find({});
});
