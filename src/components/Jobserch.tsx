import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FaSearchLocation, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

type Job = {
  title: string;
  location: string;
  description?: string;
  type?: string;
  salary?: string;
};

const mockJobs: Job[] = [
  { title: "Chef", location: "New York", type: "Full-Time", salary: "$45,000", description: "Experienced chef for Italian cuisine." },
  { title: "Waiter", location: "San Francisco", type: "Part-Time", salary: "$15/hr", description: "Friendly and fast-paced environment." },
  { title: "Restaurant Manager", location: "London", type: "Full-Time", salary: "$60,000", description: "Lead a team and manage operations." },
  { title: "Bartender", location: "Berlin", type: "Evening Shift", salary: "$20/hr" },
  { title: "Dishwasher", location: "Remote", type: "Contract", salary: "$10/hr" },
];

const uniqueTitles = [...new Set(mockJobs.map((job) => job.title))];
const uniqueLocations = [...new Set(mockJobs.map((job) => job.location))];

const JobSearch = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    experience: "",
    education: "",
    resume: "",
  });

  useEffect(() => {
    const results = mockJobs.filter((job) => {
      const matchTitle = query ? job.title === query : true;
      const matchLocation = location ? job.location === location : true;
      return matchTitle && matchLocation;
    });
    setFilteredJobs(results);
  }, [query, location]);

  const handleApplyClick = (job: Job) => {
    const today = new Date().toISOString().split("T")[0];
    setSelectedJob(job);
    setFormData({
      name: "",
      email: "",
      phone: "",
      dob: today,
      experience: "",
      education: "",
      resume: "",
    });
    setShowModal(true);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: name === "resume" && files ? files[0].name : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!selectedJob) return;

    console.log("✅ Applicant Data:", formData);
    console.log("✅ Job Data:", selectedJob);

    alert("Application submitted successfully!");
    setShowModal(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4 space-y-10">
      {/* Filter Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row gap-4">
        <select
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-3 rounded-xl border border-yellow-600 bg-gray-100 text-black focus:ring-2 focus:ring-yellow-600"
        >
          <option value="">All Jobs</option>
          {uniqueTitles.map((title, idx) => (
            <option key={idx} value={title}>{title}</option>
          ))}
        </select>

        <div className="relative w-full sm:w-1/2">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-yellow-600 bg-gray-100 text-black pr-10 focus:ring-2 focus:ring-yellow-600 appearance-none"
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((loc, idx) => (
              <option key={idx} value={loc}>{loc}</option>
            ))}
          </select>
          <FaSearchLocation className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white border border-yellow-600 rounded-xl p-5 shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-black mb-2 flex items-center gap-2">
              <FaBriefcase className="text-yellow-600" /> {job.title}
            </h3>
            <p className="text-sm text-gray-600 flex items-center gap-1 mb-1">
              <FaMapMarkerAlt className="text-yellow-600" /> {job.location}
            </p>
            {job.type && <p className="text-sm text-gray-600">Type: {job.type}</p>}
            {job.salary && <p className="text-sm text-gray-600">Salary: {job.salary}</p>}
            {job.description && <p className="text-sm text-gray-700 mt-2">{job.description}</p>}

            <button
              onClick={() => handleApplyClick(job)}
              className="mt-4 w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition"
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start pt-10 px-4">
          <div className="bg-white w-full max-w-xl rounded-lg border border-yellow-600 p-6 relative shadow-lg max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-xl text-black font-bold"
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-black mb-6">
              Apply for {selectedJob.title} – {selectedJob.location}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["name", "email", "phone", "dob", "experience", "education"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm text-black mb-1 capitalize"
                    >
                      {field === "dob" ? "Date of Birth" : field}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : field === "dob" ? "date" : "text"}
                      required
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      className="w-full p-2 border border-yellow-600 rounded-md text-black"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm text-black mb-1">Upload Resume</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleChange}
                  className="w-full p-2 border border-yellow-600 rounded-md text-black bg-white"
                />
                {formData.resume && (
                  <p className="text-sm text-green-600 mt-1">Selected: {formData.resume}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobSearch;
