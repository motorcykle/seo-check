import { getFreeTries, updateFreeTries } from "@/lib/db";
import { checkSubscription } from "@/lib/subscription";
import { NextResponse } from "next/server"
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPEN_AI });

export async function POST(request: Request) {

    const data = await request.json();
    const [{freeTries}] = await getFreeTries();
    const isSEOSTAR = await checkSubscription()

    console.log(data?.prompt)
    try {
        if (data?.prompt && (freeTries! > 0 || isSEOSTAR)) {
            console.log(data)
            try {
                const response = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: `Check the SEO of this: /n ${data?.prompt}`,
                        }
                    ],
                });

                if (response.created) {
                    // update tries
                    await updateFreeTries()
                }
        
                return NextResponse.json({ response: response.choices[0]}, { status: 200 })
            } catch (error) {
                return NextResponse.json({ error }, { status: 400 })
            }
            
        }
    } catch (error) {
        console.error(error)
    }

    return NextResponse.json({ message: 'Received' }, { status: 400 })
}