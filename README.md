## The Seeker - Front End 

## 🌟 Key Features

### 🔎 **Job Search**

* Users can type keywords into the **Search Bar** (available in both the **Sidebar** and the **Top Navigation** on mobile).
* The app instantly filters results based on job title, description, category, or any other available field.

### 🗂️ **Categories & Filters**

* The **Sidebar** displays a scrollable list of job categories.
* Selecting a category filters jobs to that specific field (e.g., IT, Accounting, Mining, Education).
* Category names are mapped to **icons** and **colors** (via `jobHelpers.js`) for a clear, visual distinction.

### 🧭 **Top Navigation**

* Displays the total job count, with search context (e.g., `25 jobs found for "engineer"`).
* Includes a **sort option** (Newest / Oldest).
* Provides a **mobile-friendly category dropdown**.
* Has a **theme toggle switch** for switching between **Light** ☀️ and **Dark** 🌙 modes.

### 📑 **Job Listings**

* Jobs are displayed in a clean, scrollable list (`JobList`).
* Each listing shows category styling (color + icon) using the helper functions.
* Results dynamically update based on search, filters, and sorting.

### 📄 **Job Modal Preview**

* Clicking a job opens a **modal window** (`JobModal`) with full job details.
* On **desktop**, users can maximize/restore the modal.
* On **mobile**, the modal adapts to full-screen for readability.
* Includes a smooth close experience with overlay background.

### 📄 **Pagination**

* Results are split into pages of **10 jobs per page**.
* Pagination controls (`Pagination`) allow navigation between pages.
* Smart pagination displays condensed page numbers with `…` for large result sets.
* Controls are **sticky/fixed** at the bottom of the screen for quick access.

### 🌗 **Theming**

* **Light and Dark mode** supported across all components.
* Colors, borders, and text adapt seamlessly to the theme.

### ⚡ **Dynamic Data Handling**

* Fetches jobs from an external API (`VITE_SEEKER_API`).
* Handles loading states with user-friendly messages.
* Displays error messages when jobs cannot be loaded.
* Provides fallback UI (`No jobs found`) with suggestions when searches return empty results.

---

## 🛠️ App Flow & Component Connections

* **`App.jsx` (root)**
  Manages all **state**: jobs, search, category, pagination, sorting, selected job, loading, error, and theme.

* **`Sidebar`**

  * Hosts the **logo**, **search bar**, and **categories list**.
  * Interacts directly with job filters and updates the parent state.

* **`TopNav`**

  * Displays job count, sort options, mobile filters, and the **theme toggle**.
  * Updates search queries and sorting order in real-time.

* **`JobList`**

  * Renders a scrollable list of jobs for the current page.
  * Jobs are styled by category using **`getCategoryColor`** and **`getCategoryIcon`**.
  * Clicking a job triggers the **Job Modal**.

* **`JobModal`**

  * Displays detailed job information.
  * Responsive design adapts to screen size (maximizable on desktop, full-screen on mobile).

* **`Pagination`**

  * Provides intuitive navigation between pages.
  * Resets scroll position when the page changes.

* **`utils/jobHelpers.js`**

  * Maps job categories to icons and colors.
  * Provides fallback defaults for uncategorized jobs.

---

## ⚛️ Technical Overview

The Seeker is built using **React (Vite + TailwindCSS)** with modern React hooks for state and side-effect management.

### 🔑 Core React Concepts Used

* **`useState`**

  * Manages all application states, including:

    * Job data (`jobs`)
    * Search query (`searchTerm`)
    * Active category (`selectedCategory`)
    * Pagination (`currentPage`)
    * Sorting order (`sortOrder`)
    * Loading/error states (`loading`, `error`)
    * Theme (`darkMode`)
    * Selected job for modal (`selectedJob`)

* **`useEffect`**

  * Handles **data fetching** from the external API (`VITE_SEEKER_API`).
  * Triggers job reloads whenever search terms, filters, or sorting change.
  * Updates theme-related classes on the `<body>` tag when switching modes.

* **`props` & Component Composition**

  * State is lifted to `App.jsx` and passed down to child components (`Sidebar`, `TopNav`, `JobList`, `JobModal`, `Pagination`).
  * Components are **stateless UI-driven** where possible, depending on parent props for behavior.

* **`conditional rendering`**

  * Renders loading spinners, empty states, and error messages when relevant.
  * `JobModal` only mounts when a job is selected.

* **`map()` & `filter()`**

  * Used to efficiently render job lists and apply filters.

* **Responsive UI**

  * Tailwind utility classes + conditional layouts ensure the app works on **desktop, tablet, and mobile**.

---

## 🎨 User Experience Highlights

* **Responsive Design**: Works smoothly on desktop and mobile.
* **Quick Access Filters**: Categories on desktop, dropdown on mobile.
* **Accessibility**: Clear icons, themed colors, and descriptive text.
* **Real-Time Updates**: Search and filters instantly refresh results.
* **User Guidance**: Friendly empty state messages when no results are found.
---
* [Back🔙!](https://github.com/Ray743/The-Seeker/blob/master/Readme.md)

