import Navbar from "./components/Navbar.jsx";
import AccountProfile from "./components/ui/AccountProfile.jsx";
import Search from "./components/ui/Search.jsx";
import SideBar from "./components/ui/SideBar.jsx";
export default function App() {
  return (
    <div className="text-3xl font-bold  h-svh">
      <Navbar />
      <div className="w-full h-[88vh] flex">
        {/* <div className="w-70 h-full scrollbar-hide"> */}
        <SideBar />
        {/* </div> */}
        <div className="w-full h-full overflow-scroll scrollbar-hide"></div>
      </div>
    </div>
  );
}
