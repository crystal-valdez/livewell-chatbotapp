import { ChatWindow } from "@/components/ChatWindow";
import StatusBar from '@/components/StatusBar';

//named to to like ChatBot 

// components/ChatInterface.tsx
import React from 'react';

const ChatInterface = () => {
  const EmptyStateComponent = (
    <div className="object-bottom text-center text-gray-500">
      Welcome to the Doctor's Office! 
    </div>
  );
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-white border-[14px] rounded-[2.5rem] h-[600px] w-[280px] shadow-xl flex flex-col">
      <StatusBar /> 
      {/* Screen Notch */}
      <div className="absolute top-0 left-0 right-0 mx-auto h-6 w-36 bg-gray-800 rounded-b-xl"></div>
      {/* Chat Window Wrapper */}
      <div className="overscroll-x-none pt-8 pb-4 px-0 h-full">
        {/* Header with title "livewell link" */}
        <div className="text-center font-bold text-xl text-black mb-0">LiveWell Link</div>
        {/* Status Indicator and "Active now" text */}
        <div className="flex items-center justify-center mb-2">
          {/* The status indicator circle */}
          <span className="bg-green-400 h-2 w-2 rounded-full mr-1.5 -mb-0.5"></span>
          {/* The "Active now" text */}
          <span className=" text-xs text-black">active now</span>
        </div>
        {/* ChatWindow component */}
        <div className="overscroll-x-none overflow-y-auto text-xs object-bottom px-2">
          <ChatWindow
            endpoint="api/chat"
            placeholder="How is your health today?"
            emptyStateComponent={EmptyStateComponent}
          />
        </div>
       
       {/* <img
              src="images/doctor-avatar.png"
              className="h-12 w-12 rounded-full"
              /> */}
        

      </div>      
    </div>
  );
};

export default ChatInterface;

