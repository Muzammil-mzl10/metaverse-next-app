import react, { useState } from "react";

import { useMoralis } from "react-moralis";

const SendMessage = ({endofMessagesRef}) => {
  const [message, setMessage] = useState("");

  const { user, Moralis } = useMoralis();
  const Send = (e) => {
    e.preventDefault();


    if (!message) return;

    const Message1 = Moralis.Object.extend("Messages");
    const messages = new Message1();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        etAddress: user.get("ethAddress"),
      })
      .then((message) => {
        console.log("Successfull");
      }),
      (error) => {
        console.log(error.message);
      };
      endofMessagesRef.current.scrollIntoView({behavior:'smooth'})
      setMessage("")

      const isUserName = messages.get("etAddress") === user.get("ethAddress");
      if(!isUserName){
        const audioE1 = document.getElementsByClassName("audio-element")[0]
        audioE1.play()

        console.log('Auido file played successfully')
      }

  };


  return (
    <>
      <form onSubmit={e=>e.preventDefault()} className="flex  fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
        <input
          type="text"
          className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
          placeholder="Enter a Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="font-bold text-pink-500"
          onClick={Send}
        >
          Send
        </button>
      </form>
      <audio  hidden className="audio-element">
        <source src='/public_tin.mp3'></source>
        </audio>
    </>
  );
};




export default SendMessage;
