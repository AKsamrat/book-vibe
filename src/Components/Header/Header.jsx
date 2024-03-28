import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? (
              'text-[#23BE0A] border-2 border-[#23BE0A] font-bold hover:bg-[#23BE0A] hover:text-white'
            ) : isPending ? (
              <CustomSpinner></CustomSpinner>
            ) : (
              'flex items-center  '
            )
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedBooks"
          className={({ isActive, isPending }) =>
            isActive ? (
              'text-[#23BE0A] border-2 border-[#23BE0A] font-bold hover:bg-[#23BE0A] hover:text-white'
            ) : isPending ? (
              <CustomSpinner></CustomSpinner>
            ) : (
              'flex items-center  '
            )
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pagesToread"
          className={({ isActive, isPending }) =>
            isActive ? (
              'text-[#23BE0A] border-2 border-[#23BE0A] font-bold hover:bg-[#23BE0A] hover:text-white'
            ) : isPending ? (
              <CustomSpinner></CustomSpinner>
            ) : (
              'flex items-center  '
            )
          }
        >
          Page to read
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/article"
          className={({ isActive, isPending }) =>
            isActive ? (
              'text-[#23BE0A] border-2 border-[#23BE0A] font-bold hover:bg-[#23BE0A] hover:text-white'
            ) : isPending ? (
              <CustomSpinner></CustomSpinner>
            ) : (
              'flex items-center '
            )
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive ? (
              'text-[#23BE0A] border-2 border-[#23BE0A] font-bold hover:bg-[#23BE0A] hover:text-white'
            ) : isPending ? (
              <CustomSpinner></CustomSpinner>
            ) : (
              'flex items-center  '
            )
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-extrabold text-[#23BE0A]">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn bg-[#23BE0A] text-white px-6">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white px-5 hidden lg:flex">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
