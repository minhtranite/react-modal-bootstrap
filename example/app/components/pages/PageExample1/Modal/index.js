import React from 'react';
import {Modal, ModalClose} from 'react-modal-bootstrap';

class PageExample1Modal extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired
  };

  state = {
    isOpen: true
  };

  closeModal = () => {
    this.setState({
      isOpen: false
    }, () => {
      if (this.props.history.goBack) {
        this.props.history.goBack();
      } else {
        this.props.history.pushState(null, '/ex-1');
      }
    });
  };

  render() {
    return (
      <Modal isOpen={this.state.isOpen} onRequestHide={this.closeModal}>
        <div className='modal-header'>
          <ModalClose onClick={this.closeModal}/>
          <h4 className='modal-title'>Modal with router</h4>
        </div>
        <div className='modal-body'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti
          explicabo facilis fugit laudantium nulla quas repellat tempora
          tenetur! Aperiam, aspernatur cupiditate in iusto repudiandae saepe
          vitae? Ad, architecto repellendus.
        </div>
      </Modal>
    );
  }
}

export default PageExample1Modal;
