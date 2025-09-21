# 🕷️ Seeker Scrapers

This directory contains the web scraping scripts for **The Seeker** application, demonstrating how job data is collected from various websites. The scrapers are organized to ensure a clean and efficient data collection process.

-----

## 📂 Directory Structure

The scrapers are housed in the `seeker_scrapers` directory and are logically separated into subdirectories, with each one dedicated to scraping a specific job site.

  * `seeker_scrapers/`
      * `merge_jobs.py` → The central script that consolidates job postings from all individual scraper outputs.
      * `all_jobs.json` → The final, combined JSON file containing all scraped jobs.
      * `requirements.txt` → A list of all necessary Python dependencies.
      * `vodafonepng/` → The subdirectory containing the scraper for Vodafone PNG.
      * `pngworkforce/` → The subdirectory containing the scraper for PNG Workforce.
      * `pngjobseek/` → The subdirectory for the PNG Jobseek scraper.
      * `pngworkboard/` → The subdirectory for the PNG Workboard scraper.
      * **Each subdirectory contains:**
          * `scrape_<site>.py` → The core Python script that performs the scraping for that site.
          * `schema.json` → A JSON file that defines the data extraction strategy using Crawl4AI's `JsonCssExtractionStrategy`.
          * `<site_name>_jobs.json` → The output file where the extracted job postings for the specific site are stored.

-----

## 🔄 Scraping Workflow

The scraping process is streamlined and automated:

1.  **Individual Scraping:** Each scraper script (`scrape_<site>.py`) performs the following steps:
      * It crawls its target website to find job postings.
      * It uses the **`schema.json`** file to apply a precise data extraction strategy with **Crawl4AI's `JsonCssExtractionStrategy`**.
      * The extracted job postings are then saved into the corresponding `<site_name>_jobs.json` file.
2.  **Merging Data:** After all individual scrapers have run, the **`merge_jobs.py`** script is executed.
      * This script accesses all `<site_name>_jobs.json` files from their respective subdirectories.
      * It merges the data from these files into a single, comprehensive `all_jobs.json` file.

To ensure the data is always up-to-date, each scraper script is set up to run on **cron jobs**. This automation helps with scheduled updates and provides separate logs for debugging and troubleshooting in case of a failure.

-----

## 🚀 Getting Started

A sample scraper is included in the **`vodafonepng/`** subdirectory to demonstrate the workflow.

### **1. Clone the repository**

```bash
git clone https://github.com/Ray743/The-Seeker.git
cd The-Seeker/seeker_scrapers
```

### **2. Create a Python virtual environment**

  * **Windows:**
    ```bash
    python -m venv myenv
    ```
  * **Linux / macOS:**
    ```bash
    python3 -m venv myenv
    ```

### **3. Activate the environment**

  * **Windows:**
    ```bash
    .\myenv\Scripts\activate
    ```
  * **Linux / macOS:**
    ```bash
    source myenv/bin/activate
    ```

### **4. Install dependencies**

```bash
pip install -r requirements.txt
```

### **5. Run the vodafonepng scraper**

```bash
python vodafonepng/scrape_vfpng.py
```

### **✅ Output**

Running the script will generate a **`vodafone_jobs.json`** file inside the `vodafonepng` directory, which contains all the extracted job postings from Vodafone's career site.
https://github.com/Ray743/The-Seeker/tree/master/seeker_backend#readme
