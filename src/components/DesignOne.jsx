import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

const DesignOne = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: '', captcha: ''
  });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(v => setIsScrolled(v > 50));
    return unsubscribe;
  }, [scrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Enhanced practice areas with icons
  const practiceAreas = [
    {
      id: 1,
      title: "Trademark Registration & Protection",
      description: "Secure your brand identity with comprehensive trademark services including search, filing, opposition, and litigation.",
      image: "https://legaleselawfirm.in/images/Trademark-Registration-and-Protection.jpg",
      icon: "®",
      features: ["Trademark Search", "Filing & Registration", "Opposition Proceedings", "Renewal Services"]
    },
    {
      id: 2,
      title: "Copyright Law Services",
      description: "Protect creative works including software, content, music, and digital assets with professional copyright services.",
      image: "https://legaleselawfirm.in/images/Copyright-Law-Services.jpg",
      icon: "©",
      features: ["Copyright Registration", "Digital Rights Protection", "Infringement Litigation", "Licensing Agreements"]
    },
    {
      id: 3,
      title: "Patent Registration & Prosecution",
      description: "From patent filing to grant and enforcement, we safeguard innovations under Indian Patent Law.",
      image: "https://legaleselawfirm.in/images/Patent-Registration-and-Prosecution.jpg",
      icon: "⚙️",
      features: ["Patent Search", "Filing & Prosecution", "International Patents", "Infringement Analysis"]
    },
    {
      id: 4,
      title: "Industrial Design Registration",
      description: "Protect the unique visual appearance of your products through design registration and enforcement.",
      image: "https://legaleselawfirm.in/images/Industrial-Design-Registration.jpg",
      icon: "🎨",
      features: ["Design Search", "Registration", "Portfolio Management", "Enforcement"]
    },
    {
      id: 5,
      title: "Cyber Law & Technology",
      description: "Legal advisory for technology companies, startups, and digital businesses facing modern legal challenges.",
      image: "https://legaleselawfirm.in/images/Semiconductor-and-Technology-Law.png",
      icon: "🔒",
      features: ["Data Protection", "Cybersecurity", "IT Contracts", "Compliance Advisory"]
    },
    {
      id: 6,
      title: "Corporate & RERA Advisory",
      description: "Comprehensive corporate legal services and RERA compliance for real estate developers and businesses.",
      image: "https://legaleselawfirm.in/images/jaipurrera.jpg",
      icon: "🏢",
      features: ["Company Formation", "Contract Drafting", "RERA Compliance", "Mergers & Acquisitions"]
    }
  ];

  const testimonials = [
    { id: 1, name: "Rajesh Mehta", position: "CEO, TechNova Solutions", content: "Legalese Law Firm secured our international trademarks efficiently. Their expertise saved us from potential infringement issues.", rating: 5 },
    { id: 2, name: "Priya Sharma", position: "Founder, DesignCraft Studios", content: "Professional, responsive, and incredibly knowledgeable. They protected our designs and patents comprehensively.", rating: 5 },
    { id: 3, name: "Amit Kumar", position: "Director, InnovateLabs", content: "Their cyber law team helped us navigate complex data protection regulations with ease. Highly recommended!", rating: 4 }
  ];

  const achievements = [
    { number: "500+", label: "Cases Successfully Handled", suffix: "" },
    { number: "15+", label: "Years Experience", suffix: "" },
    { number: "100%", label: "Client Satisfaction", suffix: "" },
    { number: "24/7", label: "Legal Support", suffix: "" }
  ];

  const courtRepresentations = [
    "Rajasthan High Court",
    "Supreme Court of India",
    "District & Sessions Courts",
    "NCLT & NCLAT",
    "RERA Appellate Tribunal",
    "Intellectual Property Appellate Board"
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
    <div className="min-h-screen bg-white font-serif">
       <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
             <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="h-14 w-14 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-2xl">
                  <span className="text-white text-2xl font-bold tracking-wider">LLF</span>
                </div>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-red-500 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gra tracking-tight">LEGALESE</h1>
                <p className="text-xs text-gray-600 font-sans tracking-wider">LAW FIRM | JAIPUR</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {['Home', 'About', 'Practice Areas', 'Our Team', 'Success Stories', 'Contact'].map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative text-gray-700 hover:text-red-700 font-medium text-sm tracking-wide uppercase group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium text-sm tracking-wider uppercase rounded-none shadow-2xl hover:shadow-red-500/25"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
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
              <div className="px-6 py-8 space-y-6">
                {['Home', 'About', 'Practice Areas', 'Our Team', 'Success Stories', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block text-gray-700 hover:text-red-600 font-medium text-lg py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full py-4 bg-red-600 text-white font-medium">
                  Free Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-20"></div>
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 mb-8">
                <div className="h-px w-12 bg-red-600"></div>
                <span className="text-red-500 text-sm tracking-widest uppercase font-sans">ESTABLISHED 2008</span>
                <div className="h-px w-12 bg-red-600"></div>
              </div>
              
              <h5 className="text-red-500 font-medium text-lg mb-6 tracking-wider">GET PROFESSIONAL LEGAL SUPPORT</h5>
              
              <motion.h1 
                className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Whether you need <span className="text-red-500">trademark</span> registration, <span className="text-red-500">patent</span> protection, or court representation, our expert advocates deliver excellence.
              </motion.h1>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6 mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-medium text-lg tracking-wide shadow-2xl hover:shadow-red-500/30 transition-all duration-300">
                  Book Free Consultation →
                </button>
                <button className="px-10 py-5 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-medium text-lg tracking-wide transition-all duration-300">
                  View Case Studies
                </button>
              </motion.div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Why Clients Trust Us</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-gray-300 text-sm">
                  <span className="text-red-500 font-bold">24/7 Emergency Legal Support:</span> 
                  <br />Call +91 8696466424 for urgent legal assistance
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="text-white text-center">
            <div className="text-sm mb-2 tracking-wider">SCROLL TO EXPLORE</div>
            <div className="h-8 w-px bg-red-500 mx-auto"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section with Excellence */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 h-24 w-24 border-t-2 border-l-2 border-red-600"></div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 border-b-2 border-r-2 border-red-600"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-12 shadow-2xl">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                    Trusted Advocates for <span className="text-red-500">Intellectual Property</span> & Corporate Legal Solutions
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    Legalese Law Firm is a premier full-service law firm based in Jaipur, delivering expert legal counsel across Trademarks, Copyrights, Patents, Industrial Designs, Cyber Law, RERA, and Corporate Advisory. With distinguished presence at Rajasthan High Court, we blend strategic expertise with unwavering ethics to protect your business in today&apos;s complex legal landscape.
                  </p>
                  <button className="px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium tracking-wide transition-all duration-300">
                    Meet Our Legal Team →
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Trademark Excellence", desc: "End-to-end brand protection strategies", icon: "®" },
                { title: "Patent Prosecution", desc: "Comprehensive invention safeguarding", icon: "⚙️" },
                { title: "Cyber Law Defense", desc: "Digital asset protection & compliance", icon: "🔒" },
                { title: "Corporate Advisory", desc: "Strategic business legal solutions", icon: "🏛️" }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white p-8 shadow-2xl border-t-4 border-red-600"
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas - Premium Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center mb-6">
              <div className="h-px w-16 bg-red-600"></div>
              <span className="mx-4 text-red-600 text-sm tracking-widest uppercase font-sans">LEGAL EXPERTISE</span>
              <div className="h-px w-16 bg-red-600"></div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Legal Practice Areas</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Specialized legal services designed to protect your business, innovations, and creative works
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, idx) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -15 }}
                className="group relative bg-white shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/600x400/1a1a1a/ffffff?text=${encodeURIComponent(area.title.substring(0, 20))}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="h-14 w-14 bg-red-600 text-white text-2xl flex items-center justify-center">
                      {area.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {area.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center text-gray-700">
                        <div className="h-1.5 w-1.5 bg-red-600 mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="text-red-600 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Explore Service
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Court Representation Excellence */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-24">
                <div className="inline-flex items-center mb-8">
                  <div className="h-px w-12 bg-red-600"></div>
                  <span className="mx-4 text-red-500 text-sm tracking-widest uppercase font-sans">COURT EXCELLENCE</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  Strong Court Representation & Legal Advocacy
                </h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  Our seasoned advocates provide formidable representation across all judicial forums, combining litigation prowess with strategic advisory to secure optimal outcomes for our clients.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {[
                    { value: "15+", label: "Years High Court Experience" },
                    { value: "95%", label: "Case Success Rate" },
                    { value: "500+", label: "IP Cases Handled" },
                    { value: "24/7", label: "Emergency Support" }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-6 bg-white/5 rounded-lg">
                      <div className="text-3xl font-bold text-red-500 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-red-900/20 to-transparent p-8 border-l-4 border-red-600"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Primary Jurisdictions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {courtRepresentations.slice(0, 6).map((court, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-center p-4 bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="h-2 w-2 bg-red-500 mr-3"></div>
                      <span className="text-gray-300">{court}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-gray-800/20 to-transparent p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Regulatory Authorities</h3>
                <div className="flex flex-wrap gap-3">
                  {["IP India", "RERA Rajasthan", "SEBI", "MCA", "NCLT", "Copyright Office", "Patent Office", "Trademark Registry"].map((auth, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/10 text-gray-300 text-sm rounded-full">
                      {auth}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-red-900/30 to-transparent p-8 border border-red-900/30"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Why Our Court Representation Stands Out</h3>
                <ul className="space-y-4">
                  {[
                    "Strategic case assessment & preparation",
                    "Experienced in complex IP litigation",
                    "Strong negotiation & settlement skills",
                    "Regular case progress updates",
                    "Multilingual representation capability"
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
            <p className="text-gray-600 text-xl">Trusted by businesses and innovators across India</p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-12 shadow-2xl border-l-8 border-red-600"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-8">
                    <div className="h-20 w-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < testimonials[activeTestimonial].rating ? 'text-red-500' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 text-2xl italic mb-8 leading-relaxed">
                      &quot;{testimonials[activeTestimonial].content}&quot;
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-gray-600">{testimonials[activeTestimonial].position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-12 space-x-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 transition-all duration-300 ${idx === activeTestimonial ? 'w-12 bg-red-600' : 'w-6 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Premium */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-8">Get In Touch With Our Legal Team</h2>
                <p className="text-gray-600 text-lg">
                  Schedule a confidential consultation with our expert advocates to discuss your legal requirements.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-red-100 flex items-center justify-center mr-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Office Locations</h3>
                    <p className="text-gray-600">Corporate Office: Kamla Kunj, 482, OBC Colony, Jagatpura, Jaipur, Rajasthan</p>
                    <p className="text-gray-600 mt-2">Head Office: 285 Sector-14, Gurugram, Haryana 122001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-red-100 flex items-center justify-center mr-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Numbers</h3>
                    <p className="text-gray-600">+91 8696466424</p>
                    <p className="text-gray-600">+91 7827973775</p>
                    <p className="text-sm text-red-600 mt-2">24/7 Emergency Legal Support Available</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-red-100 flex items-center justify-center mr-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Addresses</h3>
                    <p className="text-gray-600">legaleseipr@gmail.com</p>
                    <p className="text-gray-600">info@jaipurrera.com</p>
                  </div>
                </div>
              </div>

              {/* Warning Notice */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-red-50 border-l-4 border-red-600 p-6"
              >
                <h4 className="text-red-800 font-bold text-lg mb-3">⚠ IMPORTANT LEGAL NOTICE</h4>
                <p className="text-red-700 text-sm">
                  Beware of fraudulent websites offering cheap trademark registration. The Trademark Authority has banned 17 websites vide notice dated 7.2.2026. Only registered advocates are authorized to file trademark applications. Always verify credentials before engaging legal services.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow-2xl p-12 border border-gray-100"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Schedule a Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full p-4 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                      placeholder="Full Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="w-full p-4 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full p-4 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Select Legal Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                    className="w-full p-4 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                  >
                    <option value="">Choose a service</option>
                    <option value="trademark">Trademark Registration & Protection</option>
                    <option value="copyright">Copyright Law Services</option>
                    <option value="patent">Patent Registration & Prosecution</option>
                    <option value="design">Industrial Design Registration</option>
                    <option value="cyber">Cyber Law & Technology</option>
                    <option value="rera">RERA & Corporate Advisory</option>
                    <option value="litigation">Court Representation & Litigation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Case Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    required
                    className="w-full p-4 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                    placeholder="Briefly describe your legal requirements..."
                  />
                </div>
                
                <div className="bg-gray-50 p-6">
                  <label className="block text-gray-700 text-sm font-medium mb-3">Security Verification *</label>
                  <p className="text-gray-600 mb-4">What is 4 + 6 ?</p>
                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                    required
                    className="w-full p-4 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                    placeholder="Enter the answer"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium text-lg tracking-wide shadow-2xl hover:shadow-red-500/30 transition-all duration-300"
                >
                  Submit Legal Inquiry →
                </motion.button>
                
                <p className="text-gray-500 text-sm text-center mt-6">
                  We respect your privacy. All information shared is strictly confidential and protected under attorney-client privilege.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center mb-8">
                <div className="h-14 w-14 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-2xl font-bold">LLF</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">LEGALESE</h3>
                  <p className="text-gray-400 text-sm">LAW FIRM | EST. 2008</p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Premier legal advocates specializing in intellectual property, corporate law, and litigation. Protecting innovation and business interests with excellence and integrity.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="h-10 w-10 bg-white/10 hover:bg-red-600 flex items-center justify-center rounded-full transition-all duration-300">
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-8">Practice Areas</h4>
              <ul className="space-y-4">
                {practiceAreas.slice(0, 5).map((area) => (
                  <li key={area.id}>
                    <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                      {area.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xl font-bold mb-8">Legal Resources</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Trademark Search", "IP India", "Copyright Status", "Patent Search",
                  "Design Registry", "RERA Portal", "MCA Website", "Startup India"
                ].map((resource) => (
                  <a key={resource} href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300">
                    {resource}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-bold mb-8">Legal Insights</h4>
              <p className="text-gray-400 mb-6">Subscribe to our legal newsletter for updates on IP law and corporate regulations.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow p-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none"
                />
                <button className="px-6 bg-red-600 hover:bg-red-700 transition-all duration-300">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Legalese Law Firm | Jaipur. All Rights Reserved. | <a href="#" className="hover:text-red-500">Privacy Policy</a> | <a href="#" className="hover:text-red-500">Terms of Service</a>
              </p>
              <p className="text-gray-400 text-sm">
                Bar Council Registration: RJ/2025/LLF
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignOne;