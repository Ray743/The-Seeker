# 🔒 The Seeker: Application Security Policy  

**Document Owner:** Raynold Bobola  
**Version:** 1.0  
**Effective Date:** September 25, 2025  

---

## 1.0 Policy Statement  
The purpose of this policy is to define the **security measures and controls** for **The Seeker**, a job board platform for Papua New Guinea.  
The policy ensures the **confidentiality, integrity, and availability (CIA)** of the platform by protecting against unauthorized access, misuse, disruption, or data tampering.  

---

## 2.0 Scope  
This policy applies to all components of **The Seeker** platform, including:  

- **Frontend:** React + Vite SPA hosted on GitHub Pages.  
- **Backend:** FastAPI app and supporting Python scripts (scrapers, data processors).  
- **Database:** SQL database (MySQL/PostgreSQL compatible).  
- **Server & Infrastructure:** Linux server, Apache reverse proxy, pm2, cron jobs.  
- **CI/CD Pipeline:** Git bare repository with post-receive hooks.  

---

## 3.0 Roles and Responsibilities  
- **Owner (Raynold Bobola):**  
  - Full responsibility for enforcing this policy.  
  - Covers coding practices, infrastructure management, monitoring, vulnerability patching, and incident response.  

---

## 4.0 Core Security Principles  
- **Least Privilege:** Access rights are restricted to the minimum needed for each component (DB, scrapers, API).  
- **Defense in Depth:** Multiple layers of protection (firewall, HTTPS, CORS, secrets in env vars).  
- **Automation with Control:** Automation (scrapers, CI/CD) is secured by restricting triggers to trusted sources.  
- **No Sensitive Data:** The system **does not collect or store PII**, reducing exposure risk.  

---

## 5.0 Security Measures and Controls  

### 5.1 Infrastructure Security  
- **Access Control:**  
  - SSH access restricted via keys only (password login disabled).  
  - Only the owner maintains server-level access.  
- **Reverse Proxy:** Apache enforces HTTPS (SSL/TLS).  
- **Firewall:** Restricts inbound traffic to required ports (80/443 + designated SSH).  

### 5.2 Application Security  
- **API Security:**  
  - FastAPI backend configured with strict **CORS** to only allow the GitHub Pages frontend.  
- **Data Validation & Sanitization:**  
  - User queries and scraper outputs are validated before insertion into the database.  
- **Stateless Design:**  
  - No user accounts, sessions, or PII → drastically reducing attack surface.  

### 5.3 Data Security  
- **Database Security:**  
  - Connections restricted to backend server only.  
  - DB user granted **least privileges** (read/write only).  
- **Scraper Workflow Security:**  
  - Raw scraper data → temporary JSON files.  
  - Merge/clean scripts validate and sanitize before inserting into SQL.  
  - Prevents polluted or malicious data from reaching production.  

### 5.4 DevOps & CI/CD Security  
- **Secrets Management:**  
  - API keys and credentials stored in **environment variables**, never in code or repo.  
- **CI/CD Integrity:**  
  - Git hooks pull only from the trusted remote.  
  - Post-receive script validates environment and restarts services using **pm2**.  
- **Cron Jobs:**  
  - Scrapers run on a schedule, isolated within virtual environments to prevent dependency conflicts.  

---

## 6.0 Maintenance & Incident Response  

### 6.1 Vulnerability Management  
- **Updates:** Regular patching of Linux packages, pip, and npm dependencies.  
- **Monitoring:** Apache, pm2, and FastAPI logs monitored for anomalies or failed scraper runs.  

### 6.2 Incident Response Plan  
- **Detection:**  
  - Unusual API errors, failed cron runs, or unauthorized SSH attempts flagged for investigation.  
- **Containment:**  
  - Stop affected services (pm2, scrapers, API) and block malicious IPs.  
- **Eradication:**  
  - Patch vulnerabilities, sanitize DB if needed, and fix misconfigurations.  
- **Recovery:**  
  - Restore latest verified backup. Restart API + scrapers. Validate stability.  
- **Review:**  
  - Document the incident, update policy or workflows, and harden security gaps.  

---

## 7.0 Future Security Enhancements  
- Implement **unit & integration tests** for scrapers and API.  
- Add **JWT/OAuth2 authentication** when introducing user accounts.  
- Explore **Docker** for containerized deployment.  
- Custom **domain & SSL certificates** for production.  
