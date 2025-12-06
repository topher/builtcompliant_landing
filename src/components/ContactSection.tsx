'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    // In production, you would send this data to your backend/email service
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              <h3 className="text-lg font-semibold">Thank you for your interest!</h3>
              <p className="mt-2">We'll get back to you within 24 hours to discuss how we can help transform your AI governance.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Ready to Get Started?</h2>
            <p className="mt-4 text-xl text-gray-600">
              Before procurement or due diligence slows deals, let's build the governance system your buyers expect.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="mt-12 bg-white shadow-lg rounded-lg p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Tell us about your governance challenges
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Are you facing procurement blockers? Due diligence concerns? Regulatory compliance requirements? Let us know how we can help."
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get Your Compliance Reality Check
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                We respond within 24 hours. No spam, just actionable governance insights.
              </p>
            </div>
          </form>
          
          {/* Alternative Contact Methods */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Prefer to talk directly? We get it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:hello@builtcompliant.ai"
                className="inline-flex items-center px-6 py-3 border border-blue-300 rounded-md text-blue-600 hover:bg-blue-50"
              >
                📧 hello@builtcompliant.ai
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-blue-300 rounded-md text-blue-600 hover:bg-blue-50"
              >
                📅 Schedule a 20-minute call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}