import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ModalBody extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    let {children} = this.props;
    return (
      <div className="modal-body">{children}</div>
    );
  }
}

export default ModalBody;
