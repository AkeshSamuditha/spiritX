import { dbConnect } from "@/lib/ui/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    const con = await dbConnect();
    return new NextResponse('connected');
    
}