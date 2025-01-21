import React from "react";

const HomePage: React.FC = () => {
  const hi: number = 1;

  console.log(hi);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-bold mb-4 animate-bounce">Production Server Updated, by Mark!</h1>
      <p className="text-xl mb-8">
        This is a proof that Tailwind CSS is correctly set up and running.
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {[...Array(10)].map((_, index: number) => (
          <div
            key={index}
            className="flex items-center justify-center w-20 h-20 bg-white text-black rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button className="mt-10 px-6 py-3 bg-green-500 hover:bg-green-600 text-lg rounded-lg shadow-md focus:outline-none">
        Tailwind Button
      </button>
    </div>
  );
};

export default HomePage;
