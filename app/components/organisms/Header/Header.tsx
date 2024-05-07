import React from "react";
import Navigation from "../Navigation/Navigation";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">Vu-Dev Blogs</h1>
      </div>
      <Navigation />

    </header>
  );
};

export default Header;