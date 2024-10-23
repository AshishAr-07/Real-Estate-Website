'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  // State to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // State for error messages
  const [error, setError] = useState('');
  
  // State to show success message
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    
    // Basic validation
    if (!name || !email || !message) {
      setError('Please fill in all fields');
      return;
    }
    
    // Clear any existing error
    setError('');
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    setSubmitted(true);
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-md mx-auto  p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      
      {/* Show success message if form was submitted */}
      {submitted && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
          Thank you for your message!
        </div>
      )}
      
      {/* Show error message if there's an error */}
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;