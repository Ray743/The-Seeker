The Seeker: Application Security Policy
Document Owner: Raynold Bobola
Version: 1.0
Effective Date: September 25, 2025

1.0 Policy Statement
The purpose of this document is to define the security principles and procedures for "The Seeker," a job listing platform. This policy outlines the measures taken to protect the confidentiality, integrity, and availability of the application and its data from unauthorized access, use, disclosure, disruption, modification, or destruction.

2.0 Scope
This policy applies to all components of "The Seeker" platform, including:

The React + Vite frontend and its static hosting environment.

The FastAPI backend and all associated Python scripts (scrapers, data processing scripts).

The SQL database.

The Linux server and its related services (Apache, pm2, cron jobs).

The Git bare repository and CI/CD pipeline.

3.0 Roles and Responsibilities
Owner (Raynold Bobola): Solely responsible for the development, implementation, and enforcement of this security policy. This includes all aspects of coding, infrastructure management, monitoring, and incident response.

4.0 Core Security Principles
Principle of Least Privilege: All accounts, services, and processes will operate with the minimum level of access and permissions necessary to perform their required functions.

Defense in Depth: Multiple layers of security controls will be implemented to provide robust protection.

Proactive Security: Security will be an ongoing consideration, from initial development to regular maintenance and updates.

5.0 Security Measures and Controls
5.1 Infrastructure Security
Access Control: Access to the live Linux server is restricted via SSH keys. Password-based authentication is disabled.

Reverse Proxy: Apache is configured as a reverse proxy with SSL/TLS encryption (HTTPS) to secure all API traffic.

Firewall: The server’s firewall is configured to allow only necessary inbound traffic (e.g., ports 80 and 443 for web traffic, a specific port for SSH).

5.2 Application Security
API Security: The FastAPI backend uses CORS (Cross-Origin Resource Sharing) to restrict API access to the approved frontend domain.

Data Validation: All user input, including search queries, is validated and sanitized on both the frontend and backend to prevent common injection attacks (e.g., SQL injection, Cross-Site Scripting).

Session Management: As the application is stateless and does not handle user authentication, no session management is required or implemented.

Sensitive Data: The application does not collect, store, or process any Personally Identifiable Information (PII) from users.

5.3 Data Security
Database: The SQL database is configured to only allow connections from the backend server. The database user is configured with the least privilege necessary for the application's functions.

Data Scrapers: Scraped data is initially stored in local JSON files. A separate process merges and cleans this data before it is securely inserted into the database. This acts as a buffer and provides a way to validate data before it enters the production database.

5.4 DevOps and CI/CD Security
Secrets Management: API keys, database credentials, and any other sensitive information are not hardcoded. They are stored in environment variables on the server.

Secure Deployment: The Git bare repository and post-receive hooks are configured to automatically deploy code updates. The script is designed to only pull from the designated remote, ensuring the integrity of the deployed codebase.

6.0 Maintenance and Incident Response
6.1 Vulnerability Management
Regular Updates: All system packages and application dependencies (npm and pip) are regularly updated to mitigate known vulnerabilities.

Monitoring: Server and application logs are monitored for unusual activity or errors that may indicate a security issue.

6.2 Incident Response Plan
Detection: Any unusual server behavior, unauthorized access attempts (via SSH logs), or application errors will be immediately investigated.

Containment: In the event of a suspected breach, the system administrator will isolate the compromised component (e.g., stop the FastAPI service, block IP addresses) to prevent further damage.

Eradication: The vulnerability will be identified and patched. This may involve code changes, server re-configuration, or data sanitization.

Recovery: The service will be restored to a secure, pre-incident state. This may include restoring from a backup and verifying that all vulnerabilities are fully mitigated.

Review: Following an incident, a full review will be conducted to determine the cause, identify areas for improvement, and update this security policy as needed.
