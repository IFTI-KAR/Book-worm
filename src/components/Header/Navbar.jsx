import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links = (
      <>
        <li>
          <Link
            to="/"
            className="px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/readlist"
            className="px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
          >
            ReadList / WishList
          </Link>
        </li>
      </>
    );
  
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><h1 className='text-red-600'>B0i</h1> PooKie</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;