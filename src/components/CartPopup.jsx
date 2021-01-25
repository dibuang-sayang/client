export default function CartPopup() {
  return (
    <div className="shadow-xl w-64 origin-top-right absolute right-0 mt-2 pt-1 ring-1 ring-black ring-opacity-5 z-30">
      <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
        <div className="p-2 w-12">
          <img
            src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50"
            alt="img product"
          />
        </div>
        <div className="flex-auto text-sm w-32">
          <div className="font-bold">Product 1</div>
          <div className="truncate">Product 1 description</div>
          <div className="text-gray-400">Qt: 2</div>
        </div>
        <div className="flex flex-col w-18 font-medium items-end">
          <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trash-2 "
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>
          $12.22
        </div>
      </div>
      <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
        <div className="p-2 w-12">
          <img
            src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50"
            alt="img product"
          />
        </div>
        <div className="flex-auto text-sm w-32">
          <div className="font-bold">Product 2</div>
          <div className="truncate">Product 2 long description</div>
          <div className="text-gray-400">Qt: 2</div>
        </div>
        <div className="flex flex-col w-18 font-medium items-end">
          <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trash-2 "
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>
          $12.22
        </div>
      </div>
      <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
        <div className="p-2 w-12">
          <img
            src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50"
            alt="img product"
          />
        </div>
        <div className="flex-auto text-sm w-32">
          <div className="font-bold">Product 3</div>
          <div className="truncate">Product 3 description</div>
          <div className="text-gray-400">Qt: 2</div>
        </div>
        <div className="flex flex-col w-18 font-medium items-end">
          <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trash-2 "
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>
          $12.22
        </div>
      </div>
      <div className="p-4 justify-center flex bg-gray-300">
        <button
          className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
        >
          Checkout $36.66
        </button>
      </div>
    </div>
  );
}
