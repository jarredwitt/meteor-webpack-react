import React from 'react';

class Pusher extends React.Component {
  static propTypes = {
    id: React.PropTypes.number,
    children: React.PropTypes.array,
  }
  render() {
    return (
      <div className="pusher" id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

export default Pusher;
