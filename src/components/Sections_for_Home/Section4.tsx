import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Section4 = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 border-gray-200 border-b-2 max-w-screen-2xl mx-auto">
      {/* Left Column */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }} 
        transition={{ duration: 1 }}
        className="text-center md:text-left"
        ref={ref}
      >
        <div className="flex justify-center lg:justify-start mb-4">
          <img src="images\logo.png" alt="10 Years Celebration" className="w-64" />
        </div>
        <div className="justify-center">
          <h2 className="text-2xl mb-4 text-primary w-64 mx-auto lg:mx-0 font-semibold">At Maison Flavour</h2>
          <p className="text-secondary mb-6 ">
          At Maison Flavour, we nurture an atmosphere of warmth and collaboration, where our team
           and guests come together to celebrate exceptional dining experiences. Our approach focuses
            on optimizing every element—from thoughtfully designed spaces and premium ingredients to
             innovative culinary techniques—ensuring that every visit is both delightful and memorable.
          </p>
          <button className=" px-4 py-2 rounded btn-bg transition mx-auto hover:scale-105">
            LEARN MORE
          </button>
        </div>
      </motion.div>
      
      {/* Right Column - Image Grid */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }} 
        transition={{ duration: 1 }}
        className="lg:grid lg:grid-rows-2 lg:grid-cols-2 gap-1 "
      >
<div className="col-span-2 h-48 transition-transform duration-300 ease-in-out hover:scale-105">
          <img src="images/section4/img4.jpg" alt="Video Thumbnail" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-48 transition-transform duration-300 ease-in-out hover:scale-105">
        <img src="images/section4/img1.jpg" alt="Kids Playing" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-48 transition-transform duration-300 ease-in-out hover:scale-105">
        <img src="images/section4/img2.avif" alt="Girl Learning" className="w-full h-full object-cover rounded-lg" />
        </div>
<div className="col-span-2 h-48 transition-transform duration-300 ease-in-out hover:scale-105">
          <img src="images/section4/img3.avif" alt="STEM Activity" className="w-full h-full object-cover rounded-lg" />
        </div>
      </motion.div>
    </section>
  );
};

export default Section4;
