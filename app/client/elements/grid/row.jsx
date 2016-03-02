import React from 'react';

class GridRow extends React.Component {
  static propTypes = {
    columnSize: React.PropTypes.string,
    children: React.PropTypes.any,
  }
  render() {
    let classes = [];
    if (this.props.columnSize) {
      classes.push(this.props.columnSize);
      classes.push('column');
    }
    classes.push('row');

    const className = classes.join(' ');

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

export default GridRow;
