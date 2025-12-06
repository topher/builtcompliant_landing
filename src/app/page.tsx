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
              <h1 className="text-2xl font-bold text-blue-900" style={{color: '#1A365D'}}>
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Governance That <span className="text-blue-600">Closes Deals</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                We help AI companies design governance systems that actually work in practice — 
                systems that scale with complexity, support innovation, and unlock revenue by passing procurement and due diligence.
              </p>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started Today
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 flex justify-center">
              <Image
                src="/hero-photo.jpeg"
                alt="Professional founder in modern office setting"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              AI governance has become a revenue problem
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Companies don&apos;t fail audits because they lack policies. They fail because information doesn&apos;t flow, 
              responsibilities aren&apos;t clear, and risks aren&apos;t detected early.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-lg">
                <span className="text-red-600 font-bold">🚫</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Procurement Roadblocks</h3>
              <p className="mt-2 text-gray-600">
                Buyers demand model cards, risk assessments, and transparency notes before closing deals
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-lg">
                <span className="text-red-600 font-bold">💰</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Due Diligence Pressure</h3>
              <p className="mt-2 text-gray-600">
                VCs ask for governance systems and audit readiness, freezing or delaying funding
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-lg">
                <span className="text-red-600 font-bold">📋</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">State-Level Regulation</h3>
              <p className="mt-2 text-gray-600">
                Colorado SB 24-205 and similar laws require documentation and oversight now
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-lg">
                <span className="text-red-600 font-bold">🔒</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Trust Barriers</h3>
              <p className="mt-2 text-gray-600">
                Enterprise risk teams want evidence, not claims. Transparency builds trust and credibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Governance as a <span className="text-blue-600">Living Operating System</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We architect risk sensing, decision pathways, and coordination systems that adapt with your business.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Tier 1 */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900">The Compliance Reality Check™</h3>
              <p className="mt-2 text-blue-600 font-medium">€3,000 – €7,500 fixed</p>
              <p className="mt-4 text-gray-700">
                Fast diagnostic identifying procurement blockers, due diligence risks, and missing documentation.
                Artifact-heavy. Actionable. Fast.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Procurement blocker analysis</li>
                <li>• Due diligence risk assessment</li>
                <li>• Documentation gap analysis</li>
                <li>• Model transparency audit</li>
              </ul>
            </div>

            {/* Tier 2 */}
            <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
              <div className="flex items-center">
                <h3 className="text-xl font-semibold text-green-900">Legal-to-Engineering Translation™</h3>
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">POPULAR</span>
              </div>
              <p className="mt-2 text-green-600 font-medium">€12,000 – €20,000/month</p>
              <p className="mt-4 text-gray-700">
                Convert laws, standards, and buyer requirements into engineering-ready tasks and product requirements.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Engineering acceptance criteria</li>
                <li>• Lifecycle controls & pipelines</li>
                <li>• Model cards & transparency packs</li>
                <li>• Cross-functional coordination</li>
              </ul>
            </div>

            {/* Tier 3 */}
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900">Adaptive Governance Operating System™</h3>
              <p className="mt-2 text-purple-600 font-medium">€25,000 – €50,000/month</p>
              <p className="mt-4 text-gray-700">
                Complete organizational redesign with sensing loops, decision pathways, and adaptive governance structures.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Organizational sensing loops</li>
                <li>• Decision & escalation systems</li>
                <li>• Risk intelligence flows</li>
                <li>• Product-integrated governance</li>
              </ul>
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
              Governance That Scales With You
            </p>
            <div className="mt-6 text-sm text-gray-500">
              © 2024 Built Compliant. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
