import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary-purple w-full relative min-h-screen flex items-center justify-center p-4 sm:p-6">
      <Card />
      <div
        onClick={() => navigate("/login")}
        className="absolute -top-14 right-8"
      >
        <Button value={"Logout"} icon={<LogOut />} css={"py-3"} />
      </div>
    </div>
  );
};

export default Home;
