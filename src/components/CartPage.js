import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './CartPage.css';
import { FaCartArrowDown } from 'react-icons/fa';

const dummyProducts = [
  {
    _id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling wireless headphones with 20-hour battery life',
    price: 199.99,
    stock: 5,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    quantity: 2
  },
  {
    _id: '2',
    name: 'Smart Watch',
    description: 'Latest generation smartwatch with health monitoring and GPS',
    price: 299.99,
    stock: 2,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop',
    quantity: 1
  },
  {
    _id: '3',
    name: 'Portable Speaker',
    description: 'Waterproof portable speaker with 360-degree sound',
    price: 79.99,
    stock: 1,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
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
    setCart(dummyProducts); // Using dummy data with better images
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

  const handleQuantityChange = (productId, quantity, op) => {
    if (quantity < 1) {
      removeFromCart(productId);
    } else {
      const product = cart.find(item => item._id === productId);
      if (product) {
        if (quantity > product.stock && op === 1) {
          const errorMessage = `Only ${product.stock} items left in stock.`;
          setError(errorMessage);
  
          // Clear the error after 3 seconds
          setTimeout(() => {
            setError('');
          }, 1000); // 3000 milliseconds = 3 seconds
        } else if (op === 0 && quantity > 0) {
          updateCart(productId, quantity);
        } else {
          setError('');
          updateCart(productId, quantity);
        }
      }
    }
  };
  

  const handleCheckout = () => {
    const itemsToCheckout = cart.filter(item => item.stock >= item.quantity);
    if (itemsToCheckout.length === 0) {
      setError('No items available for checkout.');
  
      // Set a timeout to clear the error after 5 seconds
      setTimeout(() => {
        setError(''); // Clear the error message
      }, 1200); // 5000 milliseconds = 5 seconds
    } else {
      console.log('Proceeding to checkout with:', itemsToCheckout);
    }
  };
  

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  return (
    <div className="cart-container">
      <h2 className="cart-title"><FaShoppingCart /> Shopping Cart</h2>
      {error && <p className="cart-error">{error}</p>}
      <div class="d-flex">
        <div className="cart-items col-md-8">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item._id} className={`cart-item ${item.stock < item.quantity ? 'out-of-stock-item' : ''}`}>
                <div className="cart-item-remove" onClick={() => removeFromCart(item._id)}>×</div>
                <img className="cart-item-image"src={item.image} alt={item.name} />
  <              div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="cart-item-price"><p>Price: ${item.price.toFixed(2)}</p></div>
                  <div className='net-cart-item'><p>Net Cost: ${(item.price * item.quantity).toFixed(2)}</p></div>
                  <div className="cart-item-quantity">
                    <button onClick={() => handleQuantityChange(item._id, item.quantity - 1, 0)}>-</button>
                    <span>{item.quantity}</span>
                    {item.stock >= item.quantity && (
                      <button onClick={() => handleQuantityChange(item._id, item.quantity + 1, 1)}>+</button>
                    )}
                  </div>
                  {item.stock <= item.quantity && item.stock > 0 && (
                    <div className="out-of-stock"><p>Hurry! Only {item.stock} items left in stock</p></div>
                  )}
                  {item.stock == 0 && (
                    <div className="out-of-stock"><p>Out of stock</p></div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cart-message text-center shadow" style={{ marginTop: '50px', maxHeight: '100%' }}>
                <h2>Your Cart is <span class="text-warning fw-bold">Empty</span></h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <p>Browse our products and start shopping!</p>
                <FaCartArrowDown size={32}/>
            </div>
          )}
        </div>
        <div className="cart-summary col-md-4 mx-3 shadow" style={{border: '2px solid #5ba4f2'}}>
          <h3 style={{borderBottom: '2px solid #efefef'}}>Cart Summary</h3>
          <div id='item-price-section' style={{ minHeight: '300px' }}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Item No</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length > 0 ? (
                      cart.map((item) => (
                        <tr className="card-row">
                          <td>{item._id}</td>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                      ))
                    ) : (
                        <tr>
                          <td colSpan={4}>No item selected</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;