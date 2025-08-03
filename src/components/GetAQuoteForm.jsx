import React, { useState } from 'react';

const regions = [
  { name: 'West Coast', districts: ['Brikama', 'Kombo North', 'Kombo South'] },
  { name: 'Kanifing', districts: ['Kanifing'] },
  { name: 'North Bank', districts: ['Kerewan', 'Lower Niumi', 'Upper Niumi'] },
  { name: 'Lower River', districts: ['Mansa Konko', 'Jarra West', 'Jarra East'] },
  { name: 'Central River', districts: ['Janjanbureh', 'Niamina East', 'Niamina West'] },
  { name: 'Upper River', districts: ['Basse', 'Wuli East', 'Wuli West'] },
];

const GetAQuoteForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    power: '',
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

  const handleRegionChange = (e) => {
    setForm({ ...form, region: e.target.value, district: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.human.trim() !== '7') {
      setError('Human verification failed.');
      return;
    }
    setError('');
    setSuccess(true);
    console.log('Quote form submitted:', form);
    setForm({ name: '', email: '', phone: '', power: '', region: '', district: '', wantCall: false, callTime: '', human: '' });
  };

  const selectedRegion = regions.find(r => r.name === form.region);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-card-foreground">Get a Quote</h2>
      {error && <div className="text-destructive">{error}</div>}
      {success && <div className="text-accent">Thank you for your request!</div>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border border-border bg-background text-foreground p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border border-border bg-background text-foreground p-2 rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full border border-border bg-background text-foreground p-2 rounded"
      />
      <div>
        <label className="block font-medium text-card-foreground">Power Type</label>
        <label className="mr-4 text-card-foreground">
          <input type="radio" name="power" value="Electricity" checked={form.power === 'Electricity'} onChange={handleChange} required /> Electricity
        </label>
        <label className="text-card-foreground">
          <input type="radio" name="power" value="Solar" checked={form.power === 'Solar'} onChange={handleChange} required /> Solar
        </label>
      </div>
      <div>
        <label className="block font-medium text-card-foreground">Region</label>
        <select name="region" value={form.region} onChange={handleRegionChange} required className="w-full border border-border bg-background text-foreground p-2 rounded">
          <option value="">Select region</option>
          {regions.map(r => (
            <option key={r.name} value={r.name}>{r.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-medium text-card-foreground">District</label>
        <select name="district" value={form.district} onChange={handleChange} required className="w-full border border-border bg-background text-foreground p-2 rounded" disabled={!form.region}>
          <option value="">Select district</option>
          {selectedRegion && selectedRegion.districts.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-card-foreground">
          <input type="checkbox" name="wantCall" checked={form.wantCall} onChange={handleChange} /> I want to be called
        </label>
      </div>
      {form.wantCall && (
        <input
          type="time"
          name="callTime"
          value={form.callTime}
          onChange={handleChange}
          required
          className="w-full border border-border bg-background text-foreground p-2 rounded"
        />
      )}
      <label className="block text-card-foreground">What is 3 + 4? (Human verification)</label>
      <input
        type="text"
        name="human"
        placeholder="Your answer"
        value={form.human}
        onChange={handleChange}
        required
        className="w-full border border-border bg-background text-foreground p-2 rounded"
      />
      <button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded">Request Quote</button>
    </form>
  );
};

export default GetAQuoteForm; 