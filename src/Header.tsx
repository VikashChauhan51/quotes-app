import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Quotes App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/contact-us">Contact Us</Nav.Link>
                <Nav.Link as={NavLink} to="/quotes">Quotes</Nav.Link>
                <Nav.Link as={NavLink} to="/add-quote">Add Quotes</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;