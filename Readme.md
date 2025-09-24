# The Seeker: Job Board for Papua New Guinea 🟢 [👉Visit here!👈](https://ray743.github.io/The-Seeker/)


The Seeker is a **fully functional, job listing platform** for Papua New Guinea. This platform aggregates job postings from multiple sources and provides users with powerful filtering, sorting, and search capabilities. It's built with **Python**, a **React + Vite frontend** and a **FastAPI backend** to deliver a fast and responsive user experience.

The entire system is **fully automated**, with scheduled scrapers and backend scripts running on a Linux server to ensure the job listings are updated with fresh, real-time data multiple times a day.

---

## ⚡ Features

* **Comprehensive Job Listings:** Aggregates job postings from key sources in Papua New Guinea, including PNG JobSeek, PNG Workboard, PNG Workforce, and Vodafone PNG careers.
* **Search & Filters:** Users can easily find relevant jobs by **search query** and **job categories**.
* **Sorting:** Sort job listings by **newest** or **oldest** to quickly find the most relevant opportunities.
* **Pagination:** The platform handles large datasets efficiently by paginating results, showing 10 jobs per page.
* **Job Details Modal:** Provides a clean, detailed view of individual job postings in a user-friendly modal.
* **Automated Data Updates:** The system is powered by **scheduled scrapers** that run three times a day at 2-minute intervals to ensure the data is always current.
* **CI/CD Deployment:** Code updates are automatically deployed via a **Git bare repository** and **post-receive hooks**, which:

  * Checkout the latest code
  * Clean untracked files
  * Run scrapers and backend scripts
  * Restart the API with **pm2**
    This ensures that every commit pushed to the server immediately updates the live system.
* **Secure & Reliable:** API access is secured with **HTTPS** and **CORS** handling, with built-in monitoring and logging for automated troubleshooting.

---

## 🏛️ Architecture

### **Frontend**

The frontend is the user-facing part of the application, built for speed and responsiveness.

* **Built with React + Vite:** A modern JavaScript library and a fast build tool for developing single-page applications.
* **Hosting:** The static site is hosted on **GitHub Pages**.
* **Dynamic Data:** It dynamically fetches job data from the **FastAPI backend** using API endpoints.

### **Backend**

The backend is the engine that drives the platform, handling data collection and delivery.

* **Built with Python & FastAPI:** Uses Python 3.11+ and FastAPI, a high-performance framework for building APIs. The backend and scrapers are run in isolated **Python virtual environments**.

* **Data Scrapers:**

  * **Crawl4AI** is used for efficient web crawling and data extraction.
  * **BeautifulSoup** is used for HTML parsing.

* **Job Pipeline:**

  1. The scrapers fetch data from all sources and saves them to individual JSON files in each subdirectory, specific for the source.
  2. A Python script then pulls data from individual JSON files in each subdirectory, merges, cleans, processes them and saves them to 'all_jobs.json' in the scraper's root directory
  3. The backend script then pulls the cleansed data from 'all_jobs.json' and inserts/updates the jobs in a **SQL database**.
  4. **FastAPI** exposes the data through a `/api/jobs` endpoint for the frontend.

* **Deployment & DevOps:**

  * The backend and scrapers are hosted on a **Linux server**.
  * **Apache** serves as a reverse proxy, securing the API with **HTTPS**.
  * **Uvicorn** is the ASGI server for the FastAPI app, managed in production by **pm2** to keep the process alive.
  * A **cron job** schedules the automated scraper runs.
  * **CI/CD with Git Hooks:** A **bare repository** on the server triggers a post-receive script that checks out the latest code, runs scrapers, pushes jobs, and restarts the API automatically.
  * **CORS** is configured to allow secure communication between the GitHub Pages frontend and the backend API.

---

## ⚙️ Production Workflow

1. **Scraping:** Automated scrapers fetch and parse new job postings.
2. **Ingestion:** The scraped jobs are merged, cleaned, and pushed to the SQL database.
3. **Deployment:** Any commit pushed to the server triggers an **automatic deployment** pipeline.
4. **API Call:** The frontend makes a request to the live FastAPI endpoints to get the latest data.
5. **User View:** The user sees a real-time, filtered, paginated, and sorted list of jobs.

---

## 💻 Tech Stack

| Layer    | Technology                                        |
| :------- | :------------------------------------------------ |
| Frontend | React, Vite, Tailwind CSS                         |
| Backend  | Python, FastAPI, Uvicorn                          |
| Database | SQL (MySQL/PostgreSQL compatible)                 |
| Hosting  | Linux, Apache (Reverse Proxy)                     |
| DevOps   | pm2, cron scheduled automation, Git hooks (CI/CD) |
| Scraping | Crawl4AI, BeautifulSoup                           |

---

## 🔒 Security & Reliability

* **HTTPS** secures all API communication.
* **CORS** is properly configured to allow for secure cross-origin requests.
* **pm2** ensures the API process is always running, providing high availability.
* Separation of virtual and server environments prevents dependency conflicts.

---

## 🚧 Future Enhancements

* **Testing:** Implement unit tests and API integration tests to ensure code quality and stability.
* **Front End** Further filtering options
* **Authentication:** Add **JWT** or **OAuth2** for secure authentication and authorization.
* **Containerization:** Explore **Docker** to encapsulate the application and its dependencies, simplifying deployment and scalability.
* **Custom dedicated domain** to point to the application's live URL.

---

* [👉More on Scrapers!](https://github.com/Ray743/The-Seeker/tree/master/seeker_scrapers#readme)
* [👉More on Backend!](https://github.com/Ray743/The-Seeker/tree/master/seeker_backend#readme)
* [👉More on Front End!](https://github.com/Ray743/The-Seeker/blob/gh-pages/README.md)

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=Ray743.The-Seeker/)

---
