import { Link } from 'react-router-dom';
export default function HeroMarketHome() {
  return (
    <Link
      to="/pasar"
      className="relative flex flex-col h-72 overflow-hidden items-center w-full max-w-6xl px-4 py-8 mx-auto text-center rounded-lg shadow-2xl lg:text-left lg:block bg-gradient-to-br from-purple-600 via-indigo-500 to-teal-400 sm:px-6 md:pb-0 md:pt-12 lg:px-12 lg:py-8"
    >
      <img
        src="https://cdn.discordapp.com/attachments/801791591927775257/803887777179500564/Blue_Photo_Tumblr_Banner.png"
        alt=""
        className="object-cover object absolute -top-20 left-0"
      />
      <div class="flex relative justify-center h-full items-end">
        <div class="inline-flex">
          <div class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-white hover:bg-pink-500 focus:outline-none focus:shadow-outline focus:border-indigo-300">
            Menuju Ke Pasar
          </div>
        </div>
      </div>
    </Link>
  );
}
