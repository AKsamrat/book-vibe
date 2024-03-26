import UseLocalStorage from '../../Hooks/UseLocalStorage';
import UseBookData from './../../Hooks/UseBookData';

const ReadBooks = () => {
  const { localData } = UseLocalStorage('read') || {};
  const { data, loading } = UseBookData();
  // console.log(localData);
  const getData = data.filter(item => localData.includes(item.bookId)) || {};

  // console.log(fData);
  // return 'good';
  return (
    <div>
      {getData.map(fData => (
        <div
          className="  mt-8 space-y-3 border-2 border-slate-200 rounded-xl"
          key={fData.bookId}
        >
          <div className="hero-content flex-col lg:flex-row text-left justify-start">
            <div className=" rounded-lg  bg-[#F3F3F3] p-8 ">
              <img className="h-[170px] w-[130px]" src={fData.image} alt="" />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold">{fData.bookName}</h1>
              <p className="py-6 font-bold">By: {fData.author}</p>

              <div className="flex items-center gap-4 justify-start my-4">
                <p className="font-bold">Tag </p>
                <p className="text-[#23BE0A] bg-[#235a0a0d] rounded-3xl py-1 px-3 font-bold">
                  {fData.tags?.[0]}
                </p>
                <p className="text-[#23BE0A] bg-[#235a0a0d] rounded-3xl py-1 px-3 font-bold">
                  {fData.tags?.[1]}
                </p>
                <div className="flex justify-start gap-4">
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <p>Year of publish :{fData.yearOfPublish} </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="flex justify-start items-center gap-3">
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
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                  <p>Publisher:{fData.publisher}</p>
                </div>
                <div className="flex justify-start items-center gap-3">
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
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>

                  <p>Page:{fData.totalPages}</p>
                </div>
              </div>
              <hr />
              <div className="space-y-3 flex items-center gap-5 justify-start">
                <p className=" bg-[#E0EEFF] text-[#328EFF] px-4 rounded-3xl py-1 mt-2">
                  Category:{fData.category}
                </p>
                <p className="bg-[#FFF3E0] text-[#FFAC33] px-4 rounded-3xl py-1">
                  Rating:{fData.rating}
                </p>

                <a className=" bg-[#23BE0A] text-white px-4 rounded-3xl py-1">
                  View details
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;
