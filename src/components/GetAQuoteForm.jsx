import React, { useState, useEffect } from 'react';
import { populateDistricts, validateForm, onSubmit } from '@/form-functions';

const regions = [
  { name: 'West Coast', districts: ['Brikama', 'Kombo North', 'Kombo South'] },
  { name: 'Kanifing', districts: ['Kanifing'] },
  { name: 'North Bank', districts: ['Kerewan', 'Lower Niumi', 'Upper Niumi'] },
  { name: 'Lower River', districts: ['Mansa Konko', 'Jarra West', 'Jarra East'] },
  { name: 'Central River', districts: ['Janjanbureh', 'Niamina East', 'Niamina West'] },
  { name: 'Upper River', districts: ['Basse', 'Wuli East', 'Wuli West'] },
];

const services = [
  'Borehole Drilling',
  'Water Filtration Installation',
  'Maintenance & After-Service',
];

const tankSizes = [
  '500 liters',
  '1000 liters',
  '2000 liters',
  '3000 liters',
  '4000 liters',
  '5000 liters',
  '10000 liters',
];

const GetAQuoteForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    power: '',
    tankSize: '',
    region: '',
    district: '',
    wantCall: false,
    callTime: '',
    human: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

    useEffect(() => {
        // Load reCAPTCHA script
        const script = document.createElement('script');
        script.src = "https://www.google.com/recaptcha/api.js?render=6LeIxAcTAAAAAJcZVRqyHh71riL_dGzKjdR8-PUh";
        script.async = true;
        script.onload = () => {
            console.log("reCAPTCHA script loaded");
        };
        document.head.appendChild(script);
    }, []);

  const handleRegionChange = (e) => {
    setForm({ ...form, region: e.target.value, district: '' });
    populateDistricts("region", "district");
  };

  const handleSubmit = (e) => {
      onSubmit(e, "quoteForm");
  };

  const selectedRegion = regions.find(r => r.name === form.region);

  return (
    <main className="main-content-container">
      <form id="quoteForm" action="/submit-quote" method="POST" className="space-y-4 max-w-md mx-auto pt-20" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-card-foreground">Get a Quote</h2>
        {error && <div className="text-destructive">{error}</div>}
        {success && <div className="text-accent">Thank you for your request!</div>}

        <div>
          <label htmlFor="service" className="block font-medium text-card-foreground">Service</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full border border-border bg-background text-foreground p-2 rounded"
          >
          <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block font-medium text-card-foreground">Name<span className="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-border bg-background text-foreground p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-card-foreground">Email<span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-border bg-background text-foreground p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium text-card-foreground">Phone</label>
          <input
            type="tel"
            id = "phone"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-border bg-background text-foreground p-2 rounded"
          />
        </div>

        <fieldset>
          <legend className="block font-medium text-card-foreground">Select Package:<span className="text-red-500">*</span></legend>
          <label className="mr-4 text-card-foreground">
            <input
              type="radio"
              id="electricity"
              name="power"
              value="Electricity"
              checked={form.power === 'Electricity'}
              onChange={handleChange}
              required
            />
            Electricity
          </label>
          <label className="mr-4 text-card-foreground">
            <input type="radio" id="solar" name="power" value="Solar" checked={form.power === 'Solar'} onChange={handleChange} required /> Solar
          </label>
          <label className="text-card-foreground">
            <input
              type="radio"
              id = "drilling"
              name="power"
              value="Drilling Only"
              checked={form.power === 'Drilling Only'}
              onChange={handleChange}
              required
            />
            Drilling Only
          </label>
        </fieldset>

        {(form.power === 'Electricity' || form.power === 'Solar') && (
          <div>
            <label htmlFor="tankSize" className="block font-medium text-card-foreground">Tank Size (liters)<span className="text-red-500">*</span></label>
            <select
              id = "tankSize"
              name="tankSize"
              value={form.tankSize}
              onChange={handleChange}
              required
              className="w-full border border-border bg-background text-foreground p-2 rounded"
            >
              <option value="">Select tank size</option>
              {tankSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="region" className="block font-medium text-card-foreground">Region<span className="text-red-500">*</span></label>
          <select
            id = "region"
            name="region"
            value={form.region}
            onChange={handleRegionChange}
            required
            className="w-full border border-border bg-background text-foreground p-2 rounded"
          >
            <option value="">Select region</option>
            {regions.map((r) => (
              <option key={r.name} value={r.name}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="district" className="block font-medium text-card-foreground">District<span className="text-red-500">*</span></label>
          <select
            id = "district"
            name="district"
            value={form.district}
            onChange={handleChange}
            required
            className="w-full border border-border bg-background text-foreground p-2 rounded"
            disabled={!form.region}
          >
            <option value="">Select district</option>
            {selectedRegion &&
              selectedRegion.districts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="text-card-foreground">
            <input
              type="checkbox"
              id = "wantCall"
              name="wantCall"
              checked={form.wantCall}
              onChange={handleChange}
            />
            I want to be called
          </label>
        </div>
        {form.wantCall && (
          <input
            type="time"
            id = "callTime"
            name="callTime"
            value={form.callTime}
            onChange={handleChange}
            required
            className="w-full border border-border bg-background text-foreground p-2 rounded"
          />
        )}
          <div id="recaptcha-container"></div>
        <button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded cta-button">Request Quote</button>
      </form>
    </main>
  );
};

export default GetAQuoteForm;