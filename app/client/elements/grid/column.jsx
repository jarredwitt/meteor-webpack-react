import React from 'react';

class GridColumn extends React.Component {
  static propTypes = {
    float: React.PropTypes.string,
    size: React.PropTypes.string,
    children: React.PropTypes.array,
  }
  render() {
    let classes = [];
    if (this.props.float) {
      classes.push(this.props.float);
      classes.push('floated');
    }
    classes.push(this.props.size);
    classes.push('wide');
    classes.push('column');

    const className = classes.join(' ');
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

export default GridColumn;
