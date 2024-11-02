import React from "react";
import "./ContactUs.css";

const CONTACT_FAQ = [
  {
    title: "Order Assistance",
    message:
      "Track your order, modify or cancel your order, shipping information, returns and refunds",
  },
  {
    title: "Account Assistance",
    message:
      "Password reset, account settings, payment methods, address management",
  },
  {
    title: "Product Support",
    message: "Product information, availability, specifications, compatibility",
  },
  {
    title: "Technical Support",
    message: "Website issues, payment problems, error messages",
  },
];

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation and submission logic here
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact-section">
      <h3 className="contact-section__heading">Let's Start a Conversation</h3>
      <div className="contact-section__content">
        <div className="contact-section__help">
          {CONTACT_FAQ?.map((item) => (
            <div>
              <h4>{item?.title}</h4>
              <p>{item?.message}</p>
            </div>
          ))}
        </div>
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
      </div>
    </div>
  );
}

export default ContactUs;
