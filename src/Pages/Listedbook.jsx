import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Listedbook = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div className="bg-[#F3F3F3] rounded-xl ">
        <p className="text-2xl font-bold text-center py-7 ">Books</p>
      </div>

      {/* sortby section ----  */}

      <details className="dropdown">
        <summary className="m-1 btn bg-[#23BE0A] text-white px-6 ">
          Sort By
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter('all')}>
            <a>all</a>
          </li>
          <li onClick={() => handleJobsFilter('remote')}>
            <a>remote</a>
          </li>
          <li onClick={() => handleJobsFilter('onsite')}>
            <a>onside</a>
          </li>
        </ul>
      </details>

      {/* tabs section======= */}

      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center lg:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? 'border border-b-0' : 'border-b'
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read books</span>
        </Link>
        <Link
          to={`Wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? 'border border-b-0' : 'border-b'
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
        <hr />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Listedbook;
