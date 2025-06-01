'use client'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const handleClick = () => {
    router.push("/detector")
  }

  return (
    <div className="flex flex-col text-center items-center mx-[20%] my-[20px]">

      <h1 className="text-5xl font-bold text-center mt-30 text-red-300">
      AI-Powered Car License Plate Recognition!
      </h1>
      <p className="text-xl text-center mt-10 text-red-300">
      Upload an image of any vehicle and get the license plate number detected in seconds using advanced AI technology.
      </p>

      <button onClick={handleClick} className="mt-15 bg-red-300 hover:bg-red-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        Get Started...
      </button>
     
    </div>
  );
}
