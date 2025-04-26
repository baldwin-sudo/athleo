import Image from "next/image";
import gym from "../assets/dashboard/gym.png";
import water from "../assets/dashboard/bottle.png";
import eating from "../assets/dashboard/eating.png";
import running from "../assets/dashboard/running.png";
import sleep from "../assets/dashboard/sleep.png";
const Page = ({}) => {
  return (
    <div className="flex flex-col  items-center p-5 pt-10">
      <h1 className="font-semibold text-2xl text-white mb-10 text-center w-full">
        Check your progress
      </h1>
      <div className="flex flex-row space-x-5 ">
        <div className="p-4 rounded-full bg-gradient-to-r from-green-200 from-10% via-green-300 via-30% to-green-400 to-100% transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:shadow-green-300">
          <Image className="size-12 lg:size-16" src={running} alt="running" />
        </div>

        <div className="p-4 rounded-full bg-gradient-to-r  from-red-200 from-10% via-red-300 via-30% to-red-400 to-100% transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:shadow-red-300">
          <Image className="size-12 lg:size-16" src={water} alt="water" />
        </div>

        <div className="p-4 rounded-full bg-gradient-to-r  from-purple-200 from-10% via-purple-300 via-30% to-purple-400 to-100% transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:shadow-purple-300">
          <Image className="size-12 lg:size-16" src={eating} alt="eating" />
        </div>

        <div className="p-4 rounded-full bg-gradient-to-r  from-cyan-200 from-10% via-cyan-300 via-30% to-cyan-400 to-100% transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-300">
          <Image className="size-12 lg:size-16" src={sleep} alt="sleep" />
        </div>

        <div className="p-4 rounded-full bg-gradient-to-r from-yellow-200 from-10% via-yellow-300 via-30% to-yellow-400 to-100% transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-300">
          <Image className="size-12 lg:size-16" src={gym} alt="gym" />
        </div>
      </div>
    </div>
  );
};

export default Page;
