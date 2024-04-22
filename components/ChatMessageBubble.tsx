import type { Message } from "ai/react";

export function ChatMessageBubble(props: { message: Message, aiEmoji?: string, sources: any[] }) {
  const colorClassName =
    props.message.role === "user" ? "bg-apple-blue text-xs rounded-lg overflow-hidden break-words" : "bg-slate-100 rounded-lg text-xs";
  const alignmentClassName =
    props.message.role === "user" ? "ml-auto" : "mr-auto";
  const prefix = props.message.role === "user" ? "" : "Dr. LiveWell" ;
  
  return (
    <div className="flex text-black text-xs style={{ maxWidth: '100%', overflow: 'hidden' }}">
      {props.message.role !== "user" && (  // Check if role is not "user"
        <img className="relative w-8 h-8 rounded-full" src="images/doctor-avatar.png" alt="Doc image" />
      )}
        <div
          className={`${alignmentClassName} ${colorClassName} flex p-4 max-w-[60%] mb-8`}
        >
          <div className="clear-left whitespace-pre-wrap text-balance break-words">
            <span>{props.message.content}</span>
            {props.sources && props.sources.length ? <>
              <code className="mt-0 mr-auto bg-slate-600 px-2 py-1 rounded-full">
                <h2>
                  🔍 Sources:
                </h2>
              </code>
              <code className="mt-1 mr-2 bg-slate-600 px-2 py-1 rounded-full text-xs">
                {props.sources?.map((source, i) => (
                  <div className="mt-2" key={"source:" + i}>
                    {i + 1}. &quot;{source.pageContent}&quot;{
                      source.metadata?.loc?.lines !== undefined
                        ? <div><br/>Lines {source.metadata?.loc?.lines?.from} to {source.metadata?.loc?.lines?.to}</div>
                        : ""
                      }
                  </div>
                ))}
              </code>
            </> : ""}
          </div>
      </div>
    </div>
  );
}