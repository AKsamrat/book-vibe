import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[80vh] bg-[#1313130d] rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="pngwing 1 (1).png" className="max-w-sm rounded-lg " />
          <div className="text-left space-y-5 ">
            <h1 className="text-3xl lg:text-[56px] font-bold py-5 leading-relaxed">
              Books to freshen up <br /> your bookshelf
            </h1>
            <Link
              to={'/listedBooks'}
              className="btn bg-[#23BE0A] text-white px-6"
            >
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
