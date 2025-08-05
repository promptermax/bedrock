import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const regions = [
  { name: 'West Coast', districts: ['Brikama', 'Kombo North', 'Kombo South'] },
  { name: 'Kanifing', districts: ['Kanifing'] },
  { name: 'North Bank', districts: ['Kerewan', 'Lower Niumi', 'Upper Niumi'] },
  { name: 'Lower River', districts: ['Mansa Konko', 'Jarra West', 'Jarra East'] },
  { name: 'Central River', districts: ['Janjanbureh', 'Niamina East', 'Niamina West'] },
  { name: 'Upper River', districts: ['Basse', 'Wuli East', 'Wuli West'] },
];

const tankSizes = [
  '500 liters', '1000 liters', '2000 liters', '3000 liters', '4000 liters', '5000 liters', '10000 liters',
];

const GetAQuoteForm = () => {
  const [state, handleSubmit] = useForm("xvgqwvrj");
  const [region, setRegion] = useState('');
  const [powerPackage, setPowerPackage] = useState('');

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handlePowerChange = (e) => {
    setPowerPackage(e.target.value);
  };

  if (state.succeeded) {
    return (
      <div className="text-center mb-4 p-3 rounded-md bg-green-100 text-green-800">
        <p>Thank you for your request! We will get back to you shortly.</p>
      </div>
    );
  }

  const selectedRegionData = regions.find(r => r.name === region);

  return (
    <main className="bg-white pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto py-16 px-4">
        
        {/* Content Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get a Custom Quote</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every water solution is unique. Fill out the form below to receive a detailed, no-obligation quote tailored to your specific needs. Our team will provide a transparent breakdown of costs and a clear plan for your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Form Section */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-primary mb-6">Project Details</h2>
            
            {state.succeeded && (
              <div className="text-center mb-4 p-3 rounded-md bg-green-100 text-green-800">
                <p>Thank you for your request! We will get back to you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="user_name" placeholder="Your Name" required className="w-full border border-border bg-background text-foreground p-3 rounded-md focus:ring-2 focus:ring-primary" />
                <input type="email" name="user_email" placeholder="Your Email" required className="w-full border border-border bg-background text-foreground p-3 rounded-md focus:ring-2 focus:ring-primary" />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              <input type="tel" name="user_phone" placeholder="Your Phone Number" className="w-full border border-border bg-background text-foreground p-3 rounded-md focus:ring-2 focus:ring-primary" />
              
              <select name="power_package" value={powerPackage} onChange={handlePowerChange} required className="w-full border border-border bg-background text-foreground p-3 rounded-md focus:ring-2 focus:ring-primary">
                <option value="">Select a Package*</option>
                <option value="Electricity">Electricity Package</option>
                <option value="Solar">Solar Package</option>
                <option value="Drilling Only">Drilling Only</option>
              </select>

              {(powerPackage === 'Electricity' || powerPackage === 'Solar') && (
                <select name="tank_size" required className="w-full border border-border bg-background text-foreground p-3 rounded-md focus:ring-2 focus:ring-primary">
                  <option value="">Select Tank Size*</option>
                  {tankSizes.map(size => <option key={size} value={size}>{size}</option>)}
                </select>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select name="region" value={region} onChange={handleRegionChange} required className="w-full border border-border bg-background text-foreground p-3 rounded-md focus:ring-2 focus:ring-primary">
                  <option value="">Select Region*</option>
                  {regions.map(r => <option key={r.name} value={r.name}>{r.name}</option>)}
                </select>
                <select name="district" required disabled={!region} className="w-full border border-border bg-background text-foreground p-3 rounded-md focus:ring-2 focus:ring-primary disabled:bg-gray-100">
                  <option value="">Select District*</option>
                  {selectedRegionData && selectedRegionData.districts.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <button type="submit" disabled={state.submitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-semibold text-lg cta-button">Request Free Quote</button>
            </form>
          </div>

          {/* "Our Process" Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Simple 3-Step Process</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Submit Your Request</h4>
                  <p className="text-muted-foreground">Fill out the form with your project details. The more information you provide, the more accurate your quote will be.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Free Consultation</h4>
                  <p className="text-muted-foreground">Our experts will review your request and contact you to discuss your needs, answer questions, and schedule a site assessment if necessary.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Receive Your Quote</h4>
                  <p className="text-muted-foreground">We'll provide a detailed, transparent quote with a full breakdown of costs and timelines. No hidden fees, no obligations.</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic">
              
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GetAQuoteForm;