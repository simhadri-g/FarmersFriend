import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Predictions = new Mongo.Collection('Predictions');

Meteor.publish('Predictions',()=>{
return Predictions.find({});
});
