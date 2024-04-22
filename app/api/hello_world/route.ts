/**
 * @fileoverview This is a simple example of a POST request handler that sends a blob to the client.
 * 
 * It was used for testing the back and fourth communication between a patient and the doctor.
 */

import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";
export async function POST(req: NextRequest) {
  try {
    const myBlob = new Blob(["Hi I'm a doctor and this is a massive paragraph of text that will be streamed to the patient."]);
    const myOptions = { status: 200, statusText: "Successful Stream!!" };
    const myResponse = new Response(myBlob, myOptions);
    return myResponse;
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
