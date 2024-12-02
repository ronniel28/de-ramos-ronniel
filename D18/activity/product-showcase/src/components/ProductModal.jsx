import { Button, Modal } from "react-bootstrap";

const ProductModal = ({ product, show, onClose }) => (
    <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>{product?.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img src={product?.image} alt={product?.title} className="img-fluid mb-3" />
      <p><strong>Price:</strong> ${product?.price}</p>
      <p><strong>Category:</strong> {product?.category}</p>
      <p>{product?.description}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

);

export default ProductModal;