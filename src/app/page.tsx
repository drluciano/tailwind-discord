import SideBar from "./SideBar";
import Toolbar from "./Toolbar";

export default function Home() {
  return <div className="flex w-screen h-screen">
    <SideBar />
    <Toolbar />
  </div>;
}
