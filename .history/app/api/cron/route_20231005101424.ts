import { connectToDB } from "@/lib/mongoose";
import { connect } from "http2";

export async function GET(){
    try {
        connectToDB
    } catch (error) {
        
    }
}