// import { star } from '@heroicons/vue/24/solid';

const Cards = () => {
  return (
    <div>
      <div className="card w-96  shadow-xl border-2 border-slate-200 rounded-2xl p-6">
        <figure className="bg-[#F3F3F3] rounded-r-2xl">
          <img
            className="w-[130px] py-7"
            src="/public/pngwing 1 (1).png"
            alt="Shoes"
          />
        </figure>
        <div className="">
          <div className="flex items-center gap-4 justify-start my-4">
            <p className="text-[#23BE0A] bg-[#235a0a0d] rounded-3xl p-1 font-bold">
              Young Audit
            </p>
            <p className="text-[#23BE0A] bg-[#235a0a0d] rounded-3xl p-1 font-bold">
              Identity
            </p>
          </div>
          <h2 className="card-title">The Catcher in the Rye</h2>
          <p className="font-semibold py-4">By:</p>
          <hr />
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline">Fashion</div>
            <div className="flex items-center gap-2">
              <p>5.00</p>
              <p>
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
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
