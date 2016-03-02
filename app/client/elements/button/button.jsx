import React from 'react';

class Button extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    size: React.PropTypes.string,
    color: React.PropTypes.string,
    type: React.PropTypes.string,
    label: React.PropTypes.string,
    onClick: React.PropTypes.func,
  }
  static defaultProps = {
    size: '',
    type: 'basic',
    color: '',
  }
  render() {
    let classes = ['ui'];
    if (this.props.active) {
      classes.push('active');
    }
    classes.push(this.props.size);
    classes.push(this.props.color);
    classes.push(this.props.type);
    classes.push('button');

    const className = classes.join(' ');

    return (
      <button className={className} onClick={this._handleClick.bind(this)}>{this.props.label}</button>
    );
  }
  _handleClick() {
    this.props.onClick();
  }
}

export default Button;
