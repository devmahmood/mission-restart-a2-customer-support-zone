import "./App.css";
import { List, User, Clock } from "lucide-react";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("Error loading tickets:", err));
  }, []);

  const addToTaskStatus = (ticket) => {
    if (taskStatus.find((t) => t.id === ticket.id)) {
      toast.info("Ticket is already in progress!");
      return;
    }
    setTaskStatus([...taskStatus, ticket]);
    toast.success(`Ticket #${ticket.id} added to Task Status!`);
  };

  // derived values for the dashboard counts
  const inProgressCount = taskStatus.length;
  const resolvedCount = tickets.filter((t) => t.status === "Resolved").length;  


  return (
    <>
      {/* toast container for notifications */}
      <ToastContainer />
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        {/* Navbar */}
        <nav className="navbar bg-base-100 px-4 lg:px-20 py-4 shadow-sm sticky top-0 z-50">
          <div className="flex-1">
            <a className="text-2xl font-bold tracking-tighter flex items-center gap-2">
              <span className="bg-indigo-600 text-white p-1 rounded">CS</span>
              <span>— Ticket System</span>
            </a>
          </div>
          <div className="flex-none hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
            <button className="btn btn-primary bg-indigo-600 border-none hover:bg-indigo-700 ml-4 text-white">
              + New Ticket
            </button>
          </div>
          <div className="lg:hidden">
            <button className="btn btn-ghost btn-circle">
              <List size={24} />
            </button>
          </div>
        </nav>

        {/* Banner */}
        <header className="px-4 lg:px-20 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white flex flex-col items-center justify-center shadow-lg">
              <h3 className="text-xl font-semibold mb-2">In-Progress</h3>
              <p className="text-6xl font-bold">{inProgressCount}</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl p-8 text-white flex flex-col items-center justify-center shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Resolved</h3>
              <p className="text-6xl font-bold">{resolvedCount}</p>
            </div>
          </div>
        </header>

        <main className="px-4 lg:px-20 py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Side: Customer Tickets */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Customer Tickets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => addToTaskStatus(ticket)}
                >
                  <div className="card-body p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="card-title text-lg font-bold leading-tight">
                        {ticket.title}
                      </h3>
                      <span
                        className={`badge ${ticket.status === "Open" ? "badge-success" : "badge-warning"} badge-sm py-3 px-4 text-xs font-semibold`}
                      >
                        {ticket.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      {ticket.description}
                    </p>
                    <div className="flex flex-wrap gap-y-2 items-center text-xs text-gray-400 font-medium">
                      <span className="mr-3 text-orange-500 font-bold">
                        #{ticket.id} {ticket.priority}
                      </span>
                      <div className="flex items-center gap-1 mr-3">
                        <User size={14} />
                        <span>{ticket.customer}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{ticket.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </main>



      </div>
    </>
  );
}

export default App;
