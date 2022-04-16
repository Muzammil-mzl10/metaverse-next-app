import react from "react";
import { useMoralis } from "react-moralis";
const ChangeUserName = () => {

const { setUserData , isUserUpdating , userError , user} = useMoralis()

const setUSername  = ()=>{

    const username = prompt(`Enter your new Username (Current: ${user.getUsername()})`);

    if(!username) return ;
    setUserData({
        username
    })
}


  return (
    <div className="text-sm absolute top-5 right-5 text-pink-500">
      <button disabled={isUserUpdating} 
      onClick={setUSername}
      className="hover:text-pink-700">Change Your Username</button>
    </div>
  );
};
export default ChangeUserName;
