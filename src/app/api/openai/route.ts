import { NextResponse } from "next/server"
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPEN_AI });

export async function POST(request: Request) {

    const data = await request.json();

    if (data?.prompt) {
        console.log(data)
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: `Check the SEO of this: /n ${data?.prompt}`,
                    },
                ],
                max_tokens: 2000
            });
    
            return NextResponse.json({ response: response.choices[0]}, { status: 200 })
        } catch (error) {
            return NextResponse.json({ error }, { status: 400 })
        }
        
    }
    
    return NextResponse.json({ message: 'Received' }, { status: 400 })
}