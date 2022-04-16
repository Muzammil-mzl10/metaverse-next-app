import react from "react";

import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

import TimeAgo from 'react-time-ago'

const Inner_Messages = ({ message }) => {
  const { user } = useMoralis();
  const isUserName = message.get("etAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserName && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserName && "order-last ml-2"}`}>
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserName
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-400 "
        }`}
      >
        <p>{message.get("message")}</p>
      </div>

        {/* <TimeAgo 
            className={`text-[10px] italic text-gray-400 ${
                isUserName && "order-first pr-1"
            }`}
            date={message.createdAt} 
            
        /> */}


      <p
        className={`absolute -bottom-5 text-xs ${
          isUserName ? "text-pink-300" : "text-blue-400"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
};

export default Inner_Messages;
