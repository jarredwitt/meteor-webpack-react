import React from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    displayKey: React.PropTypes.string.isRequired,
    valueKey: React.PropTypes.string.isRequired,
    emptyText: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).dropdown({
      metadata: {
        defaultText: this.props.emptyText,
      },
      onChange: (item) => {
        if (item.length > 0) {
          this.setState({
            selectedItem: item,
          });
        }
      },
    });
  }
  componentDidUpdate() {
    if (!this.state.selectedItem) {
      $(ReactDOM.findDOMNode(this)).dropdown('restore defaults');
    }
  }
  render() {
    const items = this.props.items ? this.props.items : [];
    return (
      <div className="ui selection dropdown">
        <input type="hidden" />
        <i className="dropdown icon" />
        <div className="default text">{this.props.emptyText}</div>
        <div className="menu">
          {items.map((item, index) => {
            let displayKey;
            this.props.displayKey.split('.').forEach((key) => {
              if (!displayKey) {
                displayKey = item[key];
              } else {
                displayKey = displayKey[key];
              }
            });

            let valueKey;
            this.props.valueKey.split('.').forEach((key) => {
              if (!valueKey) {
                valueKey = item[key];
              } else {
                valueKey = valueKey[key];
              }
            });

            return <div key={index} className="item" data-value={valueKey}>{displayKey}</div>;
          })}
        </div>
      </div>
    );
  }
  getSelectedItem() {
    return this.state.selectedItem;
  }
  clear() {
    this.setState({
      selectedItem: null,
    });
  }
}

export default Dropdown;
