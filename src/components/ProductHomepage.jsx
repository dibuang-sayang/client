export default function ProductHomepage() {
  return (
    <div className="flex max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80)',
        }}
      ></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-gray-800 dark:text-white font-bold text-2xl">
          Backpack
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
        </p>

        <div className="flex item-center mt-2">
          <svg
            className="w-5 h-5 fill-current text-gray-700 dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 fill-current text-gray-700 dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 fill-current text-gray-700 dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 fill-current text-gray-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 fill-current text-gray-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        </div>

        <div className="flex item-center justify-between mt-3">
          <h1 className="text-gray-700 dark:text-gray-200 font-bold text-lg md:text-xl">
            $220
          </h1>
          <button className="px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600 ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
