import "./App.css";
import { List } from "lucide-react";

function App() {
  return (
    <>
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
            <p className="text-6xl font-bold">0</p>
          </div>
          <div className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl p-8 text-white flex flex-col items-center justify-center shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Resolved</h3>
            <p className="text-6xl font-bold">0</p>
          </div>
        </div>
      </header>

      </div>
    </>
  );
}

export default App;
