import React from 'react';
import ReactDOM from 'react-dom';

class Sidebar extends React.Component {
  static propTypes = {
    sidebarId: React.PropTypes.number,
    children: React.PropTypes.array,
  }
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      rendered: false,
    };
    this.rendered = false;
  }
  componentDidMount() {
    let sidebar = this.props.sidebarId && document.getElementById(this.props.sidebarId);
    if (!sidebar) {
      sidebar = document.createElement('div');
      const classNames = ['ui', 'vertical', 'inverted', 'sidebar', 'menu', 'right'];
      classNames.forEach((name) => {
        sidebar.classList.add(name);
      });
      let pusherElement = document.getElementById('pusherElement');
      document.body.insertBefore(sidebar, pusherElement);

      $(sidebar).sidebar({
        defaultTransition: {
          computer: {
            right: 'overlay',
          },
        },
      });
    }

    this.sidebarElement = sidebar;
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    if (!this.rendered) {
      ReactDOM.render(<div {...this.props}>{this.props.children}</div>, this.sidebarElement);

      this.rendered = true;
    }

    if (this.state.visible) {
      $(this.sidebarElement).sidebar('show');
    } else {
      $(this.sidebarElement).sidebar('hide');
    }
  }
  componentWillUnmount() {
    document.body.removeChild(this.sidebarElement);
  }
  render() {
    return null;
  }
  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }
}

export default Sidebar;
