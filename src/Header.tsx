import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Quotes App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                <Nav.Link as={Link} to="/quotes">Quotes</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;