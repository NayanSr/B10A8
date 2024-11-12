import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" bg-purple-800 text-white flex flex-col rounded-t-2xl ">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg">
              <Link to="/statistics">Statistics</Link>
            </li>
            <li className="text-lg">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="text-lg">
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <img className="w-12 h-12 mr-4  p-2 rounded-full" src="https://img.icons8.com/?size=100&id=BBhHIwJINbBl&format=png&color=000000" alt="" />
          <img className="w-12 h-12 mr-4  p-2 rounded-full" src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000" alt="" />
        </div>
      </div>
  
    </div>
  );
};

export default NavBar;
