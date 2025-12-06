import Image from 'next/image';

export default function About() {
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
              <a href="/" className="text-gray-600 hover:text-blue-900">Home</a>
              <a href="/about" className="text-blue-900 font-medium">About</a>
              <a href="/#services" className="text-gray-600 hover:text-blue-900">Services</a>
              <a href="/#contact" className="text-gray-600 hover:text-blue-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* About Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Building Trust Through <span className="text-blue-600">Governance</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                I&apos;m passionate about helping AI companies create governance systems that actually work — 
                systems that enable growth, build trust, and turn compliance into a competitive advantage.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 flex justify-center">
              <Image
                src="/about-photo.jpeg"
                alt="Founder seated in modern office setting"
                width={450}
                height={450}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Story</h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I&apos;ve seen firsthand how governance can either accelerate or paralyze innovation. Too often, 
              AI companies treat governance as an afterthought — something to bolt on when investors 
              or buyers start asking questions.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              That approach doesn&apos;t work. By the time you&apos;re scrambling to create documentation 
              for a due diligence process or procurement review, you&apos;re already behind. 
              You&apos;re reactive instead of proactive.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I founded Built Compliant to change that narrative. Governance shouldn&apos;t be a roadblock — 
              it should be a roadmap. The companies that understand this early are the ones that 
              scale successfully, close deals faster, and build lasting trust with their stakeholders.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <blockquote className="text-blue-900 text-xl font-medium">
                &quot;Governance is not about saying no to innovation. 
                It&apos;s about creating the right systems so you can confidently say yes.&quot;
              </blockquote>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">My Approach</h3>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I don&apos;t believe in generic compliance frameworks or one-size-fits-all solutions. 
              Every AI company has unique risks, unique opportunities, and unique constraints. 
              My job is to understand those specifics and design governance systems that work 
              with your business, not against it.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I work at the intersection of law, technology, and business strategy. I translate 
              regulatory requirements into engineering-ready specifications. I design decision 
              pathways that keep your team moving fast while managing risk intelligently.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Most importantly, I build systems that evolve with your company. As you scale, 
              as regulations change, as new risks emerge — your governance system adapts 
              and grows with you.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Core Values</h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide every engagement
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-lg mb-4">
                <span className="text-blue-600 text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Practical First</h3>
              <p className="mt-2 text-gray-600">
                Solutions that work in the real world, not just on paper. 
                Every recommendation is tested against business reality.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-lg mb-4">
                <span className="text-blue-600 text-2xl font-bold">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Business Focused</h3>
              <p className="mt-2 text-gray-600">
                Governance that enables revenue, accelerates deals, and builds stakeholder confidence. 
                Always aligned with business objectives.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-lg mb-4">
                <span className="text-blue-600 text-2xl font-bold">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Adaptive Design</h3>
              <p className="mt-2 text-gray-600">
                Systems that evolve with your company and the regulatory landscape. 
                Built for change, not just compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Build Governance That Works?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Let&apos;s discuss how we can turn your governance challenges into competitive advantages.
          </p>
          <div className="mt-8">
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
            >
              Start the Conversation
            </a>
          </div>
        </div>
      </section>

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