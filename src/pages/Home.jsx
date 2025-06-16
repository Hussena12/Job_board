import React from "react";
import heroImage from "../assets/hero_img.jpg";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      {" "}
      {/* Ensures full viewport height */}
      <div
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute w-full h-full z-0"
      >
        {" "}
        <div className="absolute inset-0 bg-blue-600 bg-opacity-40 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 pt-16 text-white">
          <p className="text-6xl text-white">Find your next opportunity</p>
          <p className="text-xl text-white mt-2 ">
            Browse hundreds of jobs. Post your opening today
          </p>
          {/* <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
            Browse Jobs
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
