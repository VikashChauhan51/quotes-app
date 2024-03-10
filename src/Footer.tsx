import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="light" variant="light" fixed="bottom">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
            </Nav>
            <Navbar.Text>© 2024 My App</Navbar.Text>
        </Navbar>
    );
};
  
  export default Footer;