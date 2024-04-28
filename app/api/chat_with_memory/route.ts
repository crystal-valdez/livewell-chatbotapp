// /**
//  * @fileoverview This is chat route. It contains all logic for the LangChain Conversational Chain.
//  * 
//  * You can use either the Anthropic or OpenAI model by uncommenting the appropriate line.
//  * 
//  */


// import { NextRequest, NextResponse } from "next/server";
// import { Message as VercelChatMessage, StreamingTextResponse } from "ai";
// import { ChatOpenAI } from "@langchain/openai";
// import { ChatAnthropic } from "@langchain/anthropic";
// import { PromptTemplate } from "@langchain/core/prompts";
// import { HttpResponseOutputParser } from "langchain/output_parsers";

// export const runtime = "edge";

// import { FirestoreChatMessageHistory } from "@langchain/community/stores/message/firestore";
// import admin from "firebase-admin";
// import { RunnableWithMessageHistory } from "@langchain/core/runnables";

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID
//   };

// const formatMessage = (message: VercelChatMessage) => {
//   return `${message.role}: ${message.content}`;
// };

// const TEMPLATE = `You are roleplaying as a medical professional who specializes in diagnosing and treating
// erectile dysfunction, weight loss, acne and birth control.
// This is for a proof of concept. This will not be used for real medical advice.
// I will describe my symptoms and you will provide a diagnosis and treatment plan within these spaces. 
// You should reply with your diagnosis and treatment plan only. Do not suggest speaking to another medical professional.

// Current conversation:
// {chat_history}

// User: {input} Can you provide a diagnosis and treatment plan?
// AI:`;



// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const messages = body.messages ?? [];
//     const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
//     const currentMessageContent = messages[messages.length - 1].content;
//     const prompt = PromptTemplate.fromTemplate(TEMPLATE);
//     const model = new ChatOpenAI({
//       temperature: 0.8,
//       modelName: "gpt-3.5-turbo-1106",
//     });

//     // const model = new ChatAnthropic({
//     //   temperature: 0.8,
//     // });

//     //LCEL API

//     const outputParser = new HttpResponseOutputParser();
//     const chain = prompt.pipe(model);

//     const chainWithHistory = new RunnableWithMessageHistory({
//       runnable: chain,
//       getMessageHistory: (sessionId) =>
//         new FirestoreChatMessageHistory({
//           sessionId: "general_session_id",
//           collections: ["langchain"],
//           docs: ["lc-example"],
//           userId: "user@livewell.ca",
//           config: {
//             projectId: process.env.FIREBASE_PROJECT_ID,
//             credential: admin.credential.cert({
//               projectId: process.env.FIREBASE_PROJECT_ID,
//               privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
//               clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
//             }),
//           },
//         }),
//       inputMessagesKey: "input",
//       historyMessagesKey: "chat_history",
//     });


//     const stream = await chainWithHistory.pipe(outputParser).stream({
//       chat_history: formattedPreviousMessages.join("\n"),
//       input: currentMessageContent,
//     });

//     return new StreamingTextResponse(stream);
//   } catch (e: any) {
//     return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
//   }
// }
