import { motion } from "framer-motion";
import { Star, Utensils, Heart, Users } from "lucide-react";
import { useInView, } from "react-intersection-observer";
const Section3 = () => {
  const { ref, inView: isInView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const stats = [
    {
      value: "10+",
      text: "Trusted Business Partners Across the Region",
      icon: <Users size={40} className="text-white" />,
      color: "bg-teal-700",
    },
    {
      value: "98%",
      text: "Customer Satisfaction Based on Reviews",
      icon: <Star size={40} className="text-white" />,
      color: "bg-secondary",
    },
    {
      value: "10+",
      text: "Years of Culinary Excellence",
      icon: <Utensils size={40} className="text-white" />,
      color: "bg-teal-700",
    },
    {
      value: "500K+",
      text: "Dishes Served with Passion and Perfection",
      icon: <Heart size={40} className="text-white" />,
      color: "bg-secondary",
    },
  ];
  

  return (
    <section
      ref={ref}
      className="relative py-6 px-6 bg-cover bg-center text-center text-secondary border-gray-200 border-b-2 max-w-screen-2xl mx-auto"
      style={{ backgroundImage: "url('/images/background.svg')" }}
    >
      <h2 className="font-bold text-primary text-2xl">Achievements and Partnerships</h2>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-64"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`w-20 h-20 ${stat.color} rounded-full flex items-center justify-center `}>
              {stat.icon}
            </div>
            <h3 className="font-bold text-base mt-4">{stat.value}</h3>
            <p className="text-base mt-2">{stat.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
