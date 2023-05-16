import SideBar from "./SideBar";
import Toolbar from "./Toolbar";
import Background from "./img/bg.png";
import { FaDiceD20, FaIcons } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-cover bg-bg-img-mtns">
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="font-reenie-beanie font-bold text-4xl mb-5 text-slate-800/80 text-shadow shadow-slate-600/50">
          Welcome to DeeTwenty.
        </h1>
        <div className="w-72 h-96 border-2 rounded-md border-emerald-500/20 bg-emerald-500/10 backdrop-blur-sm p-5 drop-shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <p className="font-poppins font-bold text-slate-800/80 text-shadow shadow-slate-600/50">
              email
            </p>
            <input type="email" className="mb-5 rounded-lg" />
            <p className="font-poppins font-bold text-slate-800/80 text-shadow shadow-slate-600/50">
              password
            </p>
            <input type="password" className="mb-5 rounded-lg" />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-emerald-500 pr-3 pl-3 p-1 
      m-5
      hover:text-white rounded-xl hover:rounded-lg 
      transition-all duration-100 ease-linear cursor-pointer drop-shadow-md"
            >
              Log In
            </button>
            <button
              className="bg-emerald-300 pr-3 pl-3 p-1 
      m-5
      hover:text-white rounded-xl hover:rounded-lg 
      transition-all duration-100 ease-linear cursor-pointer drop-shadow-md"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-screen">
        <SideBar />
      </div>
    </div>
  );
}
