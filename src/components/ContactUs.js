import React, { useState } from 'react';

const ContactUs = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
  };

  const helpCategories = [
    {
      id: 'order',
      title: 'Need Help with Your Order?',
      icon: '📦',
      description: 'Track your order, modify or cancel your order, shipping information, returns and refunds.'
    },
    {
      id: 'account',
      title: 'Account Assistance',
      icon: '👤',
      description: 'Password reset, account settings, payment methods, address management.'
    },
    {
      id: 'product',
      title: 'Product Support',
      icon: '🛍️',
      description: 'Product information, availability, specifications, compatibility.'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: '🔧',
      description: 'Website issues, payment problems, error messages.'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">How Can We Help You?</h1>
        <p className="text-gray-600">We're here to help and answer any question you might have</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {helpCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedCategory === category.id
                ? 'bg-blue-50 border-2 border-blue-500'
                : 'bg-white border-2 border-gray-100'
            }`}
          >
            <div className="text-4xl mb-3">{category.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Form</h2>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">
              Help Category:
            </label>
            <select
              id="category"
              name="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="general">General Inquiry</option>
              <option value="order">Order Support</option>
              <option value="account">Account Support</option>
              <option value="product">Product Support</option>
              <option value="technical">Technical Support</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:ring-4 focus:ring-blue-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6">
          <div className="text-3xl mb-3">📞</div>
          <h3 className="font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">1-800-123-4567</p>
          <p className="text-sm text-gray-500">Mon-Fri: 9am-6pm EST</p>
        </div>
        <div className="p-6">
          <div className="text-3xl mb-3">💬</div>
          <h3 className="font-semibold mb-2">Live Chat</h3>
          <p className="text-gray-600">Chat with our support team</p>
          <p className="text-sm text-gray-500">24/7 Available</p>
        </div>
        <div className="p-6">
          <div className="text-3xl mb-3">📧</div>
          <h3 className="font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600">support@example.com</p>
          <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
