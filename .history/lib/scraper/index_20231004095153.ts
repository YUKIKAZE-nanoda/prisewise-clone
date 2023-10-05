import axios from "axios";
import * as cheerio from 'cheerio';

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  // curl --proxy brd.superproxy.io:22225
  //--proxy-user brd-customer-hl_f07b3c01-zone-scraping_browser:i096untpx23v
  //-k https://lumtest.com/myip.json
  //brightdata proxy config
// BrightData proxy configuration
const username = String(process.env.BRIGHT_DATA_USERNAME);
const password = String(process.env.BRIGHT_DATA_PASSWORD);
const port = 22225;
const session_id = (1000000 * Math.random()) | 0;

const options = {
  auth: {
    username: `${username}-session-${session_id}`,
    password,
  },
  host: 'brd.superproxy.io',
  port,
  rejectUnauthorized: false,
}
  try {
    const response=await axios.get(url,options)
    const $=cheerio.load(response.data)
    
    //Extract
    const title=$('#productTitle').text().trim();
    console.log()

  } catch (error: any) {
    throw new Error(`Failed to scrape product:${error.message}`);
  }
}
