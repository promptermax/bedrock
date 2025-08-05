import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xkgzqpba");

  if (state.succeeded) {
      return (
        <div className="text-center mb-4 p-3 rounded-md bg-green-100 text-green-800">
          <p>Thank you for your message! We will get back to you shortly.</p>
        </div>
      );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-card-foreground">Contact Us</h2>
      
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
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
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
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting} className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded">Send</button>
      <p className="mt-6 text-sm text-muted-foreground italic text-center">
        This form is protected by reCAPTCHA.
      </p>
    </form>
  );
};

export default ContactForm; 