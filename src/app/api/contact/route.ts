import EmailService from "@/app/services/EmailService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json();
        await EmailService.sendEmailAsync(payload);
        return NextResponse.json({ message: 'sucesso' }, { status: 200 })
    }
    catch (err) {
        console.log(err)
        return NextResponse.json(err, { status: 500 })
    }
}