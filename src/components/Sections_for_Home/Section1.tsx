import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "images/section1/img1.jpg",
    title: "Welcome to Maison Flavour",
    description: "Indulge in an exquisite dining experience where taste meets elegance, ambiance embraces comfort, and every visit feels like a special occasion.",
  },
  {
    image: "images/section1/img2.jpg",
    title: "Savor Every Moment",
    description: "From farm-fresh ingredients to masterful presentation and warm hospitality, every dish at Maison Flavour is crafted to delight your senses and create lasting memories.",
  },
  {
    image: "images/section1/img3.jpg",
    title: "Crafted for Culinary Delight",
    description: "Join us on a flavorful journey where tradition meets innovation, and every plate tells a story of passion, culture, and culinary craftsmanship.",
  },
];





const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [loaderWidth, setLoaderWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    setLoaderWidth(0);
    const loaderInterval = setInterval(() => {
      setLoaderWidth((prev) => (prev < 100 ? prev + 1.67 : 100));
    }, 100);
    return () => clearInterval(loaderInterval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[600px] md:h-[400px] lg:h-[500px] overflow-hidden max-w-screen-2xl mx-auto">
<AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="absolute inset-0 w-full h-full flex items-center sm:justify-start justify-center text-left bg-cover bg-center p-12 sm:p-28"
    style={{
      backgroundImage: `url(${slides[index].image})`,
      transition: "background-image 0.8s ease-in-out",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-500"></div>
    <div className="relative text-white max-w-lg drop-shadow-lg">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide animate-fadeIn">
        {slides[index].title}
      </h1>
      <p className="mt-6 text-lg font-medium leading-relaxed">
        {slides[index].description}
      </p>
      <button className="mt-8 btn-bg font-semibold px-4 py-2 rounded-xl text-lg shadow-md transition-transform transform hover:scale-105">
        Learn More
      </button>
    </div>
  </motion.div>
</AnimatePresence>




      {/* Left Arrow */}
      <button onClick={prevSlide} className="absolute sm:left-4 left-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 sm:p-3 rounded-full text-white">
        <FaChevronLeft size={16} />
      </button>
      {/* Right Arrow */}
      <button onClick={nextSlide} className="absolute sm:right-4 right-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 sm:p-3 rounded-full text-white">
        <FaChevronRight size={16} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex space-x-2 left-1/2 transform -translate-x-1/2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>

      {/* Loader UI */}
      <div className="absolute bottom-0 left-0 w-full bg-black border-t-2 border-gray-800">
        <div className="relative mx-auto h-2 w-full bg-gray-600">
          <div className="absolute h-2 bg-black transition-all" style={{ width: `${loaderWidth}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
