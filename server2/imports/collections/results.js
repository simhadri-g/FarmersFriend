import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Results = new Mongo.Collection('Results');

Meteor.publish('Results',()=>{
return Results.find({});
});
