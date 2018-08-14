import React from 'react';
import createReactClass from 'create-react-class';
import { Grid } from 'react-bootstrap';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//import ViewPosts from '../pages/view-posts'
//import ViewUsers from '../pages/view-users'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const App = createReactClass({

  render() {
    return (
      <div className='the-boss'>

         <MuiThemeProvider>

          { this.props.children }
         </MuiThemeProvider>
    </div>
    );
  }
});
