"use client";

const RestaurantSignUp = () => {
  return (
    <div className=" place-items-center w-full grid col-span-2">
      <div className="w-full max-w-lg p-8 rounded-2xl bg-white  border border-gray-200">

        <h2 className="text-center text-gray-500 mb-8">
          Create your restaurant account
        </h2>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="restaurantName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Restaurant Name
            </label>
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              placeholder="Enter restaurant name"
              className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantSignUp;