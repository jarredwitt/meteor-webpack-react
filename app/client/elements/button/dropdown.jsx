import React from 'react';
import ReactDOM from 'react-dom';

class DropdownButton extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    displayKey: React.PropTypes.string,
    valueKey: React.PropTypes.string,
    value: React.PropTypes.string,
    emptyText: React.PropTypes.string,
    selectionEmpty: React.PropTypes.string,
    disabled: React.PropTypes.boolean,
    onSelectionChange: React.PropTypes.func.isRequired,
  }
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).dropdown({
      onChange: this.props.onSelectionChange,
    });
    if (this.props.value) {
      $(ReactDOM.findDOMNode(this)).dropdown('set selected', this.props.value);
    }
  }
  componentDidUpdate() {
    if (this.props.selectionEmpty === true) {
      $(ReactDOM.findDOMNode(this)).dropdown('clear');
    }
  }
  render() {
    return (
      <div className={'ui floating dropdown' + (this.props.disabled ? ' disabled ' : ' ') + 'button'}>
        <div className="text">{this.props.emptyText}</div>
        <i className="dropdown icon" />
        <div className="menu">
          {this.props.items.map((item, index) => {
            return <div key={index} className="item" data-value={item[this.props.valueKey] || item}>{item[this.props.displayKey] || item}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default DropdownButton;
