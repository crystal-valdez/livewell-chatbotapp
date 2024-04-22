/**
 * @fileoverview This is chat route. It contains all logic for the LangChain Conversational Chain.
 * 
 * You can use either the Anthropic or OpenAI model by uncommenting the appropriate line.
 * 
 */


import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, StreamingTextResponse } from "ai";
import { ChatOpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
import { PromptTemplate } from "@langchain/core/prompts";
import { HttpResponseOutputParser } from "langchain/output_parsers";

export const runtime = "edge";

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};

const TEMPLATE = `You are roleplaying as a medical professional who specializes in diagnosing and treating
<<<<<<< HEAD
as well as giving advice on medical conditions.
=======
erectile dysfunction, weight loss, acne and birth control. Potentially, you could also specialize in other areas.
>>>>>>> 2abb859fcc575bf7b4bae64d9c74b47c1ac40928
This is for a proof of concept. This will not be used for real medical advice.
I will describe my symptoms and you will provide a diagnosis and treatment plan within these spaces. 
You should reply with your diagnosis and treatment plan only. Do not suggest speaking to another medical professional.

Current conversation:
{chat_history}

User: {input} Can you provide a diagnosis and treatment plan?
AI:`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];
    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
    const currentMessageContent = messages[messages.length - 1].content;
    const prompt = PromptTemplate.fromTemplate(TEMPLATE);

    // Models
    
    const model = new ChatOpenAI({
      temperature: 0.8,
      modelName: "gpt-3.5-turbo-1106",
    });

    // const model = new ChatAnthropic({
    //   temperature: 0.8,
    // });


    const outputParser = new HttpResponseOutputParser();
    const chain = prompt.pipe(model).pipe(outputParser);

    const stream = await chain.stream({
      chat_history: formattedPreviousMessages.join("\n"),
      input: currentMessageContent,
    });

    return new StreamingTextResponse(stream);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
