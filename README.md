# Seeker - Front End

![Seeker Logo](./public/logo.png)

**Seeker** is a modern, responsive job listing frontend built with **React** and **Tailwind CSS**. It allows users to browse, search, filter, and preview job listings seamlessly on both desktop and mobile devices.

---

## 🚀 Features

- Responsive layout with sidebar (desktop) and top navigation (mobile)
- Search and live filtering of jobs
- Category buttons with icons and color-coded badges
- Pagination with ellipses for large datasets
- Sort by newest or oldest
- Job modal preview via iframe
- Loading and error handling for API requests

---

## 🛠 Tech Stack

- **React 18**  
- **Tailwind CSS**  
- **Font Awesome**  
- **Vite** for build tooling  

---

## 📂 Project Structure

```

src/
├── components/
│   ├── Sidebar.jsx
│   ├── TopNav.jsx
│   ├── SearchBar.jsx
│   ├── Categories.jsx
│   ├── Filters.jsx
│   ├── JobList.jsx
│   ├── JobCard.jsx
│   ├── Pagination.jsx
│   └── JobModal.jsx
├── utils/
│   ├── dateHelpers.js
│   └── jobHelpers.js
└── App.jsx

````

---

## ⚡ Setup & Run

1. Clone the repo:

```bash
git clone <your-repo-url>
cd seeker-frontend
````

2. Install dependencies:

```bash
npm install
```

3. Set your API endpoint in a `.env` file:

```env
VITE_SEEKER_API=https://your-api-endpoint.com/jobs
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎯 Usage

* Browse jobs on desktop via the sidebar or on mobile via top navigation
* Search jobs using keywords
* Filter jobs by category or type
* Click a job card to preview full job details in a modal
* Use pagination and sort controls to navigate listings

---

## 🌟 Future Improvements

* User authentication & saved jobs
* Multi-filtering (location + category + type)
* Infinite scrolling
* Accessibility enhancements
* Dark mode support
* Unit & E2E testing

---

## 📄 License

MIT License © 2025 The Seeker
