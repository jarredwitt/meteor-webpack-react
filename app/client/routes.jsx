import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { AppContainer } from './containers';

class Routes extends React.Component {
  render() {
    return (
      <Router histor={browserHistory}>
        <Route path="/" component={AppContainer} />
      </Router>
    );
  }
}

export default Routes;
