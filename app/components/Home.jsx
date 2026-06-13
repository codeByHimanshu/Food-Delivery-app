export default function Home() {
  const foods = [
    {
      id: 1,
      name: "Burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      id: 2,
      name: "Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      id: 3,
      name: "Pasta",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-orange-500 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Delicious Food Delivered To Your Door
          </h1>

          <p className="mt-4 text-lg">
            Order from your favorite restaurants and enjoy fast delivery.
          </p>

          <button className="mt-8 bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Order Now
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Dishes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={food.image}
                alt={food.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{food.name}</h3>

                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}