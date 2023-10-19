import { tokenKey } from "@/types/tokenKey";
import { removeUserInfo, isLoggedIn } from "@/utility/authService";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logOut = (tokenKey: string) => {
    removeUserInfo(tokenKey);
    navigate("/login");
    toast.success("User logged Out successfully!");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/category">
                <p>Category</p>
              </Link>
            </li>
            {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              <Link to="/service">
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <p>FAQs</p>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <p>Blogs</p>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <p>Cart</p>
              </Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/profile">
                      <p>Profile</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/booking">
                      <p>Booking</p>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Link to="/">
          <p className="btn btn-ghost normal-case text-xl">PC Surgeons</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/category">
              <p>Category</p>
            </Link>
          </li>
          {/* <li tabIndex={0}>
            <details>
              <summary>User</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <Link to="/service">
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <p>FAQs</p>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <a>Blogs</a>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <p>Cart</p>
            </Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2">
                <li>
                  <Link to="/profile">
                    <p>Profile</p>
                  </Link>
                </li>
                <li>
                  <Link to="/booking">
                    <p>Booking</p>
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isLoggedIn() ? (
          <button onClick={() => logOut(tokenKey)} className="btn">
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn">Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
