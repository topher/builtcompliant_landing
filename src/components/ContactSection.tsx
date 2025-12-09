'use client';

import { useState } from 'react';
import { Check, Send, Mail, Calendar } from 'lucide-react';

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
      <section id="contact" className="py-24 lg:py-32 border-t border-slate-100 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 ring-1 ring-slate-900/5 text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h3>
            <p className="text-slate-500 mb-2">We respond within 24 hours.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-sm text-slate-400 hover:text-slate-600 underline"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-slate-100 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
              Before procurement or due diligence slows deals, let&apos;s build the governance system your buyers expect.
            </p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 ring-1 ring-slate-900/5 text-left mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  id="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  id="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400"
                  placeholder="jane@company.ai"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-slate-700">Company</label>
              <input 
                type="text" 
                name="company"
                id="company" 
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400"
                placeholder="Company Name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Tell us about your governance challenges</label>
              <textarea 
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400 resize-none"
                placeholder="e.g. We are preparing for Series B and need to clear a risk audit..."
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20"
              >
                Book a Call
                <Send size={16} />
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                 We respond within 24 hours.
              </p>
            </div>
          </form>
        </div>
          
        {/* Direct Contact Options */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-slate-500">
           <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href="mailto:hello@builtcompliant.ai" className="hover:text-slate-900 hover:underline">hello@builtcompliant.ai</a>
           </div>
           <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></div>
           <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <a href="#" className="hover:text-slate-900 hover:underline">Schedule a 20-minute call</a>
           </div>
        </div>
        <p className="text-center text-xs text-slate-400 mt-6">
          Prefer to talk directly? We get it. No spam, just actionable governance insights.
        </p>
      </div>
    </section>
  );
}