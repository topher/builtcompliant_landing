import React, { useState } from 'react';
import { Menu, X, ArrowRight, Check, Shield, FileText, Settings, ChevronRight, Send, Quote, Award, Terminal, Calendar, Mail } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      
      {/* Navigation - Minimal & Sticky */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2.5">
              {/* Logo Mark - Abstract Geometric */}
              <div className="w-5 h-5 bg-blue-700 rounded-sm"></div>
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                Built Compliant
              </span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-10 text-sm font-medium">
              <a href="#problem" className="text-slate-500 hover:text-slate-900 transition-colors">The Problem</a>
              <a href="#process" className="text-slate-500 hover:text-slate-900 transition-colors">Process</a>
              <a href="#who-is-this-for" className="text-slate-500 hover:text-slate-900 transition-colors">Who We Help</a>
              <a href="#contact" className="text-slate-500 hover:text-slate-900 transition-colors">Contact</a>
            </nav>
            <a 
              href="#contact" 
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Book a Call
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white absolute w-full px-6 py-6 shadow-lg space-y-4">
             <a href="#problem" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>The Problem</a>
             <a href="#process" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Process</a>
             <a href="#who-is-this-for" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Who We Help</a>
             <a href="#contact" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <main className="pt-20">
        
        {/* HERO: Founder-Led, High-Trust */}
        <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Copy */}
              <div className="max-w-2xl">
                {/* Simplified Badge - Honest & Clear */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium uppercase tracking-wide mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  AI Governance Consulting
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 text-balance leading-[0.95]">
                  Governance that <br />
                  <span className="text-blue-700">closes deals.</span>
                </h1>
                
                <p className="text-xl text-slate-500 leading-relaxed text-balance mb-10 font-light">
                  We help AI companies pass procurement and due diligence. 
                  <span className="block mt-4 text-slate-900 font-medium">
                    When buyers or investors ask hard questions, you'll have answers.
                  </span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 mb-12">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    Book a Call
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#process"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300"
                  >
                    How We Work
                  </a>
                </div>

                {/* Trust Indicators / Mini Bio */}
                <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span>Former Head of AI Risk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-blue-600" />
                    <span>Certified AI Auditor</span>
                  </div>
                </div>
              </div>

              {/* Right Column: The "Expert" Photo */}
              <div className="relative lg:h-auto flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 group">
                  {/* INSTRUCTIONS: Use your actual photo file here */}
                  <img 
                    src="/api/placeholder/600/750" 
                    alt="Founder Portrait" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay at bottom for text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>

                  {/* Optional: Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
                     <p className="text-slate-900 font-semibold text-sm">Your Name</p>
                     <p className="text-slate-500 text-xs">Founder & Principal Consultant</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl -z-10"></div>
              </div>

            </div>
          </div>
        </section>

        {/* THE PROBLEM: Dark Mode for Gravity & Contrast */}
        <section id="problem" className="bg-[#0B1120] py-24 lg:py-32 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-8 leading-tight">
                  Compliance is no longer just legal paperwork. <br />
                  <span className="text-blue-500">It’s a revenue blocker.</span>
                </h2>
                <div className="space-y-8 text-slate-400 text-lg lg:text-xl leading-relaxed font-light">
                  <p>
                    Enterprise buyers now demand <strong className="text-slate-200 font-medium">model cards, transparency notes, and risk documentation</strong> before they sign. Investors treat governance maturity as a primary diligence filter.
                  </p>
                  <p>
                    Most AI startups aren't set up to respond.
                  </p>
                  <div className="pt-8 border-l-2 border-blue-500/30 pl-8">
                    <p className="text-slate-300 text-xl italic">
                      "The result? Deals slip. Raises drag. Teams scramble to produce documentation that should already exist."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Data/Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-800/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="bg-[#0f1629] p-10 group hover:bg-[#151e32] transition-colors cursor-default">
                  <div className="text-xs text-blue-400 mb-3 font-mono uppercase tracking-wider">Regulations</div>
                  <div className="text-white font-medium text-lg">EU AI Act, NYC 144, <br/>Colorado SB 24-205</div>
                </div>
                <div className="bg-[#0f1629] p-10 group hover:bg-[#151e32] transition-colors cursor-default">
                  <div className="text-xs text-blue-400 mb-3 font-mono uppercase tracking-wider">Procurement</div>
                  <div className="text-white font-medium text-lg">Model Cards, <br/>Transparency Notes</div>
                </div>
                <div className="bg-[#0f1629] p-10 group hover:bg-[#151e32] transition-colors cursor-default">
                  <div className="text-xs text-blue-400 mb-3 font-mono uppercase tracking-wider">Diligence</div>
                  <div className="text-white font-medium text-lg">Risk Controls, <br/>Data Lineage</div>
                </div>
                <div className="bg-[#0f1629] p-10 group hover:bg-[#151e32] transition-colors cursor-default">
                  <div className="text-xs text-blue-400 mb-3 font-mono uppercase tracking-wider">Engineering</div>
                  <div className="text-white font-medium text-lg">Clear Specs, <br/>Not Legal Jargon</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>
        </section>

        {/* SOLUTION: Bento Grid Layout */}
        <section id="process" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-20">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
                What We Build
              </h2>
              <p className="text-xl text-slate-500 font-light">
                Governance systems that engineering teams can actually implement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Feature 1 - Large */}
              <div className="col-span-1 md:col-span-2 p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-8 text-blue-600 shadow-sm group-hover:scale-105 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Procurement Readiness</h3>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-lg">Give your sales team the artifacts they need to bypass procurement friction. We build the transparency notes and model cards that enterprise buyers demand.</p>
                </div>
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-tl-[100px] translate-x-10 translate-y-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500"></div>
              </div>

              {/* Feature 2 - Small */}
              <div className="p-10 rounded-3xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all group">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 text-blue-600 group-hover:scale-105 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Due Diligence</h3>
                <p className="text-slate-600 leading-relaxed">Documentation and controls that survive rigorous investor scrutiny.</p>
              </div>

              {/* Feature 3 - Small */}
              <div className="p-10 rounded-3xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all group">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 text-blue-600 group-hover:scale-105 transition-transform">
                    <Settings className="w-6 h-6" />
                  </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Engineering Translation</h3>
                <p className="text-slate-600 leading-relaxed">Turning vague legal requirements into clear product specs.</p>
              </div>

               {/* Feature 4 - Large */}
               <div className="col-span-1 md:col-span-2 p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all group overflow-hidden relative">
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-8 text-blue-600 shadow-sm group-hover:scale-105 transition-transform">
                    <ChevronRight className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">System Design</h3>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-lg">Governance systems that scale with your product — without slowing down engineering.</p>
                </div>
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-gradient-to-tr from-slate-200/40 to-transparent rounded-tr-[100px] -translate-x-10 translate-y-10 group-hover:-translate-x-5 group-hover:translate-y-5 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK SECTION */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                How We Work
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every engagement starts with a <strong>Governance Diagnostic</strong> — a fast assessment of where friction is slowing deals, fundraising, or product velocity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
               {[
                 { title: "Procurement Readiness", desc: "Model cards, transparency notes, and support for enterprise questionnaires." },
                 { title: "Due Diligence Prep", desc: "Documentation and controls that survive investor scrutiny." },
                 { title: "Engineering Translation", desc: "Turning legal and regulatory requirements into product specs your team can build against." },
                 { title: "System Design", desc: "Clear decision routing, oversight structures, and risk coordination." }
               ].map((item, index) => (
                 <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                   <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-6 text-sm">
                     {index + 1}
                   </div>
                   <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="text-center">
               <p className="text-slate-500 italic">
                 "Engagements range from quick assessments to ongoing advisory, depending on your stage and complexity."
               </p>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR SECTION */}
        <section id="who-is-this-for" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
                Who This Is For
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "AI startups selling into enterprise",
                "Companies preparing for Series A+ fundraising",
                "Teams adding AI capabilities to existing products",
                "Anyone facing governance questions they can't yet answer"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION: Contact Form */}
        <section id="contact" className="py-24 lg:py-32 border-t border-slate-100 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
                  Before procurement or due diligence slows deals, let's build the governance system your buyers expect.
                </p>
            </div>
            
            {/* The Contact Component */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 ring-1 ring-slate-900/5 text-left mb-12">
              <ContactForm /> 
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

      </main>

      {/* FOOTER: Minimalist */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
            <span className="font-semibold text-slate-900 tracking-tight">Built Compliant</span>
          </div>
          <div className="text-sm text-slate-400">
            © 2025 Built Compliant. All rights reserved.
          </div>
          <div className="flex gap-8">
             <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium">LinkedIn</a>
             <a href="mailto:hello@builtcompliant.ai" className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// INTERNAL COMPONENT: Contact Form
function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h3>
        <p className="text-slate-500 mb-2">We respond within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm text-slate-400 hover:text-slate-600 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Name *</label>
          <input 
            type="text" 
            id="name" 
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">Email *</label>
          <input 
            type="email" 
            id="email" 
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400"
            placeholder="jane@company.ai"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-slate-700">Company</label>
        <input 
          type="text" 
          id="company" 
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400"
          placeholder="Company Name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="challenge" className="text-sm font-medium text-slate-700">Tell us about your governance challenges</label>
        <textarea 
          id="challenge"
          rows={4}
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400 resize-none"
          placeholder="e.g. We are preparing for Series B and need to clear a risk audit..."
        ></textarea>
      </div>
      
      <div className="pt-2">
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-slate-900/20"
        >
          {status === 'submitting' ? 'Sending...' : 'Get Your Compliance Reality Check'}
          {!status && <Send size={16} />}
        </button>
        <p className="text-center text-xs text-slate-400 mt-4">
           We respond within 24 hours.
        </p>
      </div>
    </form>
  );
}