import React, { useState } from 'react';
import { Container, Navbar, Nav, Card, Button, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductsPage.css'; // Ensure you have the appropriate CSS
import CustomNavbar from './CustomNavbar';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const deals = [
    {
      id: 1,
      img: 'https://placehold.co/300x200',
      title: 'Deal Product 1',
      description: 'This is a great deal product.',
      price: 19.99
    },
    {
      id: 2,
      img: 'https://placehold.co/300x200',
      title: 'Deal Product 2',
      description: 'Special discount on this product.',
      price: 29.99
    },
    {
      id: 3,
      img: 'https://placehold.co/300x200',
      title: 'Deal Product 3',
      description: 'Limited time offer.',
      price: 39.99
    },
    {
      id: 4,
      img: 'https://placehold.co/300x200',
      title: 'Deal Product 4',
      description: 'Buy one get one free.',
      price: 49.99
    },
    {
      id: 5,
      img: 'https://placehold.co/300x200',
      title: 'Deal Product 5',
      description: 'Huge savings on this product.',
      price: 59.99
    }
  ];
  
  const newArrivals = [
    {
      id: 1,
      img: 'https://placehold.co/300x200',
      title: 'New Arrival 1',
      description: 'Just arrived in our store.',
      price: 24.99
    },
    {
      id: 2,
      img: 'https://placehold.co/300x200',
      title: 'New Arrival 2',
      description: 'Fresh stock of this product.',
      price: 34.99
    },
    {
      id: 3,
      img: 'https://placehold.co/300x200',
      title: 'New Arrival 3',
      description: 'New and trendy item.',
      price: 44.99
    },
    {
      id: 4,
      img: 'https://placehold.co/300x200',
      title: 'New Arrival 4',
      description: 'Latest addition to our collection.',
      price: 54.99
    },
    {
      id: 5,
      img: 'https://placehold.co/300x200',
      title: 'New Arrival 5',
      description: 'Hot off the press.',
      price: 64.99
    },
    {
      id: 6,
      img: 'https://placehold.co/300x200',
      title: 'New Arrival 6',
      description: 'Check out our newest item.',
      price: 74.99
    }
  ];
  
  const evergreen = [
    {
      id: 1,
      img: 'https://placehold.co/300x200',
      title: 'Evergreen Product 1',
      description: 'A timeless classic.',
      price: 39.99
    },
    {
      id: 2,
      img: 'https://placehold.co/300x200',
      title: 'Evergreen Product 2',
      description: 'Always in demand.',
      price: 49.99
    },
    {
      id: 3,
      img: 'https://placehold.co/300x200',
      title: 'Evergreen Product 3',
      description: 'Popular choice among customers.',
      price: 59.99
    },
    {
      id: 4,
      img: 'https://placehold.co/300x200',
      title: 'Evergreen Product 4',
      description: 'A product that never goes out of style.',
      price: 69.99
    },
    {
      id: 5,
      img: 'https://placehold.co/300x200',
      title: 'Evergreen Product 5',
      description: 'A staple in our inventory.',
      price: 79.99
    },
    {
      id: 6,
      img: 'https://placehold.co/300x200',
      title: 'Evergreen Product 6',
      description: 'A must-have for everyone.',
      price: 89.99
    }
  ];
  

function ProductsPage() {
  const [showAllDeals, setShowAllDeals] = useState(false);
  const [showAllNewArrivals, setShowAllNewArrivals] = useState(false);
  const [showAllEvergreen, setShowAllEvergreen] = useState(false);

  const toggleShowAllDeals = () => setShowAllDeals(!showAllDeals);
  const toggleShowAllNewArrivals = () => setShowAllNewArrivals(!showAllNewArrivals);
  const toggleShowAllEvergreen = () => setShowAllEvergreen(!showAllEvergreen);

  return (
    <div>

      {/* Today's Deals */}
      <Container className="my-5">
        <h2>Today's Deals</h2>
        <Button 
          variant="link" 
          onClick={toggleShowAllDeals} 
          className="show-all-button"
        >
          {showAllDeals ? 'Show Less' : 'Show All'}
        </Button>
        {!showAllDeals ? (
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
            {deals.map((product) => (
              <div key={product.id}>
                <Card className="product-card">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        ) : (
          <Row>
            {deals.map((product) => (
              <Col key={product.id} xs={9} md={5} lg={3}>
                <Card className="product-card-open">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* New Arrivals */}
      <Container className="my-5">
        <h2>New Arrivals</h2>
        <Button 
          variant="link" 
          onClick={toggleShowAllNewArrivals} 
          className="show-all-button"
        >
          {showAllNewArrivals ? 'Show Less' : 'Show All'}
        </Button>
        {!showAllNewArrivals ? (
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
            {newArrivals.map((product) => (
              <div key={product.id}>
                <Card className="product-card">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        ) : (
          <Row>
            {newArrivals.map((product) => (
              <Col key={product.id} xs={9} md={5} lg={3}>
                <Card className="product-card">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Evergreen Products */}
      <Container className="my-5">
        <h2>Evergreen Products</h2>
        <Button 
          variant="link" 
          onClick={toggleShowAllEvergreen} 
          className="show-all-button"
        >
          {showAllEvergreen ? 'Show Less' : 'Show All'}
        </Button>
        {!showAllEvergreen ? (
          <Carousel 
            responsive={responsive} 
            infinite={true} 
            keyBoardControl={true} 
            showDots={false}
            swipeable={true}
            draggable={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {evergreen.map((product) => (
              <div key={product.id}>
                <Card className="product-card">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        ) : (
          <Row>
            {evergreen.map((product) => (
             <Col key={product.id} xs={9} md={5} lg={3}>
                <Card className="product-card">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </Col>
            <Col>
              <Nav className="justify-content-center">
                <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
                <Nav.Link href="#terms">Terms of Service</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default ProductsPage;
