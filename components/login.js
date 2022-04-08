import react from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
const Login = () => {


const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative  ">
      <h1> Im the Login Screen</h1>

      <div
        className="flex flex-col absolute z-50 
    h-4/6 w-full items-center justify-center 
    space-y-4"
      >
        <Image
          src="https://links.papareact.com/3pi"
          className="rounded-full object-cover "
          height={200}
          width={200}
          alt='ok'
        />
        <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">
          Login to the METAVERSE
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
          alt="ok"
        />
        {/* Login Form */}
      </div>
    </div>
  );
};

export default Login;
