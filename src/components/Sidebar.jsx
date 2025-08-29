import React from "react";
import logo from "/logo.png";
import SearchBar from "./SearchBar";
import Categories from "./Categories";

export default function Sidebar({
  jobs,
  searchQuery,
  setSearchQuery,
  selectedSource,
  setSelectedSource,
  setCurrentPage,
}) {
  return (
    <div className="w-64 bg-white shadow-lg flex flex-col overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center mb-10">
          <img src={logo} alt="Seeker Logo" className="w-24 h-24 mr-3" />
        </div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

       <div className="mt-6">
        <Categories
          jobs={jobs}
          selectedSource={selectedSource}
          setSelectedSource={setSelectedSource}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="mt-6"></div>
      </div>

      <div className="mt-auto p-6 text-center text-xs text-gray-500">
        <p>© 2025 The Seeker</p>
      </div>
    </div>
  );
}
