import { useParams } from 'react-router-dom';
import UseBookData from '../Hooks/UseBookData';
import {
  getStoreApplication,
  saveBookData,
} from '../Components/Utility/LocalStorage';
import UseLocalStorage from '../Hooks/UseLocalStorage';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const DetailsPage = () => {
  const { wishList, setWishList } = useState([]);
  const { data, loading } = UseBookData();
  const { bookId } = useParams();
  // const intId = parseInt(bookId);
  const fData = data.find(item => item.bookId == bookId) || {};

  const handleRead = value => {
    const localData = getStoreApplication('read') || {};
    // console.log(bookId, localData, !localData.includes(bookId));
    if (localData.includes(bookId)) {
      // saveBookData(bookId, value);
      // const isExist = localData.find(data => data.indexOf(bookId));
      toast('Already Added to read!');
      // console.log(i);
      // localStorage.removeItem('wishlist', localData[isExist]);
      // setWishList(bookId);
    } else {
      saveBookData(bookId, value);
      toast('Sucesfully Added to read!');
    }
  };
  // const { localData } = UseLocalStorage('read') || {};

  const handleWishlist = values => {
    const localData = getStoreApplication('read') || {};
    // const isExist = localData.find(data => data.bookId === bookId);

    if (!localData.includes(bookId)) {
      saveBookData(bookId, values);
      toast('Sucesfully Added wishlist!');
      // setWishList(bookId);
    } else {
      toast('Book already read !!!!');
    }
  };
  // useEffect(() => {
  //   const isExist = localData.find(data => data.bookId === bookId);
  //   if (!isExist) {
  //     // setWishList(bookId);
  //   } else {
  //     alert('Book already read');
  //   }
  // }, []);

  return (
    <div>
      <div className="hero min-h-screen mt-8 space-y-3">
        <div className="hero-content flex-col lg:flex-row text-left">
          <div className=" rounded-lg  bg-[#F3F3F3] p-6 lg:p-20 flex-1">
            <img
              className="h-[400px]  lg:h-[560px] w-[300px] lg:w-[420px]"
              src={fData.image}
              alt=""
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl lg:text-5xl font-bold">{fData.bookName}</h1>
            <p className="py-6 font-bold">By: {fData.author}</p>
            <hr />
            <p className="my-2">{fData.category}</p>
            <hr />
            <p className="font-bold">
              Review: <span className="font-normal">{fData.review}</span>
            </p>
            <div className="flex items-center gap-4 justify-start my-4">
              <p className="font-bold">Tag </p>
              <p className="text-[#23BE0A] bg-[#235a0a0d] rounded-3xl py-1 px-1 lg:px-3 font-bold text-center">
                {fData.tags?.[0]}
              </p>
              <p className="text-[#23BE0A] bg-[#235a0a0d] rounded-3xl py-1 px-1 lg:px-3 font-bold text-center">
                {fData.tags?.[1]}
              </p>
            </div>
            <hr />
            <div className="space-y-3">
              <p className="mt-3">
                Number Of page:{' '}
                <span className="font-bold  pl-6">{fData.totalPages}</span>
              </p>
              <p>
                Publisher:{' '}
                <span className="font-bold pl-20">{fData.publisher}</span>
              </p>
              <p>
                Year of Publishing:{' '}
                <span className="font-bold pl-4">{fData.yearOfPublish}</span>
              </p>
              <p>
                yearOfPublish{' '}
                <span className="font-bold pl-14">{fData.rating}</span>
              </p>
            </div>
            <div className="flex justify-start gap-4 mt-7">
              <a
                onClick={() => handleRead('read')}
                className="btn bg-[#23BE0A] text-white px-6"
              >
                Read
              </a>
              <a
                onClick={() => handleWishlist('wishlist')}
                className="btn bg-[#59C6D2] text-white px-5"
              >
                Wishlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
// if (!readList.Include(id)) {
//   push;
// } else {
//   alert('');
// }
