import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalClose,
  ModalTitle,
  ModalBody
} from 'react-modal-bootstrap';

class RouterModalPage extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    isOpen: true
  };

  closeModal = () => {
    this.setState({
      isOpen: false
    }, () => {
      let {router} = this.context;
      if (router.goBack) {
        router.goBack();
      } else {
        router.push('/router');
      }
    });
  };

  render() {
    let {isOpen} = this.state;
    return (
      <Modal isOpen={isOpen} onRequestHide={this.closeModal}>
        <ModalHeader>
          <ModalClose onClick={this.closeModal}/>
          <ModalTitle>Modal with router</ModalTitle>
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti
          explicabo facilis fugit laudantium nulla quas repellat tempora
          tenetur! Aperiam, aspernatur cupiditate in iusto repudiandae saepe
          vitae? Ad, architecto repellendus.
        </ModalBody>
      </Modal>
    );
  }
}

export default RouterModalPage;
