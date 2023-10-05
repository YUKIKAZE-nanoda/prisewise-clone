"use server"
export async function scarpeAndStoreProduct(productUrl:string) {
    if(!productUrl) return;

    try {
        
    } catch (error:ant) {
        throw new Error(`Failed to create/update product:${error.message}`)
    }
}