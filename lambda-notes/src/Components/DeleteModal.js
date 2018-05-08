import React from 'react'
import { Button, Modal, ModalBody } from 'reactstrap'

const DeleteModal = props => {
  return (
    <div>
      <Modal isOpen={props.modal}>
        <ModalBody>
          <p>Are you sure you want to delete this?</p>
          <Button onClick={() => props.delete(props.id)}>Delete</Button>
          <Button onClick={() => props.toggle()}>No</Button>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default DeleteModal
