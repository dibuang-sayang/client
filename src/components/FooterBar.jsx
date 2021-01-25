import { NavLink } from 'react-router-dom';

export default function FooterBar() {
  return (
    <footer className="flex justify-center px-4 text-gray-800 dark:text-white bg-white dark:bg-gray-800">
      <div className="container py-6">
        <h1 className="text-center text-lg font-bold lg:text-2xl">
          Join 31,000+ other and never miss <br /> out on new tips, tutorials,
          and more.
        </h1>

        <div className="flex justify-center mt-6">
          <div className="bg-white border focus-within:ring focus-within:border-blue-500 rounded-md">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input
                type="email"
                className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button className="w-full m-1 p-2 text-sm text-white bg-gray-800 rounded font-semibold uppercase lg:w-auto hover:bg-gray-700">
                subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="h-px mt-6 border-gray-300 dark:bg-gray-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <span
              href="/"
              className=" flex flex-row text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://media.discordapp.net/attachments/801791591927775257/802097289254404146/Untitled_design.png"
                alt="Workflow"
              />{' '}
              Dibuang Sayang
            </span>
          </div>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <NavLink
                to="/"
                className="px-4 text-sm text-gray-800 dark:text-gray-200 font-medium hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                activeClassName="text-white"
              >
                Beranda
              </NavLink>
              <NavLink
                to="/pasar"
                className="px-4 text-sm text-gray-800 dark:text-gray-200 font-medium hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Pasar
              </NavLink>
              <NavLink
                to="/tentang-kami"
                className="px-4 text-sm text-gray-800 dark:text-gray-200 font-medium hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Tentang Kami
              </NavLink>
              <NavLink
                to="/kontak"
                className="px-4 text-sm text-gray-800 dark:text-gray-200 font-medium hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Kontak
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
