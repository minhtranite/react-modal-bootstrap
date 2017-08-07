import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ModalClose extends Component {
  static propTypes = {
    onClick: PropTypes.func
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
