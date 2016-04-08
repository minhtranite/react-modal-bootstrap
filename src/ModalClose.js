import React from 'react';

class ModalClose extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func
  };

  static defaultProps = {
    onClick: () => {
    }
  };

  render() {
    return (
      <button type="button" className="close" aria-label="Close"
        onClick={this.props.onClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    );
  }
}

export default ModalClose;
