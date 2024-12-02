import {Container, Navbar} from 'react-bootstrap';

const AppNavbar = () => (
    <Navbar>
        <Container bg="dark" variant="dark">
            <Navbar.Brand href="#">Product Showcase</Navbar.Brand>
        </Container>
    </Navbar>
);

export default AppNavbar;