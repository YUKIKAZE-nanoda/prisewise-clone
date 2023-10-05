export async function scrapeAmazonProduct(url:string) {
    if(!url) return

    //brightdata proxy config
    const username=String(process.env.BRIGHT_DATA_USERNAME)
    const password=String(process.env)
}