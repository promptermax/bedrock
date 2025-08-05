import React, { useRef, useState } from 'react';

const ContactForm = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormStatus({ message: 'Sending...', type: 'info' });

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'jallowabdoukarim11@gmail.com',
          subject: 'New Contact Form Submission',
          html: `<p>Name: ${data.user_name}</p><p>Email: ${data.user_email}</p><p>Phone: ${data.user_phone}</p><p>Message: ${data.message}</p>`,
        }),
      });

      if (response.ok) {
        setFormStatus({ message: 'Thank you for your message! We will get back to you shortly.', type: 'success' });
        form.current.reset();
      } else {
        const errorData = await response.json();
        setFormStatus({ message: `Failed to send message. Please try again. Error: ${errorData.error.message}`, type: 'error' });
      }
    } catch (error) {
      setFormStatus({ message: `Failed to send message. Please try again. Error: ${error.message}`, type: 'error' });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-3 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-card-foreground">Contact Us</h2>
      {formStatus.message && (
        <div className={`text-center mb-4 p-3 rounded-md ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : formStatus.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
          {formStatus.message}
        </div>
      )}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-card-foreground mb-1">Name</label>
        <input
          id="contact-name"
          type="text"
          name="user_name"
          placeholder="Name"
          required
          className="w-full border border-border bg-background text-foreground p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-card-foreground mb-1">Email</label>
        <input
          id="contact-email"
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className="w-full border border-border bg-background text-foreground p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-card-foreground mb-1">Phone (optional)</label>
        <input
          id="contact-phone"
          type="tel"
          name="user_phone"
          placeholder="Phone (optional)"
          className="w-full border border-border bg-background text-foreground p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-card-foreground mb-1">Your Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Your message"
          required
          className="w-full border border-border bg-background text-foreground p-2 rounded"
        />
      </div>
      <button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded">Send</button>
      <p className="mt-6 text-sm text-muted-foreground italic text-center">
        This form is protected by reCAPTCHA.
      </p>
    </form>
  );
};

export default ContactForm; 