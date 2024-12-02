import { Button, Card } from "react-bootstrap";

const ProductCard = ({product, onViewDetails}) => (
    <Card className="mb-4">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary" onClick={() => onViewDetails(product)}>
                View Details
            </Button>
        </Card.Body>
    </Card>
);

export default ProductCard;

