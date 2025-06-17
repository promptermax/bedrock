import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    human: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.human.trim() !== '7') {
      setError('Human verification failed.');
      return;
    }
    setError('');
    setSuccess(true);
    console.log('Contact form submitted:', form);
    setForm({ name: '', email: '', phone: '', message: '', human: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Contact Us</h2>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-600">Thank you for contacting us!</div>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <label className="block">What is 3 + 4? (Human verification)</label>
      <input
        type="text"
        name="human"
        placeholder="Your answer"
        value={form.human}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
};

export default ContactForm; 