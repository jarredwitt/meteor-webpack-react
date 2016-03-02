import '../semantic/src/semantic.less';
import 'semantic-ui/dist/semantic.min.js';

import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './client/routes';

Meteor.startup(() => {
  ReactDOM.render(<Routes />, document.getElementById('root'));
});
