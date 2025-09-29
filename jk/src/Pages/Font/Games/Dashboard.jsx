import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react
import TodosApp from "../../../TODOS/Index";
import CountryApp from "../../../COUNTRY_APP/Index";
import Calculator from "../../../CALCULATOR/Calculator";


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menuItems = ["Dashboard", "Users","Todo App","CountryApp","Calculator","Settings"];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for large screens */}
      <div className="hidden md:flex md:w-64 bg-blue-900 text-white flex-col">
        <div className="p-4 text-2xl font-bold border-b border-blue-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                activeTab === item
                  ? "bg-blue-700 font-semibold"
                  : "hover:bg-blue-800"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-blue-700">Logout</div>
      </div>

      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative flex flex-col w-64 bg-blue-900 text-white z-50">
            <div className="flex items-center justify-between p-4 border-b border-blue-700">
              <span className="text-2xl font-bold">Admin Panel</span>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    setSidebarOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg ${
                    activeTab === item
                      ? "bg-blue-700 font-semibold"
                      : "hover:bg-blue-800"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-blue-700">Logout</div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-bold">{activeTab}</h1>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4 hidden md:block">
            {activeTab}
          </h1>
          <div className="bg-white p-6 rounded-lg shadow">
            {activeTab === "Dashboard" && <p>Welcome to your dashboard! 🚀</p>}
            {activeTab === "Users" && <div><CountryApp/>⚙️</div>}
            {activeTab === "Todo App" && <div><TodosApp/>👥</div>}
            {activeTab === "Calculator" && <div><Calculator/></div>}
            {activeTab === "CountryApp" && <div>calculator⚙️</div>}
            {activeTab === "Settings" && <p>Adjust your settings here. ⚙️</p>}
          </div>
        </main>
      </div>
    </div>
  );
}
