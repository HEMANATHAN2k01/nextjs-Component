import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex py-3 flex-wrap justify-around">
        <h1>Todo Application</h1>
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
