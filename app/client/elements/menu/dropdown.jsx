import React from 'react';
import ReactDOM from 'react-dom';

import Item from './item.jsx';

class Dropdown extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    items: React.PropTypes.array,
    action: React.PropTypes.func,
    actionValue: React.PropTypes.string,
  }
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).dropdown();
  }
  render() {
    return (
      <div ref="workflowMenuItem" className="ui dropdown item">
        {this.props.name}
        <i className="dropdown icon"></i>
        <div className="menu">
          {this.props.items.map((item, index) => {
            return <Item key={index} action={this.props.action} actionValue={item[this.props.actionValue]} name={item.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default Dropdown;
