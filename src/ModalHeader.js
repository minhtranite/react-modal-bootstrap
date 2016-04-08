import React from 'react';

class ModalHeader extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    let {children} = this.props;
    return (
      <div className="modal-header">{children}</div>
    );
  }
}

export default ModalHeader;
