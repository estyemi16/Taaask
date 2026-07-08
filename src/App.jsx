import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative flex items-center justify-center bg-primary-purple p-4 text-white">
          <Link
            to="/"
            className="absolute left-4 rounded-full border border-white/20 bg-white/10 p-2 transition hover:bg-white/20"
            aria-label="Go to landing page"
          >
            <HomeIcon className="h-5 w-5" />
          </Link>
          <div className="text-4xl font-bold sm:text-3xl lg:text-5xl">Taskify</div>
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
