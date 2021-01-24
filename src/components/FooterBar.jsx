export default function FooterBar() {
  return (
    <footer class="flex justify-center px-4 text-gray-800 dark:text-white bg-white dark:bg-gray-800">
      <div class="container py-6">
        <h1 class="text-center text-lg font-bold lg:text-2xl">
          Join 31,000+ other and never miss <br /> out on new tips, tutorials,
          and more.
        </h1>

        <div class="flex justify-center mt-6">
          <div class="bg-white border focus-within:ring focus-within:border-blue-500 rounded-md">
            <div class="flex flex-wrap justify-between md:flex-row">
              <input
                type="email"
                class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button class="w-full m-1 p-2 text-sm text-white bg-gray-800 rounded font-semibold uppercase lg:w-auto hover:bg-gray-700">
                subscribe
              </button>
            </div>
          </div>
        </div>

        <hr class="h-px mt-6 border-gray-300 dark:bg-gray-700 border-none" />

        <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <a
              href="#"
              class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              Brand
            </a>
          </div>

          <div class="flex mt-4 md:m-0">
            <div class="-mx-4">
              <a
                href="#"
                class="px-4 text-sm text-gray-800 dark:text-gray-200 font-medium hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                About
              </a>
              <a
                href="#"
                class="px-4 text-sm text-gray-800 dark:text-gray-200 font-medium hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Blog
              </a>
              <a
                href="#"
                class="px-4 text-sm text-gray-800 dark:text-gray-200 font-medium hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                News
              </a>
              <a
                href="#"
                class="px-4 text-sm text-gray-800 dark:text-gray-200 font-medium hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
