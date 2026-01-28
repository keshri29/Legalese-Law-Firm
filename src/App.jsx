import  { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import { Routes, Route, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Car,
   Droplets,
   ChevronRight,
  Quote,
  Menu,
  X,
  Calendar,
  Users,
  Award,
  ShieldCheck,
  Sparkles,
  Play,
  IndianRupee,
  Navigation,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import GalleryPage from "./GalleryPage";

function App() {
  const [selectedService, setSelectedService] = useState("washing");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [showVideo, setShowVideo] = useState(false);

  const openDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=CARS+CARE24+Automatic+car+wash+%26+Repair+Workshop%2C+149%2C+Mahaveer+nagar%2C+Mansarover%2C+Jaipur%2C+Rajasthan+302020",
      "_blank",
    );
  };

  const services = {
    washing: {
      title: "Automatic Car Wash",
      description:
        "State-of-the-art automatic washing system that cleans your car thoroughly in just 15 minutes using advanced soft-touch technology.",
      features: [
        "Foam Wash & Rinse",
        "Underbody Cleaning",
        "Tire & Wheel Cleaning",
        "Hot Air Drying",
        "Liquid Wax Coating",
        "Interior Vacuuming",
      ],
      image: "/img.jpg",
      pricing: [
        { type: "Hatchback", price: "₹399", time: "15 min" },
        { type: "Sedan", price: "₹499", time: "18 min" },
        { type: "SUV", price: "₹599", time: "20 min" },
        { type: "Premium", price: "₹799", time: "25 min" },
      ],
    },
    repair: {
      title: "Car Repair & Service",
      description:
        "Professional repair services by certified mechanics with genuine parts and 6 months warranty on all repairs.",
      features: [
        "AC Repair & Gas Refill",
        "Engine Diagnostics",
        "Brake & Suspension",
        "Electrical Work",
        "Full Car Service",
        "Dent & Paint",
      ],
      image: "/img1.webp",
      pricing: [
        {
          type: "Basic Service",
          price: "₹1,499",
          includes: "Oil Change + Basic Check",
        },
        {
          type: "Premium Service",
          price: "₹2,999",
          includes: "Complete Checkup",
        },
        { type: "AC Service", price: "₹1,999", includes: "Gas + Cleaning" },
        { type: "Brake Service", price: "₹1,799", includes: "Pads + Labour" },
      ],
    },
    detailing: {
      title: "Premium Car Detailing",
      description:
        "Showroom-like finish with ceramic coating, paint protection, and deep interior cleaning.",
      features: [
        "Ceramic Coating",
        "Paint Protection",
        "Interior Deep Clean",
        "Glass Polish",
        "Leather Conditioning",
        "Engine Bay Cleaning",
      ],
      image: "/img2.jpg",
      pricing: [
        { type: "Basic Detailing", price: "₹2,999", time: "2 hours" },
        { type: "Premium Detailing", price: "₹4,999", time: "4 hours" },
        { type: "Ceramic Coating", price: "₹9,999", time: "6 hours" },
        { type: "Complete Package", price: "₹14,999", time: "8 hours" },
      ],
    },
  };

  const teamMembers = [
    { name: "Manoj Sharma", role: "Founder & CEO", experience: "15+ years" },
    { name: "Kishan Bharti", role: "Car Advisor", experience: "8+ years" },
    { name: "Ganesh Kumar", role: "Head Mechanic", experience: "12+ years" },
    {
      name: "Bharat Saini",
      role: "Service Supervisor",
      experience: "10+ years",
    },
    { name: "Yogendra Singh", role: "Wash Specialist", experience: "6+ years" },
  ];

  const reviews = [
    {
      name: "Archit Goyal",
      rating: 5,
      text: "The automatic wash removed all dirt, leaving my car spotless. The wax gave it a glossy shine. Quick, efficient, and highly recommended for instant car rejuvenation!",
      date: "2 weeks ago",
      car: "Hyundai Creta",
    },
    {
      name: "Naveen Takhar",
      rating: 4,
      text: "Great experience with cars care24. Nice staff and professional service. The automatic wash is truly impressive!",
      date: "1 month ago",
      car: "Maruti Suzuki Swift",
    },
    {
      name: "Ashish Sharma",
      rating: 5,
      text: "Super service done by carscare24. Perfect alignment balancing and excellent car washing service. Highly recommended!",
      date: "3 weeks ago",
      car: "Honda City",
    },
    {
      name: "Rajat Choudhary",
      rating: 5,
      text: "One of the best car wash available in mansarovar colony. The only automated car wash nearby 10km. Service quality is top notch!",
      date: "2 months ago",
      car: "Toyota Fortuner",
    },
    {
      name: "Mukul Meena",
      rating: 4,
      text: "Very competitive, courteous and humble staff. They clean cars professionally. Quick service - ready in 15 mins!",
      date: "1 month ago",
      car: "Mahindra XUV700",
    },
    {
      name: "Avdhesh Pratap",
      rating: 5,
      text: "My Thar's turbo issue was fixed perfectly. Mr Manoj cooperated neatly and head mechanic Ganesh explained everything clearly. Excellent work!",
      date: "2 weeks ago",
      car: "Mahindra Thar",
    },
    {
      name: "Sanjay Yadav",
      rating: 5,
      text: "Had AC problem for 2 months, solved in 10 minutes! My car AC is working perfectly now. Amazing technicians!",
      date: "1 week ago",
      car: "Maruti Baleno",
    },
    {
      name: "Prakash Premani",
      rating: 5,
      text: "Excellent & prompt services provided. Found my car like new after a year. Best service in Jaipur!",
      date: "3 weeks ago",
      car: "Hyundai Verna",
    },
  ];

  const features = [
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Quick Service",
      desc: "15-20 min automatic wash",
      highlight: "Fastest in Jaipur",
    },
    {
      icon: <ShieldCheck className="h-12 w-12" />,
      title: "Quality Assurance",
      desc: "Certified professionals",
      highlight: "6 Months Warranty",
    },
    {
      icon: <Droplets className="h-12 w-12" />,
      title: "Modern Equipment",
      desc: "Latest soft-touch technology",
      highlight: "Scratch-Free",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Expert Team",
      desc: "15+ years experience",
      highlight: "Trained Specialists",
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Award Winning",
      desc: "Best Car Wash 2023",
      highlight: "Jaipur's Favorite",
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Premium Finish",
      desc: "Showroom-like shine",
      highlight: "Ceramic Coating",
    },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const BookingModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={() => setIsBookingOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden overflow-y-auto rounded bg-white p-6 shadow-2xl"
      >
        <button
          onClick={() => setIsBookingOpen(false)}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100"
        >
          <X size={24} />
        </button>

        <h3 className="mb-6 text-2xl font-bold text-gray-900">
          <Calendar className="mr-2 inline" size={24} />
          Book Appointment
        </h3>

        <form className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Full Name *
              </label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-red focus:ring-2 focus:ring-primary-red"
              />
            </div>
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                required
                type="tel"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-red focus:ring-2 focus:ring-primary-red"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Car Model *
              </label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-red focus:ring-2 focus:ring-primary-red"
              />
            </div>
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Car Number *
              </label>
              <input
                required
                type="text"
                placeholder="RJ-14-AB-1234"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-red focus:ring-2 focus:ring-primary-red"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Select Service *
            </label>
            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-red focus:ring-2 focus:ring-primary-red">
              <option>Automatic Car Wash</option>
              <option>Car Repair & Service</option>
              <option>Car Detailing</option>
              <option>AC Repair</option>
              <option>Dent & Paint</option>
              <option>Complete Package</option>
            </select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Select Date *
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-red focus:ring-2 focus:ring-primary-red"
              />
            </div>
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Select Time *
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-red focus:ring-2 focus:ring-primary-red"
              >
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Additional Notes
            </label>
            <textarea
              rows="3"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-red focus:ring-2 focus:ring-primary-red"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary-red py-4 font-semibold text-white transition hover:bg-dark-red"
            onClick={(e) => {
              e.preventDefault();
              alert("Appointment Booked Successfully!");
              setIsBookingOpen(false);
            }}
          >
            Confirm Booking - ₹99 Advance
          </button>
        </form>
      </motion.div>
    </motion.div>
  );

  return (
    <Routes>
    <Route path="/gallery" element={<GalleryPage />} />
    <Route
      path="/"
      element={
            <div className="min-h-screen bg-white">
              {isBookingOpen && <BookingModal />}

              {showVideo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                  onClick={() => setShowVideo(false)}
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="relative w-full max-w-4xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setShowVideo(false)}
                      className="absolute -top-12 right-0 rounded-full bg-white p-2 text-black"
                    >
                      <X size={24} />
                    </button>
                    <video
                      autoPlay
                      className="max-h-[70vh] w-full overflow-y-auto rounded-2xl"
                    >
                      <source src="/car-wash-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                </motion.div>
              )}

              <nav className="sticky top-0 z-40 bg-white shadow-lg">
                <div className="container mx-auto px-4">
                  <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Car className="h-10 w-10 text-primary-red" />
                      <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                          CARS CARE<span className="text-primary-red">24</span>
                        </h1>
                        <p className="text-xs text-gray-600">
                          24/7 Automatic Car Wash & Repair
                        </p>
                      </div>
                    </div>

                    <div className="hidden space-x-8 md:flex">
                      <a
                        href="/"
                        className="font-medium text-gray-700 hover:text-primary-red"
                      >
                        Home
                      </a>
                      <a
                        href="#services"
                        className="font-medium text-gray-700 hover:text-primary-red"
                      >
                        Services
                      </a>
                      <a
                        href="#pricing"
                        className="font-medium text-gray-700 hover:text-primary-red"
                      >
                        Pricing
                      </a>
                      <Link to="/gallery" className="font-medium text-gray-700 hover:text-primary-red">
  Gallery
</Link>
                      <a
                        href="#reviews"
                        className="font-medium text-gray-700 hover:text-primary-red"
                      >
                        Reviews
                      </a>
                      <a
                        href="#team"
                        className="font-medium text-gray-700 hover:text-primary-red"
                      >
                        Our Team
                      </a>
                      <a
                        href="#contact"
                        className="font-medium text-gray-700 hover:text-primary-red"
                      >
                        Contact
                      </a>
                    </div>

                    <div className="hidden items-center gap-4 md:flex">
                      <a
                        href="tel:+919876543210"
                        className="rounded-lg bg-primary-red px-6 py-3 font-semibold text-white transition hover:bg-dark-red"
                      >
                        <Phone size={20} className="mr-2 inline" />
                        +91 98765 43210
                      </a>
                    </div>

                    <button
                      className="md:hidden"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                  </div>

                  {isMenuOpen && (
                    <div className="border-t bg-white py-4 md:hidden">
                      <div className="flex flex-col space-y-4 px-4">
                        <a
                          href="#home"
                          className="font-medium text-gray-700 hover:text-primary-red"
                        >
                          Home
                        </a>
                        <a
                          href="#services"
                          className="font-medium text-gray-700 hover:text-primary-red"
                        >
                          Services
                        </a>
                        <a
                          href="#pricing"
                          className="font-medium text-gray-700 hover:text-primary-red"
                        >
                          Pricing
                        </a>
                        <a
                          href="#reviews"
                          className="font-medium text-gray-700 hover:text-primary-red"
                        >
                          Reviews
                        </a>
                        <a
                          href="#team"
                          className="font-medium text-gray-700 hover:text-primary-red"
                        >
                          Our Team
                        </a>
                        <a
                          href="#contact"
                          className="font-medium text-gray-700 hover:text-primary-red"
                        >
                          Contact
                        </a>
                        <a
                          href="tel:+919876543210"
                          className="rounded-lg bg-primary-red py-3 text-center font-semibold text-white"
                        >
                          Call Now
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </nav>

              <section
                id="home"
                className="relative overflow-hidden bg-gradient-to-r from-red-50 to-white py-20"
              >
                <div className="container relative mx-auto px-4">
                  <div className="grid items-center gap-12 lg:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1 className="mb-6 text-5xl font-bold text-gray-900 lg:text-6xl">
                        Premium{" "}
                        <span className="text-primary-red">Automatic</span> Car
                        Care
                      </h1>
                      <p className="mb-8 text-xl text-gray-600">
                        Jaipur&apos;s most advanced automatic car wash with
                        professional repair services. Experience scratch-free
                        cleaning with latest soft-touch technology.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="flex items-center gap-2 rounded-lg bg-primary-red px-8 py-4 font-semibold text-white transition hover:bg-dark-red"
                        >
                          Book Appointment
                          <ChevronRight size={20} />
                        </button>
                        <button
                          onClick={openDirections}
                          className="flex items-center gap-2 rounded-lg border-2 border-primary-red px-8 py-4 font-semibold text-primary-red transition hover:bg-light-red"
                        >
                          <Navigation size={20} />
                          Get Directions
                        </button>
                      </div>

                      <div className="mt-12 grid grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary-red">
                            15K+
                          </div>
                          <div className="text-sm text-gray-600">
                            Cars Washed
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary-red">
                            4.2★
                          </div>
                          <div className="text-sm text-gray-600">
                            Google Rating
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary-red">
                            15min
                          </div>
                          <div className="text-sm text-gray-600">
                            Avg. Wash Time
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <img
                        src="/img.jpg"
                        alt="Automatic Car Wash"
                        className="rounded-2xl shadow-2xl"
                      />
                      <button
                        onClick={() => setShowVideo(true)}
                        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl transition hover:scale-110"
                      >
                        <Play
                          className="h-10 w-10 text-primary-red"
                          fill="currentColor"
                        />
                      </button>
                      <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-2 shadow-xl">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-light-red p-2">
                            <Star className="text-primary-red" size={30} />
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-gray-900">
                              4.2/5
                            </p>
                            <p className="text-gray-600">200+ Reviews</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              <section id="features" className="py-20">
                <div className="container mx-auto px-4">
                  <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">
                      Why Choose{" "}
                      <span className="text-primary-red">CARS CARE24</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                      Premium car care with guaranteed satisfaction
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
                      >
                        <div className="mb-4 inline-block rounded-full bg-light-red p-4">
                          <div className="text-primary-red">{feature.icon}</div>
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="mb-2 text-gray-600">{feature.desc}</p>
                        <span className="text-sm font-semibold text-primary-red">
                          {feature.highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="services" className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                  <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">
                      Our <span className="text-primary-red">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                      Complete car care solutions under one roof
                    </p>
                  </div>

                  <div className="mb-12 flex flex-wrap justify-center gap-4">
                    {Object.keys(services).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedService(key)}
                        className={`rounded-lg px-6 py-3 font-semibold transition ${selectedService === key ? "bg-primary-red text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
                      >
                        {services[key].title}
                      </button>
                    ))}
                  </div>

                  <motion.div
                    key={selectedService}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid items-start gap-12 lg:grid-cols-2"
                  >
                    <div>
                      <h3 className="mb-6 text-3xl font-bold text-gray-900">
                        {services[selectedService].title}
                      </h3>
                      <p className="mb-8 text-lg text-gray-600">
                        {services[selectedService].description}
                      </p>

                      <div className="mb-8">
                        <h4 className="mb-4 text-xl font-semibold text-gray-900">
                          Includes:
                        </h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {services[selectedService].features.map(
                            (feature, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3"
                              >
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => setIsBookingOpen(true)}
                        className="rounded-lg bg-primary-red px-8 py-3 font-semibold text-white transition hover:bg-dark-red"
                      >
                        Book This Service
                      </button>
                    </div>

                    <div>
                      <img
                        src={services[selectedService].image}
                        alt={services[selectedService].title}
                        className="mb-8 rounded-2xl shadow-xl"
                      />

                      <div className="rounded-2xl bg-white p-6 shadow-lg">
                        <h4 className="mb-4 text-xl font-semibold text-gray-900">
                          <IndianRupee className="mr-2 inline" size={20} />
                          Pricing
                        </h4>
                        <div className="space-y-4">
                          {services[selectedService].pricing.map(
                            (price, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between border-b pb-3"
                              >
                                <div>
                                  <div className="font-medium text-gray-900">
                                    {price.type}
                                  </div>
                                  {price.includes && (
                                    <div className="text-sm text-gray-500">
                                      {price.includes}
                                    </div>
                                  )}
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-primary-red">
                                    {price.price}
                                  </div>
                                  {price.time && (
                                    <div className="text-sm text-gray-500">
                                      {price.time}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              <section id="team" className="bg-white py-20">
                <div className="container mx-auto px-4">
                  <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">
                      Meet Our{" "}
                      <span className="text-primary-red">Expert Team</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                      Certified professionals with years of experience
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {teamMembers.map((member, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className="rounded-2xl bg-white p-6 text-center shadow-lg"
                      >
                        <div className="mb-4 inline-block rounded-full bg-light-red p-2">
                          <Users className="h-12 w-12 text-primary-red" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="mb-2 text-gray-600">{member.role}</p>
                        <div className="inline-block rounded-full bg-primary-red px-4 py-1 text-sm font-semibold text-white">
                          {member.experience}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="reviews" className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                  <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">
                      Customer <span className="text-primary-red">Reviews</span>
                    </h2>
                    <p className="mb-8 text-xl text-gray-600">
                      What our customers say about us
                    </p>
                    <div className="inline-flex items-center rounded-full bg-white px-6 py-3 shadow">
                      <Star className="mr-2 h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-bold">4.2</span>
                      <span className="mx-2">/</span>
                      <span className="text-gray-600">
                        5.0 from 200+ reviews
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-2xl bg-white p-6 shadow-lg"
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-gray-900">
                              {review.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {review.car} • {review.date}
                            </p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={18}
                                className={
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex">
                          <Quote className="h-5 w-5 rotate-180 text-primary-red" />
                          <p className="flex-1 px-2 text-gray-600">
                            {review.text}
                          </p>
                          <Quote className="h-5 w-5 self-end text-primary-red" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="contact" className="bg-white py-20">
                <div className="container mx-auto px-4">
                  <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-red-50 to-white p-8 shadow-xl md:p-12">
                    <div className="grid gap-12 lg:grid-cols-2">
                      <div>
                        <h2 className="mb-6 text-4xl font-bold text-gray-900">
                          Contact <span className="text-primary-red">Us</span>
                        </h2>
                        <p className="mb-8 text-lg text-gray-600">
                          Visit our workshop or book an appointment for premium
                          car care services
                        </p>

                        <div className="space-y-6">
                          <div className="flex items-start gap-4">
                            <div className="rounded-full bg-light-red p-3">
                              <MapPin className="h-6 w-6 text-primary-red" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">
                                Address
                              </h4>
                              <p className="mb-2 text-gray-600">
                                149, Mahaveer Nagar, Mansarover,
                                <br />
                                Jaipur, Rajasthan 302020
                              </p>
                              <button
                                onClick={openDirections}
                                className="flex items-center gap-2 text-primary-red hover:text-dark-red"
                              >
                                <Navigation size={16} />
                                Open in Google Maps
                              </button>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="rounded-full bg-light-red p-3">
                              <Phone className="h-6 w-6 text-primary-red" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">Phone</h4>
                              <a
                                href="tel:+919876543210"
                                className="block text-gray-600 hover:text-primary-red"
                              >
                                +91 98765 43210
                              </a>
                              <a
                                href="tel:+911234567890"
                                className="text-gray-600 hover:text-primary-red"
                              >
                                +91 12345 67890
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="rounded-full bg-light-red p-3">
                              <Mail className="h-6 w-6 text-primary-red" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">Email</h4>
                              <a
                                href="mailto:info@carscare24.com"
                                className="text-gray-600 hover:text-primary-red"
                              >
                                info@carscare24.com
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="rounded-full bg-light-red p-3">
                              <Clock className="h-6 w-6 text-primary-red" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">
                                Working Hours
                              </h4>
                              <p className="text-gray-600">
                                <span className="font-semibold">Car Wash:</span>{" "}
                                24/7
                                <br />
                                <span className="font-semibold">
                                  Repair Services:
                                </span>{" "}
                                8:00 AM - 10:00 PM
                                <br />
                                <span className="font-semibold">
                                  Sunday:
                                </span>{" "}
                                9:00 AM - 9:00 PM
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 pt-4">
                            <a
                              href="#"
                              className="rounded-full bg-gray-100 p-3 hover:bg-gray-200"
                            >
                              <Facebook className="h-5 w-5" />
                            </a>
                            <a
                              href="#"
                              className="rounded-full bg-gray-100 p-3 hover:bg-gray-200"
                            >
                              <Instagram className="h-5 w-5" />
                            </a>
                            <a
                              href="#"
                              className="rounded-full bg-gray-100 p-3 hover:bg-gray-200"
                            >
                              <Youtube className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white p-8 shadow-lg">
                        <h3 className="mb-6 text-2xl font-bold text-gray-900">
                          <Calendar className="mr-2 inline" size={24} />
                          Quick Booking
                        </h3>
                        <form className="space-y-6">
                          <div>
                            <label className="mb-2 block font-medium text-gray-700">
                              Service Type
                            </label>
                            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-red focus:ring-2 focus:ring-primary-red">
                              <option>Automatic Car Wash</option>
                              <option>Car Repair & Service</option>
                              <option>Car Detailing</option>
                              <option>AC Repair</option>
                              <option>Dent & Paint</option>
                            </select>
                          </div>
                          <div>
                            <label className="mb-2 block font-medium text-gray-700">
                              Car Type
                            </label>
                            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-red focus:ring-2 focus:ring-primary-red">
                              <option>Hatchback (₹399)</option>
                              <option>Sedan (₹499)</option>
                              <option>SUV (₹599)</option>
                              <option>Luxury Car (₹799+)</option>
                            </select>
                          </div>
                          <div>
                            <label className="mb-2 block font-medium text-gray-700">
                              Preferred Time
                            </label>
                            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-red focus:ring-2 focus:ring-primary-red">
                              <option>As Soon as Possible</option>
                              <option>Morning (9 AM - 12 PM)</option>
                              <option>Afternoon (12 PM - 4 PM)</option>
                              <option>Evening (4 PM - 8 PM)</option>
                            </select>
                          </div>
                          <button
                            type="button"
                            onClick={() => setIsBookingOpen(true)}
                            className="w-full rounded-lg bg-primary-red py-4 font-semibold text-white transition hover:bg-dark-red"
                          >
                            Book Now with ₹99 Advance
                          </button>
                          <p className="text-center text-sm text-gray-500">
                            No cancellation charges if cancelled 2 hours before
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <footer className="bg-gray-900 py-12 text-white">
                <div className="container mx-auto px-4">
                  <div className="grid gap-8 md:grid-cols-4">
                    <div>
                      <div className="mb-4 flex items-center space-x-2">
                        <Car className="h-8 w-8 text-primary-red" />
                        <h2 className="text-2xl font-bold">
                          CARS CARE<span className="text-primary-red">24</span>
                        </h2>
                      </div>
                      <p className="text-gray-400">
                        Jaipur&apos;s most advanced automatic car wash with
                        professional repair services. 24/7 service with
                        guaranteed quality.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#home"
                            className="text-gray-400 hover:text-white"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="#services"
                            className="text-gray-400 hover:text-white"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="#pricing"
                            className="text-gray-400 hover:text-white"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#team"
                            className="text-gray-400 hover:text-white"
                          >
                            Our Team
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 text-lg font-bold">Services</h3>
                      <ul className="space-y-2">
                        <li className="text-gray-400">Automatic Car Wash</li>
                        <li className="text-gray-400">Car Repair & Service</li>
                        <li className="text-gray-400">Car Detailing</li>
                        <li className="text-gray-400">AC Repair</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 text-lg font-bold">Contact Info</h3>
                      <div className="space-y-2 text-gray-400">
                        <p>149, Mahaveer Nagar, Mansarover</p>
                        <p>Jaipur, Rajasthan 302020</p>
                        <p>Phone: +91 98765 43210</p>
                        <p>Email: info@carscare24.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">
                      © {new Date().getFullYear()} CARS CARE24. All rights
                      reserved. | GST No: 08AABCC1234D1Z5
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          }
        />
      </Routes> 
  );
}

export default App;
