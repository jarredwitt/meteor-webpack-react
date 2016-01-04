import React from 'react';

import { App } from '../components';

class AppView extends React.Component {
  render() {
    return (
      <div>
        <div>I am from the app view</div>
        <App />
      </div>
    );
  }
}

export default AppView;
