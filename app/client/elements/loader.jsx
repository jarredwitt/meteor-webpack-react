import React from 'react';

class Loader extends React.Component {
  render() {
    return (
      <div style={{ position: 'fixed', right: 0, left: 0, top: 100, marginLeft: 'auto', marginRight: 'auto', height: 500, width: 500 }}>
        <div className="ui active inverted dimmer">
          <div className="ui large text loader">Loading</div>
        </div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    );
  }
}

export default Loader;
