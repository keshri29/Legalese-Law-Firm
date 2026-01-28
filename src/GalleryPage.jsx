import   { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Video as VideoIcon, Download, Share2, Maximize2, Phone, Car } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  // Sample images and videos data
  const media = [
    // Images
    { id: 1, type: "image", url: "/img.jpg", title: "Automatic Car Wash", category: "washing", featured: true },
    { id: 2, type: "image", url: "/img1.webp", title: "Car Repair Service", category: "repair" },
    { id: 3, type: "image", url: "/img2.jpg", title: "Premium Detailing", category: "detailing" },
    { id: 4, type: "image", url: "/img3.webp", title: "Interior Cleaning", category: "detailing" },
    { id: 5, type: "image", url: "/img4.webp", title: "Underbody Wash", category: "washing" },
    { id: 6, type: "image", url: "/img1.webp", title: "Engine Bay", category: "repair" },
    { id: 7, type: "image", url: "/img2.jpg", title: "Tire Service", category: "repair" },
    { id: 8, type: "image", url: "/img1.webp", title: "Wax Application", category: "washing" },
    { id: 9, type: "image", url: "/img3.webp", title: "AC Repair", category: "repair" },
    { id: 10, type: "image", url: "/img2.jpg", title: "Final Polish", category: "detailing" },
    { id: 11, type: "image", url: "/img3.webp", title: "Before & After", category: "washing", featured: true },
    { id: 12, type: "image", url: "/img2.jpg", title: "Team Work", category: "team" },
    
    // Videos
    { id: 13, type: "video", url: "/videos/wash-process.mp4", title: "Automatic Wash Process", category: "washing", thumbnail: "/img.jpg", featured: true },
    { id: 14, type: "video", url: "/videos/detailing.mp4", title: "Premium Detailing", category: "detailing", thumbnail: "/img2.jpg" },
    { id: 15, type: "video", url: "/videos/repair.mp4", title: "Engine Repair", category: "repair", thumbnail: "/img1.webp" },
    { id: 16, type: "video", url: "/videos/interior.mp4", title: "Interior Cleaning", category: "detailing", thumbnail: "/img3.webp" },
    { id: 17, type: "video", url: "/videos/before-after.mp4", title: "Transformation", category: "washing", thumbnail: "/img10.jpg", featured: true },
  ];

  const categories = [
    { id: "all", label: "All Media", count: media.length },
    { id: "washing", label: "Car Wash", count: media.filter(m => m.category === "washing").length },
    { id: "repair", label: "Repair", count: media.filter(m => m.category === "repair").length },
    { id: "detailing", label: "Detailing", count: media.filter(m => m.category === "detailing").length },
    { id: "team", label: "Our Team", count: media.filter(m => m.category === "team").length },
    { id: "featured", label: "Featured", count: media.filter(m => m.featured).length },
  ];

  const filteredMedia = filter === "all" 
    ? media 
    : filter === "featured"
    ? media.filter(m => m.featured)
    : media.filter(m => m.category === filter);

  const openMedia = (item, index) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredMedia.length;
    } else {
      newIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    }
    setSelectedMedia(filteredMedia[newIndex]);
    setCurrentIndex(newIndex);
  };

  const downloadMedia = () => {
    if (selectedMedia) {
      const link = document.createElement('a');
      link.href = selectedMedia.url;
      link.download = `carscare24-${selectedMedia.title.toLowerCase().replace(/\s+/g, '-')}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const shareMedia = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `CARS CARE24 - ${selectedMedia.title}`,
          text: `Check out this ${selectedMedia.type} from CARS CARE24 - Premium Car Wash & Repair`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Sharing cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const MediaModal = () => (
    <AnimatePresence>
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
          onClick={closeMedia}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeMedia}
              className="absolute -top-12 right-0 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateMedia("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm hover:bg-white/30 lg:-left-12"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => navigateMedia("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm hover:bg-white/30 lg:-right-12"
            >
              <ChevronRight size={28} />
            </button>

            {/* Media container */}
            <div className="relative overflow-hidden rounded-2xl bg-black">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="h-auto max-h-[80vh] w-full object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.url}
                  controls
                  autoPlay
                  className="h-auto max-h-[80vh] w-full"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Media info and controls */}
            <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm lg:flex-row">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{selectedMedia.title}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary-red px-3 py-1 text-sm font-semibold text-white">
                    {selectedMedia.type === "image" ? <ImageIcon size={14} /> : <VideoIcon size={14} />}
                    {selectedMedia.type.toUpperCase()}
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm text-white">
                    {selectedMedia.category}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={downloadMedia}
                  className="flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-white hover:bg-white/30"
                >
                  <Download size={20} />
                  Download
                </button>
                <button
                  onClick={shareMedia}
                  className="flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-white hover:bg-white/30"
                >
                  <Share2 size={20} />
                  Share
                </button>
                <button
                  onClick={() => window.open(selectedMedia.url, '_blank')}
                  className="flex items-center gap-2 rounded-lg bg-primary-red px-4 py-2 text-white hover:bg-dark-red"
                >
                  <Maximize2 size={20} />
                  Fullscreen
                </button>
              </div>
            </div>

            {/* Media counter */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white">
              {currentIndex + 1} / {filteredMedia.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
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
                      </div>

                    </div>
                  </nav>
                    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MediaModal />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-50 to-white py-16">
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="mb-4 text-5xl font-bold text-gray-900">
              Our <span className="text-primary-red">Gallery</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Explore our work through high-quality images and videos showcasing our automatic car wash, 
              repair services, detailing, and team in action.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-lg">
              <ImageIcon className="text-primary-red" size={24} />
              <span className="text-lg font-semibold text-gray-900">
                {media.filter(m => m.type === "image").length} Photos
              </span>
              <span className="text-gray-400">|</span>
              <VideoIcon className="text-primary-red" size={24} />
              <span className="text-lg font-semibold text-gray-900">
                {media.filter(m => m.type === "video").length} Videos
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="sticky top-0 z-30 border-b bg-white/95 py-4 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 font-medium transition ${filter === category.id ? "bg-primary-red text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  {category.label}
                  <span className="rounded-full bg-white/30 px-2 py-0.5 text-sm">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="text-sm text-gray-500">
              Click on any media to view in full screen
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredMedia.length === 0 ? (
          <div className="py-20 text-center">
            <ImageIcon className="mx-auto mb-4 h-16 w-16 text-gray-300" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">No media found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {filteredMedia.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                onClick={() => openMedia(item, filteredMedia.findIndex(m => m.id === item.id))}
              >
                {/* Media container */}
                <div className="relative aspect-square overflow-hidden">
                  {item.type === "image" ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <img
                        src={item.thumbnail || item.url}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 transition-transform group-hover:scale-110">
                          <Play className="h-8 w-8 text-primary-red" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Featured badge */}
                  {item.featured && (
                    <div className="absolute left-3 top-3 rounded-full bg-primary-red px-3 py-1 text-xs font-semibold text-white">
                      Featured
                    </div>
                  )}
                  
                  {/* Type badge */}
                  <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
                    {item.type === "image" ? <ImageIcon size={12} className="inline mr-1" /> : <VideoIcon size={12} className="inline mr-1" />}
                    {item.type}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
                        {item.category}
                      </span>
                      <span className="text-sm">Click to view</span>
                    </div>
                  </div>
                </div>

                {/* Info panel (visible always on mobile) */}
                <div className="p-4 md:hidden">
                  <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{item.category}</span>
                    <span className="text-xs text-primary-red">
                      {item.type === "image" ? "Photo" : "Video"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Featured Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              <span className="text-primary-red">Featured</span> Highlights
            </h2>
            <p className="text-gray-600">Our best work captured in photos and videos</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {media
              .filter(m => m.featured)
              .slice(0, 4)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => openMedia(item, filteredMedia.findIndex(m => m.id === item.id))}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden lg:h-80">
                    {item.type === "image" ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="relative h-full w-full">
                        <img
                          src={item.thumbnail || item.url}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 transition-transform group-hover:scale-110">
                            <Play className="h-10 w-10 text-primary-red" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">
                      {item.type === "image" 
                        ? "High-resolution photo showcasing our premium service quality."
                        : "Watch our professional team in action delivering exceptional service."}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div> 
      <div className="bg-gradient-to-r from-primary-red to-dark-red py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Want to See More?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Follow us on social media for daily updates and behind-the-scenes content
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-white px-8 py-3 font-semibold text-primary-red transition hover:bg-gray-100"
            >
              Visit Instagram
            </a>
            <a
              href="#"
              className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
};

export default GalleryPage;