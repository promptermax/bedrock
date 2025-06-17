import React from 'react';

const faqs = [
  {
    question: 'What is a borehole and why do I need one?',
    answer: 'A borehole is a deep, narrow well drilled into the ground to access underground water. It provides a reliable and independent water source for homes, farms, and businesses.'
  },
  {
    question: 'How long does it take to drill a borehole?',
    answer: 'Most boreholes can be drilled and completed within 2-5 days, depending on the ground conditions and depth required.'
  },
  {
    question: 'What is the difference between solar and electricity-powered boreholes?',
    answer: 'Solar-powered boreholes use solar panels to run the pump, making them ideal for remote areas or places with unreliable electricity. Electricity-powered boreholes use the national grid or a generator.'
  },
  {
    question: 'Do you provide water testing and filtration?',
    answer: 'Yes, we offer water testing and install filtration systems to ensure your water is clean and safe for use.'
  },
  {
    question: 'What regions do you serve?',
    answer: 'We serve all regions and districts in The Gambia, including West Coast, Kanifing, North Bank, Lower River, Central River, and Upper River.'
  },
  {
    question: 'How do I request a quote?',
    answer: 'You can request a quote by clicking the "Get Quote" button in the header or visiting the Get a Quote page.'
  },
  {
    question: 'What aftercare services do you offer?',
    answer: 'We provide maintenance, tank cleaning, pump servicing, and filter replacement to keep your water system running smoothly.'
  },
  {
    question: 'Is there a warranty on your services?',
    answer: 'Yes, all our installations come with a warranty. Please contact us for specific warranty details.'
  },
  {
    question: 'Can I finance my borehole project?',
    answer: 'We offer flexible payment options and can discuss financing solutions to suit your needs.'
  },
  {
    question: 'How do I contact Bedrock Gambia?',
    answer: 'You can use the floating Contact Us button on the website, call us, or email info@bedrockgambia.com.'
  }
];

const FAQPage = () => (
  <div className="max-w-2xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
    <div className="space-y-6">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6">
          <h2 className="font-semibold text-lg mb-2">{faq.question}</h2>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FAQPage; 