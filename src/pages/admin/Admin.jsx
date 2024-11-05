import React from "react";
import {
  FaChartPie,
  FaCalendarAlt,
  FaUser,
  FaCog,
  FaTable,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Admin = () => {
  return (
    <div className="w-full h-full">
      {/* <header className="flex justify-between items-center bg-white p-4 shadow-md fixed left-64 w-[calc(100%-16rem)]">
        <div className="flex items-center">
          <FaSearch className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Type to search..."
            className="outline-none border-none focus:ring-0"
          />
        </div>
        <div className="flex items-center">
          <FaBell className="text-gray-500 mx-4" />
          <FaUserCircle className="text-gray-500 mx-4 text-2xl" />
          <span className="text-gray-800">Thomas Anree</span>
        </div>
      </header> */}
      <div className="w-64 h-screen bg-gray-800 text-white fixed">
        <div className="p-6 font-bold text-2xl">TailAdmin</div>
        <nav className="mt-10">
          <a
            href="#"
            className="flex items-center p-2 my-4 text-gray-200 hover:bg-gray-700 rounded-lg"
          >
            <FaChartPie className="mr-2" /> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center p-2 my-4 text-gray-200 hover:bg-gray-700 rounded-lg"
          >
            <FaCalendarAlt className="mr-2" /> Calendar
          </a>
          <a
            href="#"
            className="flex items-center p-2 my-4 text-gray-200 hover:bg-gray-700 rounded-lg"
          >
            <FaUser className="mr-2" /> Profile
          </a>
          <a
            href="#"
            className="flex items-center p-2 my-4 text-gray-200 hover:bg-gray-700 rounded-lg"
          >
            <FaTable className="mr-2" /> Tables
          </a>
          <a
            href="#"
            className="flex items-center p-2 my-4 text-gray-200 hover:bg-gray-700 rounded-lg"
          >
            <FaCog className="mr-2" /> Settings
          </a>
          <a
            href="#"
            className="flex items-center p-2 my-4 text-gray-200 hover:bg-gray-700 rounded-lg"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </a>
        </nav>
      </div>
      {/* <main className="ml-64 p-6 mt-16">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
          {/* Placeholder for cards or analytics widgets */}
          {/* <div className="p-4 bg-white rounded-lg shadow-md">Card 1</div>
          <div className="p-4 bg-white rounded-lg shadow-md">Card 2</div>
          <div className="p-4 bg-white rounded-lg shadow-md">Card 3</div>
        </div>
      </main> */}
    </div>
  );
};

export default Admin;
