import React from 'react';

class Selection extends React.Component {
  static propTypes = {
    items: React.PropTypes.array,
    displayKey: React.PropTypes.string,
    onRemoveItem: React.PropTypes.func,
  }
  render() {
    const items = this.props.items ? this.props.items : [];
    return (
      <div className="ui middle aligned selection list">
        {items.map((item, index) => {
          let displayKey;
          this.props.displayKey.split('.').forEach((key) => {
            if (!displayKey) {
              displayKey = item[key];
            } else {
              displayKey = displayKey[key];
            }
          });

          return (
            <div key={index} className="item">
              <div className="right floated content">
                <button className="mini ui icon button" onClick={this._onRemoveItem.bind(this, item)}><i className="remove icon"></i></button>
              </div>
              <div className="content">
                <div className="header">{displayKey}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  _onRemoveItem(item) {
    this.props.onRemoveItem(item);
  }
}

export default Selection;
