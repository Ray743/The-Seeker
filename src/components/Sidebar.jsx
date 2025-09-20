import React from "react";
import logo from "/logo.png";
import SearchBar from "./SearchBar";
import Categories from "./Categories";

export default function Sidebar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  setFilteredJobs,
  setCurrentPage,
  jobs,
}) {
  return (
    <div className="w-64 bg-white shadow-lg flex flex-col h-screen overflow-y-auto">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-10">
          <img src={logo} alt="Seeker Logo" className="w-24 h-24 mr-3" />
        </div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="mt-6 flex-1 overflow-y-auto">
          <Categories
            jobs={jobs}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setFilteredJobs={setFilteredJobs}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>

      <div className="p-6 text-center text-xs text-gray-500">
        <p>© 2025 The Seeker</p>
      </div>
    </div>
  );
}
