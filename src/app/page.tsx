import ContactSection from '@/components/ContactSection';
import Image from 'next/image';
import { ArrowRight, Shield, FileText, Settings, ChevronRight, Award, Terminal, Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      {/* Header - Fixed with Backdrop Blur */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 bg-blue-700 rounded-sm"></div>
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                Built Compliant
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-10 text-sm font-medium">
              <a href="/about" className="text-slate-500 hover:text-slate-900 transition-colors">About</a>
              <a href="#problem" className="text-slate-500 hover:text-slate-900 transition-colors">The Problem</a>
              <a href="#services" className="text-slate-500 hover:text-slate-900 transition-colors">Process</a>
              <a href="#contact" className="text-slate-500 hover:text-slate-900 transition-colors">Contact</a>
            </nav>
            
            <a 
              href="#contact" 
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Book a Call
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">

        {/* Hero Section - Modern Layout */}
        <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Copy */}
              <div className="max-w-2xl">
                {/* Badge */}
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
                    When buyers or investors ask hard questions, you&apos;ll have answers.
                  </span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 mb-12">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    Let's Chat
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300"
                  >
                    How We Work
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span>Certified Information Privacy Professional (IAPP)</span>
                  </div>
                </div>
              </div>

              {/* Right Column: The Professional Photo */}
              <div className="relative lg:h-auto flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 group">
                  <Image
                    src="/hero-photo.jpeg"
                    alt="Founder Portrait"
                    width={600}
                    height={750}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
                     <p className="text-slate-900 font-semibold text-sm">Chris Williams</p>
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

        {/* Problem Section - Dark Mode for Gravity */}
        <section id="problem" className="bg-[#0B1120] py-24 lg:py-32 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-8 leading-tight">
                  Compliance is no longer just legal paperwork. <br />
                  <span className="text-blue-500">It&apos;s a revenue blocker.</span>
                </h2>
                <div className="space-y-8 text-slate-400 text-lg lg:text-xl leading-relaxed font-light">
                  <p>
                    Enterprise buyers now demand <strong className="text-slate-200 font-medium">model cards, transparency notes, and risk documentation</strong> before they sign. Investors treat governance maturity as a primary diligence filter.
                  </p>
                  <p>
                    Most AI startups aren&apos;t set up to respond.
                  </p>
                  <div className="pt-8 border-l-2 border-blue-500/30 pl-8">
                    <p className="text-slate-300 text-xl italic">
                      &quot;The result? Deals slip. Raises drag. Teams scramble to produce documentation that should already exist.&quot;
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

        {/* Solution Section - Bento Grid Layout */}
        <section id="services" className="py-24 lg:py-32 bg-white">
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

        {/* How We Work Section */}
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
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-6 text-sm">
                  1
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Procurement Readiness</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Model cards, transparency notes, and support for enterprise questionnaires.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-6 text-sm">
                  2
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Due Diligence Prep</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Documentation and controls that survive investor scrutiny.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-6 text-sm">
                  3
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Engineering Translation</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Turning legal and regulatory requirements into product specs your team can build against.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-6 text-sm">
                  4
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">System Design</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Clear decision routing, oversight structures, and risk coordination.</p>
              </div>
            </div>

            <div className="text-center">
               <p className="text-slate-500 italic">
                 &quot;Engagements range from quick assessments to ongoing advisory, depending on your stage and complexity.&quot;
               </p>
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
                Who This Is For
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-slate-700 font-medium">AI startups selling into enterprise</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-slate-700 font-medium">Companies preparing for Series A+ fundraising</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-slate-700 font-medium">Teams adding AI capabilities to existing products</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-slate-700 font-medium">Anyone facing governance questions they can&apos;t yet answer</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

      </main>

      {/* Footer - Minimalist */}
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
             <a 
               href="https://www.linkedin.com/in/cafwilliams/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium"
             >
               LinkedIn
             </a>
             <a 
               href="mailto:hello@builtcompliant.ai" 
               className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium"
             >
               Email
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
