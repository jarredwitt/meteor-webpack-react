import React from 'react';

class HeaderRow extends React.Component {
  static propTypes = {
    header: React.PropTypes.string,
    subHeader: React.PropTypes.string,
    children: React.PropTypes.array,
  }
  render() {
    return (
      <div className="row">
        <h4 className="ui horizontal divider header">
          <div className="content">
            {this.props.header}
            <div className="sub header">
              {this.props.subHeader}
            </div>
          </div>
        </h4>
        {this.props.children}
      </div>
    );
  }
}

export default HeaderRow;
