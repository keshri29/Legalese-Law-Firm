import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DesignTwo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: '', captcha: ''
  });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState('trademark');

  // New color palette: Navy Blue, Gold, White, Slate Gray
  const colors = {
    primary: '#0a2463',    // Navy Blue
    secondary: '#d4af37',  // Gold
    accent: '#e63946',     // Coral Red (for important elements)
    light: '#f8f9fa',      // Light Gray
    dark: '#1a1a2e',       // Dark Navy
    text: '#2d3748',       // Dark Gray
    muted: '#718096'       // Muted Gray
  };

  // Practice areas data
  const practiceAreas = [
    {
      id: 1,
      title: "Trademark Registration & Protection",
      description: "Secure your brand identity with comprehensive trademark services including search, filing, opposition, and litigation.",
      image: "https://legaleselawfirm.in/images/Trademark-Registration-and-Protection.jpg",
      icon: "®",
      category: "trademark",
      features: ["Trademark Search", "Filing & Registration", "Opposition Proceedings", "Renewal Services"]
    },
    {
      id: 2,
      title: "Copyright Law Services",
      description: "Protect creative works including software, content, music, and digital assets with professional copyright services.",
      image: "https://legaleselawfirm.in/images/Copyright-Law-Services.jpg",
      icon: "©",
      category: "copyright",
      features: ["Copyright Registration", "Digital Rights Protection", "Infringement Litigation", "Licensing Agreements"]
    },
    {
      id: 3,
      title: "Patent Registration & Prosecution",
      description: "From patent filing to grant and enforcement, we safeguard innovations under Indian Patent Law.",
      image: "https://legaleselawfirm.in/images/Patent-Registration-and-Prosecution.jpg",
      icon: "⚙️",
      category: "patent",
      features: ["Patent Search", "Filing & Prosecution", "International Patents", "Infringement Analysis"]
    },
    {
      id: 4,
      title: "Industrial Design Registration",
      description: "Protect the unique visual appearance of your products through design registration and enforcement.",
      image: "https://legaleselawfirm.in/images/Industrial-Design-Registration.jpg",
      icon: "🎨",
      category: "design",
      features: ["Design Search", "Registration", "Portfolio Management", "Enforcement"]
    },
    {
      id: 5,
      title: "Cyber Law & Technology",
      description: "Legal advisory for technology companies, startups, and digital businesses facing modern legal challenges.",
      image: "https://legaleselawfirm.in/images/Semiconductor-and-Technology-Law.png",
      icon: "🔒",
      category: "cyber",
      features: ["Data Protection", "Cybersecurity", "IT Contracts", "Compliance Advisory"]
    },
    {
      id: 6,
      title: "Corporate & RERA Advisory",
      description: "Comprehensive corporate legal services and RERA compliance for real estate developers and businesses.",
      image: "https://legaleselawfirm.in/images/jaipurrera.jpg",
      icon: "🏢",
      category: "corporate",
      features: ["Company Formation", "Contract Drafting", "RERA Compliance", "Mergers & Acquisitions"]
    }
  ];

  const testimonials = [
    { 
      id: 1, 
      name: "Rajesh Mehta", 
      position: "CEO, TechNova Solutions", 
      content: "Legalese Law Firm secured our international trademarks efficiently. Their expertise saved us from potential infringement issues that could have cost millions.",
      rating: 5 
    },
    { 
      id: 2, 
      name: "Priya Sharma", 
      position: "Founder, DesignCraft Studios", 
      content: "Their team demonstrated exceptional professionalism in protecting our copyrights. What impressed me most was their proactive approach to potential legal challenges.",
      rating: 5 
    },
    { 
      id: 3, 
      name: "Amit Kumar", 
      position: "Director, InnovateLabs", 
      content: "The cyber law team navigated complex data protection regulations with remarkable ease. Their strategic advice prevented multiple compliance issues.",
      rating: 5 
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captcha !== "10") {
      alert("Please verify the captcha correctly.");
      return;
    }
    alert("Thank you for your inquiry. Our legal team will contact you within 24 hours.");
    setFormData({ name: '', phone: '', email: '', service: '', message: '', captcha: '' });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Modern Navigation */}
      <motion.nav 
        className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-12 w-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold tracking-wider">L</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Legalese</h1>
                <p className="text-xs text-blue-600 font-medium">Law Firm | Jaipur</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'Services', 'Expertise', 'Team', 'Contact'].map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 hover:text-blue-700 font-medium text-sm tracking-wide group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-medium text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-6 py-6 space-y-4">
                {['Home', 'Services', 'Expertise', 'Team', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-blue-600 font-medium py-3 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full py-3 bg-blue-700 text-white font-medium rounded-lg mt-4">
                  Free Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section - Modern Layout */}
      <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 mb-8">
                <div className="h-px w-8 bg-blue-600"></div>
                <span className="text-blue-600 text-sm font-medium uppercase tracking-wider">Since 2008</span>
                <div className="h-px w-8 bg-blue-600"></div>
              </div>
              
              <h5 className="text-blue-800 font-semibold text-lg mb-6 tracking-wide">GET PROFESSIONAL LEGAL SUPPORT</h5>
              
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Expert Legal Solutions for <span className="text-blue-700">Intellectual Property</span> & Corporate Law
              </motion.h1>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Whether you need trademark registration, patent protection, cyber law assistance, or court representation, our expert advocates combine legal expertise with strategic thinking to protect your rights and innovations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Free Consultation
                </motion.button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300">
                  View Our Success Stories
                </button>
              </div>

              <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { number: "500+", label: "Cases Handled" },
                  { number: "15+", label: "Years Experience" },
                  { number: "100%", label: "Client Focus" },
                  { number: "24/7", label: "Legal Support" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-blue-800 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image/Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Legal Emergency</h3>
                  <p className="text-gray-600 mb-4">Immediate assistance for urgent legal matters</p>
                  <div className="text-blue-700 font-bold text-lg">+91 8696466424</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {practiceAreas.slice(0, 4).map((area, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
                      <div className="text-blue-600 text-lg mb-2">{area.icon}</div>
                      <h4 className="font-semibold text-gray-800 text-sm">{area.title.split(' ')[0]}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Modern Cards */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Trusted Legal Advocates for <span className="text-blue-700">Intellectual Property</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Legalese Law Firm is a premier full-service law firm based in Jaipur, delivering expert legal counsel across Trademarks, Copyrights, Patents, and Corporate Law.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver result-oriented, ethical, and client-focused legal solutions that protect your business, innovations, and rights in an ever-evolving legal landscape.
                </p>
              </div>

              <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Court Representation</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Rajasthan High Court",
                    "Supreme Court",
                    "District Courts",
                    "RERA Authorities",
                    "IP Offices",
                    "NCLT"
                  ].map((court, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{court}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-10 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Legalese Law Firm</h3>
              <ul className="space-y-6">
                {[
                  "Experienced Advocates & Legal Consultants",
                  "Specialized IP & Corporate Law Expertise",
                  "Client-Focused & Transparent Process",
                  "Strong Court Representation",
                  "Affordable & Professional Services"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-300 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-blue-700">
                <p className="text-blue-200 italic">
                  "We believe in protecting your rights, securing your business, and delivering justice with integrity."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="h-px w-12 bg-blue-600"></div>
              <span className="mx-4 text-blue-600 font-medium uppercase tracking-wider text-sm">Our Expertise</span>
              <div className="h-px w-12 bg-blue-600"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Legal Practice Areas
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'trademark', label: 'Trademark', icon: '®' },
              { id: 'copyright', label: 'Copyright', icon: '©' },
              { id: 'patent', label: 'Patent', icon: '⚙️' },
              { id: 'design', label: 'Design', icon: '🎨' },
              { id: 'cyber', label: 'Cyber Law', icon: '🔒' },
              { id: 'corporate', label: 'Corporate', icon: '🏢' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-blue-700 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {practiceAreas
              .filter(area => area.category === activeTab)
              .map((area) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="p-10">
                    <div className="flex items-center mb-6">
                      <div className="h-16 w-16 bg-blue-100 text-blue-700 text-2xl rounded-lg flex items-center justify-center mr-6">
                        {area.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{area.description}</p>
                    
                    <div className="mb-10">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Services</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {area.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
                      Learn More About This Service
                    </button>
                  </div>
                  
                  <div className="h-64 lg:h-auto">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/800x600/0a2463/ffffff?text=${encodeURIComponent(area.title.substring(0, 20))}`;
                      }}
                    />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials - Modern Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Trusted by businesses and innovators across India
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 text-xl font-bold rounded-full flex items-center justify-center mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Modern Layout */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Get In Touch With Our Legal Team
              </h2>
              <p className="text-gray-600 text-lg mb-12">
                Schedule a confidential consultation with our expert advocates to discuss your legal requirements.
              </p>

              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-blue-100 flex items-center justify-center rounded-lg mr-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Office Locations</h3>
                    <p className="text-gray-600">Corporate Office: Kamla Kunj, 482, OBC Colony, Jagatpura, Jaipur, Rajasthan</p>
                    <p className="text-gray-600 mt-2">Head Office: 285 Sector-14, Gurugram, Haryana 122001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-blue-100 flex items-center justify-center rounded-lg mr-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Numbers</h3>
                    <p className="text-gray-600 text-lg font-medium">+91 8696466424</p>
                    <p className="text-gray-600 text-lg font-medium">+91 7827973775</p>
                    <p className="text-blue-600 text-sm font-medium mt-2">24/7 Emergency Legal Support Available</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-blue-100 flex items-center justify-center rounded-lg mr-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Email Addresses</h3>
                    <p className="text-gray-600">legaleseipr@gmail.com</p>
                    <p className="text-gray-600">info@jaipurrera.com</p>
                  </div>
                </div>
              </div>

              {/* Warning Notice */}
              <div className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h4 className="text-red-800 font-bold text-lg mb-3">⚠ IMPORTANT LEGAL NOTICE</h4>
                <p className="text-red-700 text-sm">
                  Beware of fraudulent websites offering cheap trademark registration. The Trademark Authority has banned 17 websites. Only registered advocates are authorized to file trademark applications.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Schedule a Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      placeholder="Full Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Select Legal Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                  >
                    <option value="">Choose a service</option>
                    <option value="trademark">Trademark Registration & Protection</option>
                    <option value="copyright">Copyright Law Services</option>
                    <option value="patent">Patent Registration</option>
                    <option value="design">Industrial Design Registration</option>
                    <option value="cyber">Cyber Law & Technology</option>
                    <option value="rera">RERA & Corporate Advisory</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Case Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="Briefly describe your legal requirements..."
                  />
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <label className="block text-gray-700 font-medium mb-3">Security Verification *</label>
                  <p className="text-gray-600 mb-4">What is 4 + 6 ?</p>
                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="Enter the answer"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Legal Inquiry
                </motion.button>
                
                <p className="text-gray-500 text-sm text-center mt-6">
                  All information shared is strictly confidential and protected under attorney-client privilege.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">L</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Legalese Law Firm</h3>
                  <p className="text-blue-300 text-sm">Jaipur | Established 2008</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8">
                Premier legal advocates specializing in intellectual property, corporate law, and litigation in Jaipur.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="h-10 w-10 bg-white/10 hover:bg-blue-600 flex items-center justify-center rounded-lg transition-all duration-300">
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-8">Practice Areas</h4>
              <ul className="space-y-4">
                {practiceAreas.slice(0, 5).map((area) => (
                  <li key={area.id}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                      {area.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-8">Legal Resources</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Trademark Search", "IP India", "Copyright", "Patent",
                  "Design Registry", "RERA", "MCA", "Startup India"
                ].map((resource) => (
                  <a key={resource} href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                    {resource}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-8">Stay Updated</h4>
              <p className="text-gray-300 mb-6">Subscribe for legal insights and updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow p-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-l-lg outline-none"
                />
                <button className="px-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-r-lg">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2025 Legalese Law Firm | Jaipur. All Rights Reserved.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Bar Council Registration: RJ/2025/LLF
                </p>
              </div>
              <div className="text-gray-400 text-sm">
                <a href="#" className="hover:text-white mr-6">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignTwo;