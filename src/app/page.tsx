import ContactSection from '@/components/ContactSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold" style={{color: '#1A365D'}}>
                Built Compliant <span style={{color: '#003399'}}>✓</span>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/about" className="text-gray-600 hover:text-blue-900">About</a>
              <a href="#services" className="text-gray-600 hover:text-blue-900">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Golden Ratio Layout */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Left Aligned Content */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                Governance That <span className="text-blue-600">Closes Deals</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                We help AI companies pass procurement and due diligence — so deals don&apos;t stall and raises don&apos;t slip.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Most AI startups hit governance questions they can&apos;t answer.<br/>
                <strong>We build the systems that produce answers.</strong>
              </p>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Let&apos;s Talk →
                </a>
              </div>
            </div>
            
            {/* Right Side - Square Photo with Slight Rounded Corners */}
            <div className="flex justify-center lg:justify-end items-center">
              <Image
                src="/hero-photo.jpeg"
                alt="Professional founder"
                width={450}
                height={450}
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            {/* 
            ALTERNATIVE CUTOUT VERSION - Replace above photo section with this for cutout effect:
            
            <div className="relative flex justify-end items-end">
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/hero-cutout.png"
                  alt="Professional founder"
                  width={480}
                  height={640}
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
            
            Benefits of cutout version:
            - Eliminates "floating torso syndrome" 
            - Photo anchored to section bottom
            - More editorial/magazine feel
            - No borders or frames needed
            - Professional cutout with transparent background
            */}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              AI governance has become a revenue problem.
            </h2>
            <div className="mt-8 max-w-4xl mx-auto text-left space-y-4">
              <p className="text-lg text-gray-700">
                Enterprise buyers now require <strong>model cards, transparency notes, and risk documentation</strong> before they&apos;ll move forward.
              </p>
              <p className="text-lg text-gray-700">
                Investors expect <strong>governance maturity</strong> as part of due diligence.
              </p>
              <p className="text-lg text-gray-700">
                Regulations like <strong>Colorado SB 24-205</strong> and <strong>NYC Local Law 144</strong> are already in effect.
              </p>
              <p className="text-lg text-gray-700">
                And most AI companies aren&apos;t set up to respond.
              </p>
            </div>
            <div className="mt-8 p-6 bg-red-50 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-semibold text-red-900">
                The result?
              </p>
              <p className="text-lg text-red-800 mt-2">
                <strong>Deals slip. Raises drag. Teams scramble to produce documentation that should already exist.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              We build governance systems that actually work.
            </h2>
            <div className="mt-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Not binders of policies.<br/>
                Not legal memos.
              </p>
              <p className="text-xl font-semibold text-gray-900 mb-8">
                <strong>Operational systems</strong> that:
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-lg text-gray-700">
                Give your <strong>sales team</strong> the answers procurement needs
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-lg text-gray-700">
                Give <strong>investors</strong> the documentation they expect in diligence
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-lg text-gray-700">
                Give <strong>engineering</strong> clear requirements instead of vague compliance asks
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-lg text-gray-700">
                Give <strong>leadership</strong> visibility into AI risk across the org
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-blue-900">
              <strong>One system. Multiple outcomes: faster deals, smoother raises, less regulatory scramble.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              How We Work
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
              Every engagement starts with a <strong>Governance Diagnostic</strong> — a fast assessment of where friction is slowing deals, fundraising, or product velocity.
            </p>
            <p className="text-lg text-gray-600 mb-12">
              From there, we scope only what you actually need:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">• Procurement Readiness</h3>
              <p className="text-gray-700">
                Model cards, transparency notes, and support for enterprise questionnaires.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">• Due Diligence Prep</h3>
              <p className="text-gray-700">
                Documentation and controls that survive investor scrutiny.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">• Engineering Translation</h3>
              <p className="text-gray-700">
                Turning legal and regulatory requirements into product specs your team can build against.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">• Governance System Design</h3>
              <p className="text-gray-700">
                Clear decision routing, oversight structures, and risk coordination.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Engagements range from <strong>quick assessments</strong> to <strong>ongoing advisory</strong>, depending on your stage and complexity.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Book a 15-Minute Call →
            </a>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Who This Is For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                <p className="text-lg text-gray-700">AI startups selling into enterprise</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                <p className="text-lg text-gray-700">Companies preparing for Series A+ fundraising</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                <p className="text-lg text-gray-700">Teams adding AI capabilities to existing products</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                <p className="text-lg text-gray-700">Anyone facing governance questions they can&apos;t yet answer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Image 
                src="/bc-logo.svg" 
                alt="Built Compliant" 
                width={40} 
                height={40}
                className="h-8 w-8 invert"
              />
              <h2 className="ml-3 text-2xl font-bold">Built Compliant</h2>
            </div>
            <p className="mt-4 text-gray-400">
              Governance That Closes Deals
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/cafwilliams/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:hello@builtcompliant.ai" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              © 2025 Built Compliant. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
