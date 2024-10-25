import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Card, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './HomePage.css'; // Importing the CSS file for additional styles

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // Optional: for continuous sliding
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // Optional: for continuous sliding
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // Optional: for continuous sliding
  }
};
const bestsellers = [
  { id: 1, title: 'Product 1', price: 19.99, img: 'https://placehold.co/300x200' },
  { id: 2, title: 'Product 2', price: 29.99, img: 'https://placehold.co/300x200' },
  { id: 3, title: 'Product 3', price: 39.99, img: 'https://placehold.co/300x200' },
  { id: 4, title: 'Product 4', price: 39.99, img: 'https://placehold.co/300x200' },
  { id: 5, title: 'Product 5', price: 39.99, img: 'https://placehold.co/300x200' },
];


 

function HomePage() {
  const [cart, setCart] = useState({});
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const addToCart = (id) => {
    setCart((prevCart) => ({ ...prevCart, [id]: (prevCart[id] || 0) + 1 }));
  };
 
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id] > 1) {
        newCart[id] -= 1;
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };
  return (
    <div className="page-container">
     

      {/* Banner */}
     
     <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
        <img src="Designer.png" alt="Banner" style={{ width: '100%' }} />
      </div>

      {/* Best Sellers */}
<Container className="my-5">
  <h2>Best Sellers</h2>
  <Carousel 
    responsive={responsive} 
    infinite={true} 
    keyBoardControl={true} 
    showDots={true}
    swipeable={true}
    draggable={true}
    autoPlay={true}
    autoPlaySpeed={3000}
  >
    {bestsellers.map((product) => (
      <div key={product.id} className="card-container">
        <Card className="bestseller-card">
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
          <Card.Img variant="top" src={product.img} />
         
          <div className="dropdown-hover">
            <div className="dropdown-content">
              {cart[product.id] > 0 ? (
                <div className="counter">
                  <Button onClick={() => removeFromCart(product.id)}>-</Button>
                  <span>{cart[product.id]}</span>
                  <Button onClick={() => addToCart(product.id)}>+</Button>
                </div>
              ) : (
                <Button onClick={() => addToCart(product.id)}>Buy Now</Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    ))}
  </Carousel>
</Container>

      {/* Blog Section */}
      <Container className="my-5">
        <h2>Our Impactful Blogs</h2>
        {[1, 2, 3].map((blog, index) => (
          <Row key={index}>
            <Col>
              <Card className="mb-3">
                <Card.Img variant="top" src={`/blog${blog}.jpg`} />
                <Card.Body>
                  <Card.Title>Blog Post {blog}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>

      {/* Footer */}
      <footer className="bg-light text-center text-lg-start">
        <Container className="p-4">
          <Row>
            <Col lg={6} md={12} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Company Name</h5>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </Col>

            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 4</a>
                </li>
              </ul>
            </Col>

            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 4</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright:
          <a className="text-dark" href="https://yourwebsite.com/"> yourwebsite.com</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
