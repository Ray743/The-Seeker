import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import JobList from "./components/JobList";
import Pagination from "./components/Pagination";
import JobModal from "./components/JobModal";
import { getCategoryColor, getCategoryIcon } from "./utils/jobHelpers";

const ITEMS_PER_PAGE = 10;

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(import.meta.env.VITE_SEEKER_API);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        setJobs(data || []);
        setFilteredJobs(data || []);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
        setError("Could not load jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Client-side search filter
  const searchedJobs = filteredJobs.filter((job) =>
    Object.values(job).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Sort jobs
  const sortedJobs = [...searchedJobs].sort((a, b) => {
    const parseDate = (dateStr) => {
      if (!dateStr) return new Date(0);
      const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})/); // dd/mm/yyyy
      if (!match) return new Date(0);
      const [_, day, month, year] = match;
      return new Date(`${year}-${month}-${day}`);
    };
    return sortOrder === "newest"
      ? parseDate(b.datePosted) - parseDate(a.datePosted)
      : parseDate(a.datePosted) - parseDate(b.datePosted);
  });

  // Pagination
  const totalPages = Math.ceil(sortedJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentJobs = sortedJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset page when search, sort, or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortOrder, selectedCategory]);

  return (
    <div className="">
      {/* Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:left-0 md:w-64 md:flex md:flex-col md:h-screen md:overflow-y-auto md:overflow-x-hidden md:border-r md:border-gray-200 md:bg-white">
        <Sidebar
          jobs={jobs}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setFilteredJobs={setFilteredJobs}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-65">
        {/* TopNav */}
        <TopNav
          total={searchedJobs.length}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          jobs={jobs}
          selectedSource={selectedCategory} // current category
          setSelectedSource={setSelectedCategory} // updates selectedCategory
          setFilteredJobs={setFilteredJobs} // needed for mobile filtering
          setCurrentPage={setCurrentPage}
        />

        {/* Job list + pagination */}
        <div className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-8 min-h-0">
          {loading && <p className="text-gray-500">Loading jobs…</p>}
          {error && <p className="text-red-500">{error}</p>}

          <JobList
            jobs={currentJobs}
            setSelectedJob={setSelectedJob}
            setLoading={setLoading}
            getCategoryColor={getCategoryColor}
            getCategoryIcon={getCategoryIcon}
            searchQuery={searchQuery}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>

      {/* Job Modal */}
      {selectedJob && (
        <JobModal
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}
