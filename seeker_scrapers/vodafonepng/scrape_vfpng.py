import asyncio
import json
import os
from crawl4ai import (
    AsyncWebCrawler,
    BrowserConfig,
    CrawlerRunConfig,
    CacheMode,
    JsonCssExtractionStrategy
)

async def crawl_vodafone_jobs():
    print("\n=== Crawling Vodafone PNG Jobs ===")
    base_url = "https://vodafonepng.elmotalent.com.au/careers/VFPG/jobs?layout=iframe"

    # Load schema for extraction
    schema_path = os.path.join(os.path.dirname(__file__), "vfpng_schema.json")
    with open(schema_path, "r", encoding="utf-8") as f:
        schema_dict = json.load(f)

    browser_config = BrowserConfig(headless=True, java_script_enabled=True)

    all_jobs = []

    async with AsyncWebCrawler(config=browser_config) as crawler:
        config = CrawlerRunConfig(
            cache_mode=CacheMode.BYPASS,
            extraction_strategy=JsonCssExtractionStrategy(schema_dict),
            wait_for="div.row",
            session_id="vodafone_session",
        )

        result = await crawler.arun(config=config, url=base_url)
        assert result.success, "❌ Failed to extract job listings"

        data = json.loads(result.extracted_content)

        # normalization for iframe
        for job in data:
           if "jobLink" in job and job["jobLink"].startswith("/"):
             job["jobLink"] = "https://vodafonepng.elmotalent.com.au" + job["jobLink"]


        all_jobs.extend(data)
        print(f"✅ Found {len(data)} jobs")

    # Save all jobs
    out_path = os.path.join(os.path.dirname(__file__), "vodafone_jobs.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(all_jobs, f, indent=2)

    print(f"\n🎯 Scraped total {len(all_jobs)} jobs & saved to vodafone_jobs.json")


if __name__ == "__main__":
    asyncio.run(crawl_vodafone_jobs())
