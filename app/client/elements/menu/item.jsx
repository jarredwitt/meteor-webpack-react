import React from 'react';

class Item extends React.Component {
  static propTypes = {
    actionValue: React.PropTypes.string,
    name: React.PropTypes.string,
    children: React.PropTypes.any,
    action: React.PropTypes.func,
  }
  render() {
    return (
      <a className="item" onClick={this._handleItemClick.bind(this, this.props.actionValue)}>{this.props.name}{this.props.children ? this.props.children : null}</a>
    );
  }
  _handleItemClick(v) {
    this.props.action(v);
  }
}

export default Item;
