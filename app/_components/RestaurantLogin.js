const RestaurantLogin = () => {
  return (
    <div className="grid w-full items-center justify-center">
      <div className="w-full max-w-lg p-8 rounded-2xl bg-white  border border-gray-200 ">
        
        <p className="text-center text-gray-500 mb-8">
          Sign in to manage your restaurant
        </p>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>

            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email"
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

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-200 shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantLogin;