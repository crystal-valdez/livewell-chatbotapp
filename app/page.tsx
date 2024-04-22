import { ChatWindow } from "@/components/ChatWindow";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const InfoCard = (
    <div className="p-0 md:p-0 rounded text-black w-full max-h-[85%] overflow-hidden flex flex-col justify-center items-center">
      <h1 className="font-velino text-xl text-center">
        livewell link
      </h1>
    </div>
  );

  return (
  <div>
    <StatusBar style="auto" />
    <ChatWindow
      endpoint="api/chat"
      emoji="🩺"
      titleText="Livewell Link"
      placeholder="How is your health today?"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  </div>
  );
}
