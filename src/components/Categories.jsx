import React from "react";

export default function Categories({
  jobs,
  selectedCategory,
  setSelectedCategory,
  setFilteredJobs,
  setCurrentPage,
}) {
  // Define popular categories with associated keywords
  const popularCategories = [
    {
  "name": "Tech",
  "keywords": [
    "IT",
    "ICT",
    "Information Technology",
    "Computer Science",
    "Software",
    "Networking",
    "LLM",
    "Data Science",
    "Application Developer",
    "Application Engineer",
    "Software Engineer",
    "Web Developer",
    "Full-Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Mobile Developer",
    "AI",
    "Artificial Intelligence",
    "AI Engineer",
    "AI Specialist",
    "Machine Learning",
    "Machine Learning Engineer",
    "Data Analyst",
    "Data Engineer",
    "Database Administrator",
    "DevOps",
    "DevOps Engineer",
    "Cloud Computing",
    "Cloud Engineer",
    "Cloud Architect",
    "Cybersecurity",
    "Cybersecurity Analyst",
    "Information Security",
    "UX/UI",
    "UX Designer",
    "UI Designer",
    "Computer Engineering",
    "Computer Hardware",
    "Systems Analyst",
    "Solutions Architect",
    "IT Support",
    "Technical Support"
  ]
}, {
  "name": "Sales",
  "keywords": [
    "Sales",
    "Account Manager",
    "Business Development",
    "Marketing",
    "Sales Representative",
    "Sales Associate",
    "Sales Executive",
    "Sales Manager",
    "Sales Director",
    "Regional Sales Manager",
    "Key Account Manager",
    "Territory Manager",
    "Client Success Manager",
    "Customer Success",
    "Relationship Manager",
    "Business Development Manager",
    "Sales Development Representative",
    "SDR",
    "Business Development Representative",
    "BDR",
    "Lead Generation",
    "Prospecting",
    "Sales Operations",
    "Sales Strategy",
    "Inside Sales",
    "Outside Sales",
    "Retail Sales",
    "Wholesale Sales",
    "CRM",
    "Customer Relationship Management"
  ]
},{
  "name": "Finance",
  "keywords": [
    "Finance",
    "Accounting",
    "Audit",
    "Banking",
    "Financial Analyst",
    "Investment Banking",
    "Corporate Finance",
    "Wealth Management",
    "Financial Planning",
    "Portfolio Manager",
    "Equity Research",
    "Bookkeeping",
    "Tax",
    "Tax Accountant",
    "CPA",
    "Certified Public Accountant",
    "Internal Audit",
    "External Audit",
    "Risk Management",
    "Credit Analyst",
    "Mergers and Acquisitions",
    "M&A",
    "Fintech",
    "Asset Management",
    "Private Equity",
    "Venture Capital",
    "Hedge Fund",
    "Derivatives",
    "Capital Markets",
    "Financial Controller",
    "Treasury",
    "Budgeting",
    "Forecasting",
    "CFO",
    "Chief Financial Officer"
  ]
},{
  "name": "Healthcare",
  "keywords": [
    "Healthcare",
    "Medical",
    "Nurse",
    "Doctor",
    "Physician",
    "Surgeon",
    "Pharmacy",
    "Pharmacist",
    "Physical Therapist",
    "Occupational Therapist",
    "Speech-Language Pathologist",
    "Medical Assistant",
    "EMT",
    "Paramedic",
    "Dentist",
    "Dental Hygienist",
    "Veterinarian",
    "Optometrist",
    "Chiropractor",
    "Medical Technologist",
    "Radiologic Technologist",
    "Phlebotomist",
    "Dietitian",
    "Nutritionist",
    "Public Health",
    "Clinical Research",
    "Medical Coder",
    "Medical Biller",
    "Health Administrator",
    "Hospital Administrator",
    "Wellness",
    "Telehealth",
    "Biotechnology",
    "Clinical Trials"
  ]
}
  ];

  // Filter jobs by category
  const handleClick = (category) => {
    setSelectedCategory(category?.name || "");
    setCurrentPage(1);

    if (!category) {
      setFilteredJobs(jobs); // show all jobs
      return;
    }

    const filtered = jobs.filter((job) => {
      const combinedText = `${job.title} ${job.category} ${job.description}`.toLowerCase();
      return category.keywords.some((keyword) =>
        combinedText.includes(keyword.toLowerCase())
      );
    });

    setFilteredJobs(filtered);
  };

  return (
    <div className="mb-6 p-4">
      <h2 className="text-xs uppercase text-gray-500 font-semibold mb-4">
        Categories
      </h2>
      <div className="space-y-2">
        <button
          key="all"
          className={`text-sm block ${
            selectedCategory === ""
              ? "text-blue-500 font-semibold"
              : "text-gray-700 hover:text-blue-500"
          }`}
          onClick={() => handleClick(null)}
        >
          All
        </button>

        {popularCategories.map((category) => (
          <button
            key={category.name}
            className={`text-sm block ${
              selectedCategory === category.name
                ? "text-blue-500 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }`}
            onClick={() => handleClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
