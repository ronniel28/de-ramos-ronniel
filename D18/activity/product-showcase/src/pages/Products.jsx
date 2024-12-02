import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const fetchProducts = async () => {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        setProducts(data);
    }

    const fetchCategories = async () => {
        const { data } = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(data);
    }

    const filterProducts = () => {
        let filtered = products;

        if(selectedCategory) {
            filtered = filtered.filter((product) => product.category === selectedCategory);
        }

        if(searchQuery) {
            filtered = filtered.filter((product) => 
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filtered;
    }

    useEffect( () => {
        fetchProducts();
        fetchCategories();
    }, []);

    return (
        <Container>
            <Row className='my-4'>
                <Col md={4}>
                    <Form.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">All Categories</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
                <Col md={8}>
                    <Form.Control type="text" value={searchQuery} placeholder="Search by title..." onChange={(e) => setSearchQuery(e.target.value)}/>
                </Col>
            </Row>
            <Row>
                
                {filterProducts().map((product) => (
                    <Col key={product.id} sm={6} md={4} lg={3}>
                        <ProductCard product={product} onViewDetails={setSelectedProduct} />
                    </Col>
                ))}

            </Row>
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    show={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </Container>
    )
}

export default Products;