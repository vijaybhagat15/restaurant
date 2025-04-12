import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const partners = [
  {
    title: "TechNova",
    description:
      "Pioneering cloud computing and AI solutions to accelerate digital transformation.",
    logoUrl: "https://logo.clearbit.com/microsoft.com", // Tech
  },
  {
    title: "CodeSphere",
    description:
      "Enabling scalable web applications with cutting-edge software engineering services.",
    logoUrl: "https://logo.clearbit.com/github.com", // Tech
  },
  {
    title: "HealthBridge",
    description:
      "Providing innovative healthcare platforms that improve patient care and access.",
    logoUrl: "https://logo.clearbit.com/healthline.com", // Health
  },
  {
    title: "MediCore",
    description:
      "Delivering advanced medical analytics and telehealth solutions for remote care.",
    logoUrl: "https://logo.clearbit.com/clevelandclinic.org", // Health
  },
  {
    title: "FinEdge",
    description:
      "Delivering smarter financial tools and services for businesses and individuals.",
    logoUrl: "https://logo.clearbit.com/paypal.com", // Finance
  },
  {
    title: "WealthFlow",
    description:
      "Empowering users to manage investments and track expenses with ease and security.",
    logoUrl: "https://logo.clearbit.com/robinhood.com", // Finance
  },
  {
    title: "DineWell",
    description:
      "Helping restaurants streamline operations and elevate customer dining experiences.",
    logoUrl: "https://logo.clearbit.com/doordash.com", // Restaurant
  },
  {
    title: "Forkify",
    description:
      "Connecting food lovers to local restaurants through seamless online reservations.",
    logoUrl: "https://logo.clearbit.com/opentable.com", // Restaurant
  },
];


const Section5 = () => {
  const { ref, inView: isInView } = useInView({triggerOnce: false,threshold: 0.2,});
  return (
<div ref={ref} >
<section className="relative py-2 sm:py-10 text-secondary border-b-2 border-gray-200">
      {/* Background SVG */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/path-to-svg.svg')" }}
      ></div>

      <div className="relative text-center px-4">
        <motion.h2
          className="text-3xl font-bold text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Partners
        </motion.h2>

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                whileHover="hover"
                className="relative w-72 p-[2px] rounded-xl"
              >
                {/* Card Content */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative z-10 rounded-xl bg-white p-6 text-center shadow-md hover:shadow-xl border border-transparent hover:border-yellow-500 hover:border-2 transition-all duration-300 ease-in-out"
                >
                  <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full p-2">
                    <img
                      src={partner.logoUrl}
                      alt={`${partner.title} Logo`}
                      className="w-full h-full object-contain bg-white rounded-full"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-primary">
                    {partner.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">{partner.description}</p>
                </motion.div>
              </motion.div>
            ))}

          </div>
      </div>
    </section>
</div>
  );
};

export default Section5;
