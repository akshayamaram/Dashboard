/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar"
import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = ({categories}) => {

   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [selectedWidgets, setSelectedWidgets] = useState([]);

   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };

   const closeSidebar = () => {
     setIsSidebarOpen(false);
   };

   const handleToggleWidget = (widget) => {
     setSelectedWidgets((prevWidgets) =>
       prevWidgets.includes(widget)
         ? prevWidgets.filter((w) => w !== widget)
         : [...prevWidgets, widget]
     );
   };


  return (
    <div className="flex justify-between items-center w-full mb-4 bg-slate-100">
      <SearchBar />
      <button
        onClick={toggleSidebar}
        className="py-2 px-5 rounded border bg-white border-solid border-gray-600"
      >
        Add Widget <span>+</span>
      </button>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        selectedWidgets={selectedWidgets}
        onToggleWidget={handleToggleWidget}
        categories={categories}
      />
    </div>
  );
}

export default Header