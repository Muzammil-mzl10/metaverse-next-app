import react, { useState } from "react";

import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";



const Inner_Messages = ({ message }) => {
  const { user } = useMoralis();
  const isUserName = message.get("etAddress") === user.get("ethAddress");
  // if (!isUserName) {
  //   const audioE1 = document.getElementsByClassName("audio-element")[0];
  //   audioE1.play();

  //   console.log("Auido file played successfully");
  // }

  // createdAt: Sun Apr 17 2022 12:05:57 GMT+0500
  let aa = message.createdAt;
  // console.log(aa)
  // aa = JSON.stringify(aa)
  aa = aa.toString();
  console.log(typeof aa);
  

  console.log(aa);
  aa = aa.split("2022")[1];
  aa = aa.split("GMT")[0].trim();
  console.log(aa);

  return ( <>
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

      <span
        className={`text-[10px] italic text-gray-400 ${
          isUserName && "order-first pr-1"
        }`}
      >
        {aa}
      </span>

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserName ? "text-pink-300" : "text-blue-400"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
    { isUserName ?    <audio hidden autoplay className="audio-element">
        <source src="/public_tin.mp3"></source>
      </audio> : `ok` }
    
     </>
  );
};

export default Inner_Messages;
