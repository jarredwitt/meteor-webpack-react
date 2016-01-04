import React from 'react';

import { AppView } from '../views';

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        I am from the app root container
        <AppView />
      </div>
    );
  }
}

export default AppContainer;
