import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Plants = new Mongo.Collection('Plants');

Meteor.publish('Plants',()=>{
return Plants.find({});
});
