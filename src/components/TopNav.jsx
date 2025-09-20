import React from "react";
import logo from "/logo.png";
import SearchBar from "./SearchBar";

export default function TopNav({
  total,
  searchQuery,
  setSearchQuery,
  sortOrder,
  setSortOrder,
  jobs,
  selectedSource,    // selectedCategory from App
  setSelectedSource,
  setFilteredJobs,   // required for filtering logic
  setCurrentPage,
}) {
  // Popular categories with keywords (same as Categories.jsx)
  const popularCategories = [
    {
      name: "Tech",
      keywords: [
        "IT", "ICT", "Information Technology", "Computer Science",
        "Software", "Networking", "LLM", "Data Science",
        "Application Developer", "Application Engineer",
        "Software Engineer", "Web Developer", "Full-Stack Developer",
        "Front-End Developer", "Back-End Developer", "Mobile Developer",
        "AI", "Artificial Intelligence", "AI Engineer", "AI Specialist",
        "Machine Learning", "Machine Learning Engineer", "Data Analyst",
        "Data Engineer", "Database Administrator", "DevOps",
        "DevOps Engineer", "Cloud Computing", "Cloud Engineer",
        "Cloud Architect", "Cybersecurity", "Cybersecurity Analyst",
        "Information Security", "UX/UI", "UX Designer", "UI Designer",
        "Computer Engineering", "Computer Hardware", "Systems Analyst",
        "Solutions Architect", "IT Support", "Technical Support"
      ],
    },
    {
      name: "Sales",
      keywords: [
        "Sales", "Account Manager", "Business Development", "Marketing",
        "Sales Representative", "Sales Associate", "Sales Executive",
        "Sales Manager", "Sales Director", "Regional Sales Manager",
        "Key Account Manager", "Territory Manager", "Client Success Manager",
        "Customer Success", "Relationship Manager", "Business Development Manager",
        "Sales Development Representative", "SDR", "Business Development Representative",
        "BDR", "Lead Generation", "Prospecting", "Sales Operations",
        "Sales Strategy", "Inside Sales", "Outside Sales", "Retail Sales",
        "Wholesale Sales", "CRM", "Customer Relationship Management"
      ],
    },
    {
      name: "Finance",
      keywords: [
        "Finance", "Accounting", "Audit", "Banking", "Financial Analyst",
        "Investment Banking", "Corporate Finance", "Wealth Management",
        "Financial Planning", "Portfolio Manager", "Equity Research",
        "Bookkeeping", "Tax", "Tax Accountant", "CPA", "Certified Public Accountant",
        "Internal Audit", "External Audit", "Risk Management", "Credit Analyst",
        "Mergers and Acquisitions", "M&A", "Fintech", "Asset Management",
        "Private Equity", "Venture Capital", "Hedge Fund", "Derivatives",
        "Capital Markets", "Financial Controller", "Treasury", "Budgeting",
        "Forecasting", "CFO", "Chief Financial Officer"
      ],
    },
    {
      name: "Healthcare",
      keywords: [
        "Healthcare", "Medical", "Nurse", "Doctor", "Physician", "Surgeon",
        "Pharmacy", "Pharmacist", "Physical Therapist", "Occupational Therapist",
        "Speech-Language Pathologist", "Medical Assistant", "EMT", "Paramedic",
        "Dentist", "Dental Hygienist", "Veterinarian", "Optometrist", "Chiropractor",
        "Medical Technologist", "Radiologic Technologist", "Phlebotomist", "Dietitian",
        "Nutritionist", "Public Health", "Clinical Research", "Medical Coder",
        "Medical Biller", "Health Administrator", "Hospital Administrator",
        "Wellness", "Telehealth", "Biotechnology", "Clinical Trials"
      ],
    },
  ];

  // Handle mobile dropdown selection with keyword filtering
  const handleMobileCategoryChange = (categoryName) => {
    setSelectedSource(categoryName);
    setCurrentPage(1);

    if (!categoryName) {
      // Show all jobs if "All" is selected
      setFilteredJobs(jobs);
      return;
    }

    const category = popularCategories.find(c => c.name === categoryName);
    if (!category) {
      setFilteredJobs(jobs);
      return;
    }

    // Filter jobs based on keywords
    const filtered = jobs.filter(job => {
      const combinedText = `${job.title} ${job.category} ${job.description}`.toLowerCase();
      return category.keywords.some(keyword => combinedText.includes(keyword.toLowerCase()));
    });

    setFilteredJobs(filtered);
  };

  return (
    <div className="bg-white sticky top-0 z-10 shadow-sm">
      {/* ---------- Header ---------- */}
      <div className="flex flex-row justify-between items-center p-3 sm:p-4">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Seeker Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 md:hidden"
          />
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Job Listings
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm">
              {total} {total === 1 ? "job" : "jobs"} found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        </div>

        {/* Right: Sort + Categories Dropdown (mobile only) */}
        <div className="flex items-center gap-2">
          {/* Sort dropdown */}
          <select
            className="border rounded-lg px-2 py-1 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          {/* Mobile-only popular categories dropdown */}
          <select
            className="border rounded-lg px-2 py-1 text-xs sm:text-sm md:hidden focus:ring-2 focus:ring-blue-500 max-w-[120px] truncate"
            value={selectedSource}
            onChange={(e) => handleMobileCategoryChange(e.target.value)}
          >
            <option value="">All</option>
            {popularCategories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ---------- Mobile only: Search Bar ---------- */}
      <div className="md:hidden p-3 border-t border-gray-200 bg-white">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
}
