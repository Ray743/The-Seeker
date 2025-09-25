# 📜 The Seeker: Application Security Policy  

**Document Owner:** Raynold Bobola  
**Version:** 1.0  
**Effective Date:** September 25, 2025  

---

## 1.0 Policy Statement  
The purpose of this document is to define the security principles and procedures for **"The Seeker,"** a job listing platform.  
This policy outlines the measures taken to protect the **confidentiality, integrity, and availability** of the application and its data from unauthorized access, use, disclosure, disruption, modification, or destruction.  

---

## 2.0 Scope  
This policy applies to all components of **"The Seeker"** platform, including:  

- **Frontend:** React + Vite and its static hosting environment.  
- **Backend:** FastAPI and all associated Python scripts (scrapers, data processing scripts).  
- **Database:** SQL database.  
- **Server:** Linux server and related services (Apache, pm2, cron jobs).  
- **DevOps:** Git bare repository and CI/CD pipeline.  

---

## 3.0 Roles and Responsibilities  
- **Owner (Raynold Bobola):** Solely responsible for the development, implementation, and enforcement of this security policy.  
  - Covers all aspects of coding, infrastructure management, monitoring, and incident response.  

---

## 4.0 Core Security Principles  
- **Principle of Least Privilege:** Accounts, services, and processes operate with the minimum permissions necessary.  
- **Defense in Depth:** Multiple layers of security controls are implemented for robust protection.  
- **Proactive Security:** Security considerations are embedded from initial development through ongoing updates.  

---

## 5.0 Security Measures and Controls  

### 5.1 Infrastructure Security  
- **Access Control:** Linux server access is restricted via SSH keys (password-based authentication disabled).  
- **Reverse Proxy:** Apache configured with SSL/TLS (HTTPS) to secure all API traffic.  
- **Firewall:** Allows only necessary inbound traffic (ports 80, 443, and a specific SSH port).  

### 5.2 Application Security  
- **API Security:** FastAPI backend uses CORS to restrict API access to approved frontend domains.  
- **Data Validation:** All user input (e.g., search queries) validated and sanitized on frontend + backend.  
- **Session Management:** Stateless design—no user authentication, no session handling.  
- **Sensitive Data:** No Personally Identifiable Information (PII) collected, stored, or processed.  

### 5.3 Data Security  
- **Database:** Only accessible from backend server; user configured with least privilege.  
- **Data Scrapers:** Scraped data stored in JSON → validated and cleaned before insertion into database.  

### 5.4 DevOps and CI/CD Security  
- **Secrets Management:** API keys, DB credentials, and sensitive info stored in environment variables.  
- **Secure Deployment:** Git bare repo + post-receive hooks pull only from designated remote for integrity.  

---

## 6.0 Maintenance and Incident Response  

### 6.1 Vulnerability Management  
- **Regular Updates:** System packages + npm/pip dependencies updated frequently.  
- **Monitoring:** Server & application logs monitored for unusual activity or errors.  

### 6.2 Incident Response Plan  
- **Detection:** Investigate unusual server behavior, unauthorized SSH access, or app errors.  
- **Containment:** Isolate compromised components (e.g., stop FastAPI, block IPs).  
- **Eradication:** Patch vulnerabilities via code fixes, server reconfig, or data sanitization.  
- **Recovery:** Restore service to secure pre-incident state (backups, verification).  
- **Review:** Conduct full review post-incident → update security policy as needed.  

---
