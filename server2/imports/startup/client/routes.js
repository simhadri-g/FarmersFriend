import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import { Meteor } from 'meteor/meteor';
import { Home } from '../../../client/home';
import { App } from '../../../client/app';


export const  history = createBrowserHistory()

Meteor.startup(() => {
  render(
      <Router history={history}>
      <Route path="/" component={ Home }/>

    </Router>,
    document.getElementById('react-root')
  );
});
