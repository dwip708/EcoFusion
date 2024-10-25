import React from 'react';
import './ContactUs.css'

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation and submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactUs;
