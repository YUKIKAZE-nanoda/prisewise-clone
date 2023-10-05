import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/mongoose";
import { connect } from "http2";

export async function GET(){
    try {
        connectToDB();
        const products=await Product.find({})
    } catch (error) {
        
    }
}