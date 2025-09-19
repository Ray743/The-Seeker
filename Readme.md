# The Seeker Job Board 🟢 [Live Site](https://ray743.github.io/The-Seeker/)

![Seeker Logo](/logo.png)

## Overview

**Seeker** is a **fully functional job listing platform** for Papua New Guinea. It aggregates job postings from multiple sources, provides filtering and sorting capabilities, and displays real-time data through a **React + Vite frontend** connected to a **FastAPI backend**.

The system is **production-ready**, with the front-end hosted on GitHub pages - scrapers and back-end scripts running on a Linux server with HTTPS, and fully automated to update job listings three times a day within 2 minute intervals.

---

## Features

* Currently fetching job listings from multiple sources:

  * PNG JobSeek
  * PNG Workboard
  * PNG Workforce
  * Vodafone PNG careers
* Filter jobs by **search query** and **Job categories**
* Sort jobs by **Newest** or **Oldest**
* Paginate results (10 jobs per page)
* View detailed job information in a modal
* Real-time data updates powered by **scheduled scrapers**
* Secure API access via HTTPS and CORS handling

---

## Architecture

### Frontend

* Built with **React + Vite**
* Hosted on GitHub pages
* Dynamically fetches job data from the **FastAPI backend**
* Components:

  * Sidebar with search and category filters
  * Job listing grid
  * Pagination
  * Job detail modal
  * Top navigation with sorting

### Backend

* Built with **Python 3.11+** and **FastAPI**, hosted in a **Python virtual environment**
* **Scrapers**:

  * Crawl4AI for crawling job pages
  * BeautifulSoup for HTML parsing
* **Job pipeline**:

  1. Scrapers fetch job data from all sources and save to JSON files.
  2. Backend merges jobs, adds metadata, and inserts/upserts them into a **SQL database**.
  3. FastAPI exposes endpoints under `/api/jobs` for frontend consumption.
* **Deployment & DevOps**:

  * Hosted on a **Linux Server** with HTTPS via Apache reverse proxy
  * Uvicorn + pm2 for production process management
  * Automated scrapers run at 2-minute intervals
  * CORS handled for local development and production

---

## Production Workflow

1. Scrapers automatically fetch and parse job postings.
2. Jobs are merged, cleaned, and pushed to the SQL database.
3. Frontend requests live data via FastAPI endpoints.
4. Users view filtered, paginated, and sorted job listings in real-time.

---

## Tech Stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| Frontend | React, Vite, Tailwind CSS           |
| Backend  | Python, FastAPI, Uvicorn            |
| Database | SQL (MySQL/PostgreSQL compatible)   |
| Hosting  | VPS (Apache reverse proxy, HTTPS)   |
| DevOps   | pm2, cron-like scheduled automation |
| Scraping | Crawl4AI, BeautifulSoup             |

---

## Security & Reliability

* HTTPS-secured endpoints
* CORS configured for frontend integration
* Production-ready process management via pm2
* Separation of local development and server environments

---

## Future Enhancements

* Implement **unit tests** and **API integration tests**
* Add **authentication and authorization** (JWT/OAuth2)
* Introduce **CI/CD pipelines** for auto-deployment
* Explore **containerization (Docker)** for scalability
* Add **monitoring and logging** for reliability

---

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=Ray743.The-Seeker/)
