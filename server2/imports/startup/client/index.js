
import './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
//[project]/imports/startup/client/force_www_redirect.js
import { Meteor } from 'meteor/meteor'

/*Meteor.startup(function () {
    if (location.host.indexOf('www.wepeoples.com') !== 0) {
        location = 'http://www.wepeoples.com'
    }
})*/
