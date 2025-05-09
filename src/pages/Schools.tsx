import { useState } from "react";
import { motion } from "framer-motion";

const schoolsData = {
  Bangalore: [
    { name: "NovaStar Primary School", image: "/images/school1/PrimarySchool.avif" },
    { name: "NovaStar Middle School", image: "/images/school1/PrimarySchool.avif" },
    { name: "NovaStar High School", image: "/images/school1/s3.avif" },
  ],
  Mumbai: [
    { name: "NovaStar Public School", image: "/images/school1/PrimarySchool.avif" },
    { name: "NovaStar International School", image: "/images/school1/PrimarySchool.avif" },
    { name: "NovaStar Senior Secondary", image: "/images/school1/s3.avif" },
  ],
  Delhi: [
    { name: "NovaStar Academy Primary", image: "/images/school1/PrimarySchool.avif" },
    { name: "NovaStar Academy Middle", image: "/images/school1/PrimarySchool.avif" },
    { name: "NovaStar Academy High", image: "/images/school1/s3.avif" },
  ],
};

const Schools = () => {
  // ✅ Ensures `selectedRegion` can only be one of "Bangalore", "Mumbai", or "Delhi"
  const [selectedRegion, setSelectedRegion] = useState<keyof typeof schoolsData>("Bangalore");

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <motion.div 
                    className="bg-teal-100 text-primary p-6 rounded-lg mb-6 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-2xl font-bold">Join NovaStar Academy Today</h2>
                    <p className="mt-2">Empowering students with quality education from primary to senior secondary level across India.</p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="mt-4 bg-white text-primary px-6 py-2 rounded-full "
                    >
                      Enroll Now
                    </motion.button>
                  </motion.div>
        {/* Region Selection Buttons */}
        <div className="flex justify-center space-x-6 mb-6">
          {Object.keys(schoolsData).map((region) => (
            <motion.button
              key={region}
              className={`px-4 py-2 rounded-full ${
                selectedRegion === region ? "bg-teal-700 text-white" : "bg-white text-teal-700 border border-teal-700"
              }`}
              onClick={() => setSelectedRegion(region as keyof typeof schoolsData)}
              whileHover={{ scale: 1.1 }}
            >
              {region}
            </motion.button>
          ))}
        </div>

        {/* School List */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          {schoolsData[selectedRegion].map((school, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img src={school.image} alt={school.name} className="h-64 w-64 rounded-lg" />
              <h3 className=" text-secondary">{school.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Schools;
