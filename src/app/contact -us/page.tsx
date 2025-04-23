// app/contact-us/page.tsx
'use client'
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Submit the form data (e.g., send to API)
    alert('Thank you for contacting us!');
    
    // Optionally reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='px-10 py-8 max-w-3xl mx-auto'>
      <h1 className='text-3xl font-semibold mb-6'>Contact Us</h1>

      <section className="my-6">
        <h2 className="text-2xl font-medium mb-1">Reach Out to Us</h2>
        <p className="text-gray-600">If you have any questions, feel free to contact us using the form below.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded" 
              required 
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded" 
              required 
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded" 
              rows={4} 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 transition text-white font-semibold rounded"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-medium mb-1">Our Contact Information</h2>
        <p>Email: <a href="mailto:support@ecommerce.com" className="text-blue-600">support@ecommerce.com</a></p>
        <p>Phone: +977 123456789</p>
        <p>Address: Kathmandu, Nepal</p>
      </section>
    </div>
  );
};

export default ContactUs;
