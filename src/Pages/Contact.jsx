
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-form">
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message">Message</label>
          <textarea id="message" className="w-full p-2 border rounded" rows="4" placeholder="Message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
