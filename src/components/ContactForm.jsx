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
    <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-card-foreground">Contact Us</h2>
      {error && <div className="text-destructive">{error}</div>}
      {success && <div className="text-accent">Thank you for contacting us!</div>}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-card-foreground mb-1">Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-border bg-background text-foreground p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-card-foreground mb-1">Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-border bg-background text-foreground p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-card-foreground mb-1">Phone (optional)</label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-border bg-background text-foreground p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-card-foreground mb-1">Your Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border border-border bg-background text-foreground p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="contact-human" className="block text-sm font-medium text-card-foreground mb-1">What is 3 + 4? (Human verification)</label>
        <input
          id="contact-human"
          type="text"
          name="human"
          placeholder="Your answer"
          value={form.human}
          onChange={handleChange}
          required
          className="w-full border border-border bg-background text-foreground p-2 rounded"
        />
      </div>
      <button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded">Send</button>
    </form>
  );
};

export default ContactForm; 