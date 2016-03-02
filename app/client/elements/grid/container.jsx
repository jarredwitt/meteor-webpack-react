import React from 'react';

class GridContainer extends React.Component {
  static propTypes = {
    stackable: React.PropTypes.bool,
    children: React.PropTypes.any,
  }
  render() {
    let className = 'ui ' + (this.props.stackable ? 'stackable ' : '') + 'grid container';
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

export default GridContainer;
