import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      {/* Header - Fixed with Backdrop Blur */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold" style={{color: '#1A365D'}}>
                Built Compliant <span style={{color: '#003399'}}>✓</span>
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-10 text-sm font-medium">
              <a href="/" className="text-slate-500 hover:text-slate-900 transition-colors">Home</a>
              <a href="/about" className="text-slate-900 font-medium">About</a>
              <a href="/#problem" className="text-slate-500 hover:text-slate-900 transition-colors">The Problem</a>
              <a href="/#services" className="text-slate-500 hover:text-slate-900 transition-colors">Process</a>
              <a href="/#contact" className="text-slate-500 hover:text-slate-900 transition-colors">Contact</a>
            </nav>
            
            <a 
              href="/#contact" 
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Book a Call
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* About Section with Photo */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
               <div className="h-px w-8 bg-blue-600"></div>
               <span className="text-blue-700 font-semibold uppercase tracking-wider text-sm">About</span>
               <div className="h-px w-8 bg-blue-600"></div>
            </div>
            
            {/* Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg shadow-slate-200/50">
                <Image
                  src="/about-photo.jpeg"
                  alt="Chris Williams"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
              I'm Chris Williams — I help AI companies build governance systems that pass procurement and due diligence.
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              <strong className="text-slate-900">Background:</strong> Technical PM, built AI governance platforms, CIPP/E certified. I work at the intersection of law, technology, and business — translating regulatory requirements into engineering specs your team can actually implement.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <MapPin className="w-4 h-4" />
                <span>Based in Seattle. Working globally.</span>
              </div>
              
              <div className="mt-6">
                <a
                  href="/#contact"
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors"
                >
                  Let's Chat <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Minimalist */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <span className="text-xl font-bold" style={{color: '#1A365D'}}>
              Built Compliant <span style={{color: '#003399'}}>✓</span>
            </span>
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
             <a href="mailto:hello@builtcompliant.ai" className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}