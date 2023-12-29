import type { WebhookEvent } from "@clerk/clerk-sdk-node"
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
 
export async function POST(req: Request) {


  try {
    const evt = req?.body?.evt as WebhookEvent;
    switch (evt?.type) {
      case 'user.created':
        console.log(evt)
        // UserJSON.first_name is a string
        const firstName = evt.data.first_name
        // UserJSON.last_name is a string
        const lastName = evt.data.last_name
        // UserJSON.email_addresses is an array of EmailAddressJSON
        const emails = evt.data.email_addresses;
        console.log(firstName, lastName, emails)
    }
  } catch (error) {
    console.log(error)
  }

  return new NextResponse(null, { status: 200 });
}
