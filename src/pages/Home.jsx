import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";

const Home = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="bg-primary-purple w-full relative min-h-screen flex items-center justify-center p-4 sm:p-6">
      <Card />
      <div className="absolute -top-14 right-8">
        <Button
          value={"Logout"}
          icon={<LogOut />}
          css={"py-3"}
          onClick={() => setShowLogoutModal(true)}
        />
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl">
            <h2 className="text-xl font-semibold text-primary-purple">
              Log out?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Are you sure you want to log out of your account?
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg bg-secondary-purple px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary-purple/80"
              >
                Yes, log out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
