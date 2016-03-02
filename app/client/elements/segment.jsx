import React from 'react';

class Segment extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (
      <div className="ui segment">
        {this.props.children}
      </div>
    );
  }
}

export default Segment;
