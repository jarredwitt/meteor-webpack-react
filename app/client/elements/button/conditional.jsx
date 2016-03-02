import React from 'react';

class ConditionalButton extends React.Component {
  static propTypes = {
    positiveLabel: React.PropTypes.string.isRequired,
    negativeLabel: React.PropTypes.string.isRequired,
    onPositiveClick: React.PropTypes.func.isRequired,
    onNegativeClick: React.PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className="right floated ui buttons">
        <button className="ui positive button" onClick={this._handlePositiveClick.bind(this)}>{this.props.positiveLabel}</button>
        <div className="or"></div>
        <button className="ui button" onClick={this._handleNegativeClick.bind(this)}>{this.props.negativeLabel}</button>
      </div>
    );
  }
  _handlePositiveClick() {
    this.props.onPositiveClick();
  }
  _handleNegativeClick() {
    this.props.onNegativeClick();
  }
}

export default ConditionalButton;
