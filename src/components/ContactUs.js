import React, { useState } from 'react';
import { Search } from 'lucide-react';

const ContactUs = () => {
  const [selectedCategory, setSelectedCategory] = useState('order');

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-2">
        Advertisement: Free shipping on orders over $50!
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-blue-500 text-2xl">⚛️</div>
            <span className="font-bold text-xl">EcoFusion</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Products</a>
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Cart</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Profile</a>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search"
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 animate-fade-in">
            How Can We Help You?
          </h1>
          <p className="text-gray-600">
            We're here to help and answer any question you might have
          </p>
        </div>

        {/* Help Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {helpCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-6 rounded-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-1 ${
                selectedCategory === category.id
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-lg'
                  : 'bg-white border border-gray-200 hover:shadow-lg'
              }`}
            >
              <div className="text-4xl mb-4 animate-bounce-subtle">{category.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{category.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Form</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              >
                {helpCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 focus:ring-4 focus:ring-blue-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
