import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ModalTitle extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    let {children} = this.props;
    return (
      <h4 className="modal-title">{children}</h4>
    );
  }
}

export default ModalTitle;
