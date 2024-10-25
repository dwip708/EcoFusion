// src/pages/CartPage.js
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './CartPage.css';

const dummyProducts = [
  {
    _id: '1',
    name: 'Product 1',
    description: 'Description of Product 1',
    price: 20.0,
    stock: 5,
    image: 'https://via.placeholder.com/100',
    quantity: 2
  },
  {
    _id: '2',
    name: 'Product 2',
    description: 'Description of Product 2',
    price: 15.0,
    stock: 2,
    image: 'https://via.placeholder.com/100',
    quantity: 1
  },
  {
    _id: '3',
    name: 'Product 3',
    description: 'Description of Product 3',
    price: 25.0,
    stock: 1,
    image: 'https://via.placeholder.com/100',
    quantity: 3
  }
];

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    setCart(dummyProducts); // Using dummy data for now
  };

  const updateCart = async (productId, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item._id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  const removeFromCart = async (productId) => {
    setCart(prevCart => prevCart.filter(item => item._id !== productId));
  };

  const handleQuantityChange = (productId, quantity,op) => {
    if (quantity < 1) {
      removeFromCart(productId);
    } else {
      const product = cart.find(item => item._id === productId);
      if (product && quantity > product.stock &&op===1) {
        setError(`Only ${product.stock} items left in stock.`);
      }
      else if (op==0 && quantity>0){
        updateCart(productId, quantity);
      } else {
        setError('');
        updateCart(productId, quantity);
      }
    }
  };

  const handleCheckout = () => {
    const itemsToCheckout = cart.filter(item => item.stock >= item.quantity);
    if (itemsToCheckout.length === 0) {
      setError('No items available for checkout.');
    } else {
      console.log('Proceeding to checkout with:', itemsToCheckout);
    }
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  
  return (
    <div className="cart-container">
      <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '5px' }}>
        Advertisement: Free shipping on orders over $50!
      </div>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            {isLargeScreen && (
            <Form className="d-flex mx-auto" style={{ width: '40%' }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> )}
            <Nav>
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h2 className="cart-title"><FaShoppingCart /> Shopping Cart</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item._id} className={`cart-item ${item.stock < item.quantity ? 'out-of-stock-item' : ''}`}>
              <div className="cart-item-remove" onClick={() => removeFromCart(item._id)}>×</div>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="cart-item-price"><p>Price: ${item.price.toFixed(2)}</p></div>
                <div className='net-cart-item'><p>Net Cost: ${(item.price * item.quantity).toFixed(2)}</p></div>
                <div className="cart-item-quantity">
                  <button onClick={() => handleQuantityChange(item._id, item.quantity - 1,0)}>-</button>
                  <span>{item.quantity}</span>
                  {item.stock >= item.quantity && (
                    <button onClick={() => handleQuantityChange(item._id, item.quantity + 1,1)}>+</button>
                  )}
                </div>
                {item.stock <= item.quantity && item.stock>0 && (
                  <div className="out-of-stock"><p >Hurry! Only {item.stock} items left in stock</p></div>
                )}
                { item.stock==0 && (
                  <div className="out-of-stock"><p >Hurry! Only {item.stock} items left in stock</p></div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-summary">
        <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
      {error && <p className="cart-error">{error}</p>}
    </div>
  );
};

export default CartPage;
