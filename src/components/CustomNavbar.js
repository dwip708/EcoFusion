import { Navbar, Container, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './NavbarStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function CustomNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '5px' }}>
        Advertisement: Free shipping on orders over $50!
      </div>
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <span className="brand-name">ReNatured</span>
           
          </Navbar.Brand>

          {!isLargeScreen &&
             <Form className="d-flex justify-content-between search-form2">

                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                  <Button variant="outline-success" className="d-flex align-items-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
              </Form> }


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className={`nav-item ${currentPath === '/' ? 'active-link' : ''}`}>
                Home
              </Nav.Link>
              <Nav.Link href="/products" className={`nav-item ${currentPath === '/products' ? 'active-link' : ''}`}>
                Products
              </Nav.Link>
              <Nav.Link href="/contact" className={`nav-item ${currentPath === '/contact' ? 'active-link' : ''}`}>
                Contact Us
              </Nav.Link>
            </Nav>

            {isLargeScreen &&
              <Form className="d-flex search-form">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                 <Button variant="outline-success" className="d-flex align-items-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
              </Form>
            }

            <Nav>
              <Nav.Link href="/cart" className={`nav-item ${currentPath === '/cart' ? 'active-link' : ''}`}>
                Cart
              </Nav.Link>
              <Nav.Link href="/profile" className={`nav-item ${currentPath === '/profile' ? 'active-link' : ''}`}>
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
