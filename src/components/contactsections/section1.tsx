import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section1: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });


  return (
    <div className="relative h-[400px] w-full max-w-screen-2xl mx-auto" ref={ref}>
      <img
        src="images/contact/contactbg.avif"
        className="w-full h-full object-cover"
        alt="Contact Background"
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-start justify-center pl-5 sm:pl-20"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Get in Touch</h1>
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Maison Flavour</h1>
        <p className="text-secondary text-lg mt-2 max-w-xl">
          At Maison Flavour, we believe in creating meaningful connections with our guests.
          Whether you have questions, need assistance, or want to share your feedback —
          we’re here for you.
        </p>
      </motion.div>
    </div>
  );
};

export default Section1;
