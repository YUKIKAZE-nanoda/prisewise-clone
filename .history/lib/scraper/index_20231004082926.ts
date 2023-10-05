export async function scrapeAmazonProduct(url:string) {
    if(!url) return

    // curl --proxy brd.superproxy.io:22225 
    //--proxy-user brd-customer-hl_f07b3c01-zone-scraping_browser:i096untpx23v 
    //-k https://lumtest.com/myip.json
    //brightdata proxy config
    const username=String(process.env.BRIGHT_DATA_USERNAME);
    const password=String(process.env.BRIGHT_DATA_PASSWORD);
    const port
}