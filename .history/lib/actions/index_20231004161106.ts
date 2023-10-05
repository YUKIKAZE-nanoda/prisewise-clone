"use server";

import Product from "../models/product.model";
import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";

export async function scarpeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    connectToDB();
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
    if (!scrapedProduct) return;

    let product=scrapedProduct;

    const existingProduct=await Product.fin
  } catch (error: any) {
    throw new Error(`Failed to create/update product:${error.message}`);
  }
}