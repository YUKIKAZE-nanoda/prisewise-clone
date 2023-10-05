"use server"

import { scrapeAmazonProduct } from "../scraper";

export async function scarpeAndStoreProduct(productUrl:string) {
    if(!productUrl) return;

    try {
        const scrapedProduct=await scrapeAmazonProduct(productUrl)
        if(!scrap)

    } catch (error:any) {
        throw new Error(`Failed to create/update product:${error.message}`)
    }
}