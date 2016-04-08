import React from 'react';

class ModalBody extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    let {children} = this.props;
    return (
      <div className="modal-body">{children}</div>
    );
  }
}

export default ModalBody;
