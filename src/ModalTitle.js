import React from 'react';

class ModalTitle extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    let {children} = this.props;
    return (
      <h4 className="modal-title">{children}</h4>
    );
  }
}

export default ModalTitle;
