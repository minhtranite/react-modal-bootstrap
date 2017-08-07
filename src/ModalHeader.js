import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ModalHeader extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    let {children} = this.props;
    return (
      <div className="modal-header">{children}</div>
    );
  }
}

export default ModalHeader;
