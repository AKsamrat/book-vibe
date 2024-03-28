/* eslint-disable no-undef */
import { createContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getStoreApplication } from '../Components/Utility/LocalStorage';
import UseBookData from '../Hooks/UseBookData';
export const AssetContext = createContext();

const Listedbook = () => {
  const { data, loading } = UseBookData();
  const [tabIndex, setTabIndex] = useState(0);
  const [allData, setAllData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const handleJobsFilter = filter => {
    if (filter === 'rating') {
      setDisplayData(
        [...allData].sort(function (a, b) {
          return b.rating - a.rating;
        })
      );
    } else if (filter === 'NumberOfPage') {
      setDisplayData(
        [...allData].sort(function (a, b) {
          return b.totalPages - a.totalPages;
        })
      );
    } else if (filter === 'publishYear') {
      setDisplayData(
        [...allData].sort(function (a, b) {
          return b.yearOfPublish - a.yearOfPublish;
        })
      );
    }
  };
  // console.log(data);

  useEffect(() => {
    if (tabIndex === 0) {
      const allReadData = getStoreApplication('read');
      // console.log(allReadData);
      if (data.length > 0) {
        const jobsApplied =
          data.filter(item => allReadData.includes(item.bookId)) || [];
        setAllData(jobsApplied);
        setDisplayData(jobsApplied);
      }
    } else {
      const allWishlistData = getStoreApplication('wishlist');
      if (data.length > 0) {
        const jobsApplied =
          data.filter(item => allWishlistData.includes(item.bookId)) || [];
        setAllData(jobsApplied);
        setDisplayData(jobsApplied);
      }
    }
  }, [tabIndex, data]);

  console.log(displayData);

  return (
    <div>
      <div className="bg-[#F3F3F3] rounded-xl ">
        <p className="text-4xl font-bold text-center py-7 ">Books</p>
      </div>

      <AssetContext.Provider value={displayData}>
        {/* sortby section ----  */}

        <div className="flex justify-center items-center">
          <details className="dropdown ">
            <summary className="m-1 btn bg-[#23BE0A] text-white px-6 items-center flex justify-center items-center ">
              <p>Sort By </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </summary>

            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => handleJobsFilter('rating')}>
                <a>Rating</a>
              </li>
              <li onClick={() => handleJobsFilter('NumberOfPage')}>
                <a>Number of page</a>
              </li>
              <li onClick={() => handleJobsFilter('publishYear')}>
                <a>Publish Year</a>
              </li>
            </ul>
          </details>
        </div>

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
      </AssetContext.Provider>
    </div>
  );
};

export default Listedbook;
