import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { CartContext } from "./../../components/Product/Product";
import "./style.css";
interface Props {
  show: boolean;
  onHide: () => void;
}
const SuccessModal = ({ show, onHide }: Props) => {
  const { cart } = useContext(CartContext);
  const handleClose = () => {};

  // @ts-ignore
  return (
    <Modal show={show} onHide={onHide} centred>
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Поздравляем!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          Ваша покупка прошла успешно.
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button
            variant="secondary"
            onClick={onHide}
            className="btn-secondary"
          >
            Закрыть
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default SuccessModal;
