import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section5 from "../components/Sections_for_Home/Section5";
const About = () => {
  
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="text-black border-y-2 border-white text-secondary">
    <section className="bg-gray-100 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <img
            src="images\section4\img1.jpg" // Update this with your actual image path
            alt="How Maison Flavour works"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">What is Maison Flavour?</h2>
          <p className="text-secondary mb-4">
            Maison Flavour is a B2B platform crafted to connect restaurants and food businesses with premium suppliers. 
            We simplify procurement by offering a curated marketplace, seamless ordering, and transparent pricing.
          </p>
          <p className="text-secondary  mb-6">
            Explore how Maison Flavour empowers your kitchen — from sourcing quality ingredients to managing vendor relationships, 
            all in one place. Grow smarter, cook better.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-bg font-semibold px-6 py-3 rounded-md transition-colors">
              Request a Demo
            </button>
            <button className="btn-bg font-semibold px-6 py-3 rounded-md transition-colors">
              Join for Free
            </button>
          </div>
        </div>
      </div>
    </section>
      <div className="container mx-auto px-6 py-16 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl text-primary font-bold">Our Journey</h2>
            <p className="mt-6 text-center md:text-left text-secondary leading-relaxed">
            Maison Flavour was founded with a vision to revolutionize the way restaurants connect with quality suppliers.
            Our platform is committed to excellence in sourcing, transparency in pricing, and innovation in streamlining the B2B food supply chain.
            </p>
            <p className="mt-4 text-center md:text-left text-secondary leading-relaxed">
            With a curated network of trusted suppliers and a seamless digital experience, we strive to create a platform where restaurants can discover, order, and grow with confidence in every connection.
            </p>
          </motion.div>
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center bg-teal-500 rounded-3xl p-[1px]"
          >
            <img
              src="public\images\section4\img3.avif"
              alt="Our Campus"
              className="rounded-3xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl text-primary font-bold">Our Mission</h2>
          <p className="mt-6 text-secondary leading-relaxed max-w-3xl mx-auto">

          Our mission is to build a reliable and inclusive platform that empowers restaurants to source premium ingredients effortlessly. We aim to support culinary innovation and operational growth through trust, transparency, and technology.
          </p>
        </motion.div>

        <Section5 />
<section className="bg-primary py-12 px-6 md:px-20">
  <div className="max-w-5xl mx-auto flex flex-col gap-12">
    {/* India HQ */}
    <div className="flex flex-col md:flex-row gap-6 items-center">
      <img
        src="images/section4/img3.avif"
        alt="Maison Flavour India Office"
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
      <div className="text-center md:text-left md:pl-20">
        <h3 className="text-2xl text-primary font-bold mb-2">Bangalore (India HQ)</h3>
        <p className="text-sm text-secondary font-semibold">Address</p>
        <p className="mb-2 text-secondary">
          #21, 2nd Floor, Indiranagar<br />
          Bangalore, Karnataka 560038<br />
          India
        </p>
        <p className="text-sm text-secondary font-semibold">Phone</p>
        <a href="tel:+918050123456" className="text-yellow-600 font-medium hover:underline">
          +91 80501 23456
        </a>
      </div>
    </div>

    {/* UAE HQ */}
    <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
      <img
        src="images/section4/img4.jpg"
        alt="Maison Flavour UAE Office"
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
      <div className="text-center md:text-left md:pr-20">
        <h3 className="text-2xl text-primary font-bold mb-2">Dubai (UAE HQ)</h3>
        <p className="text-sm text-secondary font-semibold">Address</p>
        <p className="mb-2 text-secondary">
          Maison Flavour HQ<br />
          Jumeirah Lake Towers, Cluster T<br />
          Dubai, United Arab Emirates
        </p>
        <p className="text-sm text-secondary font-semibold">Phone</p>
        <a href="tel:+97145501234" className="text-yellow-600 font-medium hover:underline">
          +971 4 550 1234
        </a>
      </div>
    </div>

  </div>
</section>


    
      </div>
    </div>
  );
};

export default About;
