"use client";

import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";

const RestaurantPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center mb-8">

        <h1 className="text-gray-600 mt-3 text-xl font-bold stroke-yellow-100">
          Restaurant Partner Portal
        </h1>
      </div>

      {login ? <RestaurantLogin /> : <RestaurantSignUp />}

      <button
        onClick={() => setLogin(!login)}
        className="text-shadow-black font-medium hover:text-orange-700 transition"
      >
        {login
          ? "Don't have an account? Sign Up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default RestaurantPage;