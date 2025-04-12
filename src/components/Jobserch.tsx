import { useState, useEffect, ChangeEvent } from "react";
import { FaSearchLocation} from "react-icons/fa";

type Job = {
  title: string;
  location: string;
};

const mockJobs: Job[] = [
  { title: "Chef", location: "New York" },
  { title: "Waiter", location: "San Francisco" },
  { title: "Restaurant Manager", location: "London" },
  { title: "Bartender", location: "Berlin" },
  { title: "Dishwasher", location: "Remote" },
  { title: "Host/Hostess", location: "Chicago" },
  { title: "Sous Chef", location: "Paris" },
  { title: "Line Cook", location: "Los Angeles" },
  { title: "Food Delivery Driver", location: "Remote" },
  { title: "Pastry Chef", location: "Toronto" },
  { title: "Barista", location: "Seattle" },
  { title: "Sommelier", location: "Rome" },
  { title: "Prep Cook", location: "Houston" },
  { title: "Catering Manager", location: "Dubai" },
  { title: "Busser", location: "Miami" },
  { title: "Kitchen Porter", location: "Dublin" },
  { title: "Grill Cook", location: "Sydney" },
  { title: "Food Runner", location: "Las Vegas" },
  { title: "Banquet Server", location: "Boston" },
  { title: "Commis Chef", location: "Barcelona" },
];


const uniqueTitles = Array.from(new Set(mockJobs.map((job) => job.title)));
const uniqueLocations = Array.from(new Set(mockJobs.map((job) => job.location)));

const JobSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);

  const handleSearch = () => {
    const results = mockJobs.filter((job) => {
      const matchTitle = query ? job.title === query : true;
      const matchLocation = location ? job.location === location : true;
      return matchTitle && matchLocation;
    });
    setFilteredJobs(results);
  };

  // Optional: Auto-search when filters change
  useEffect(() => {
    handleSearch();
  }, [query, location]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 px-4 space-y-8">
      {/* Search Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <select
          value={query}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setQuery(e.target.value)}
          className="bg-gray-100 text-secondary rounded-xl px-4 py-3 w-full sm:w-1/2 border border-gray-300 focus:ring-2 focus:ring-yellow-600 transition"
        >
          <option value="">All Jobs</option>
          {uniqueTitles.map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>

        <div className="relative w-full sm:w-1/2">
          <select
            value={location}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setLocation(e.target.value)}
            className="bg-gray-100 text-secondary rounded-xl px-4 py-3 w-full border border-gray-300 pr-10 focus:ring-2 focus:ring-yellow-600 transition appearance-none"
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <FaSearchLocation className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white rounded-2xl shadow-md p-3 max-h-64 overflow-hidden">
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
              >
                <h3 className="text-base font-semibold text-primary">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No jobs found. Try different filters.</p>
        )}
      </div>
    </div>
  );
};

export default JobSearch;
