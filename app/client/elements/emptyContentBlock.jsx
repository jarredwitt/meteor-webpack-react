import React from 'react';

class EmptyContentBlock extends React.Component {
  static propTypes = {
    message: React.PropTypes.string,
  }
  render() {
    const styles = {
      container: {
        position: 'relative',
        width: '100%',
        height: 100,
      },
      messageContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      },
      message: {
        textAlign: 'center',
      },
    };

    return (
      <div style={styles.container}>
        <div style={styles.messageContainer}>
          <div style={styles.message}>
            {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}

export default EmptyContentBlock;
