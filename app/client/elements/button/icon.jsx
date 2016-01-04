import React from 'react';

class IconButton extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    color: React.PropTypes.string,
    label: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
  }
  static defaultProps = {
    size: '',
    type: '',
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
    if (this.props.label) {
      classes.push('labeled');
    }
    classes.push('icon');
    classes.push('button');

    const className = classes.join(' ');
    const iconClass = this.props.icon + ' icon';
    return (
      <button className={className} onClick={this._handleClick.bind(this)}>
        <i className={iconClass} />
        {this.props.label ? this.props.label : ''}
      </button>
    );
  }
  _handleClick() {
    this.props.onClick();
  }
}

export default IconButton;
