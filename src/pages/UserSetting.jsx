export default function UserSetting() {
  return (
    <div className="flex w-full justify-center mt-12">
      <div className="w-11/12">
        <div className="w-1/2">
          <span className="text-2xl font-bold font-custom">
            Select Your Role
          </span>
          <div className="flex flex-row gap-2">
            <div class="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto">
              <img
                class="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />

              <div class="py-5 text-center">
                <a
                  href="#"
                  class="block text-2xl text-gray-800 dark:text-white font-bold"
                >
                  Penyumbang
                </a>
                <span class="text-sm text-gray-700 dark:text-gray-200">
                  Kamu punya sampah untuk disumbangkan atau dijual?
                </span>
              </div>
            </div>
            <div class="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto">
              <img
                class="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />

              <div class="py-5 text-center">
                <a
                  href="#"
                  class="block text-2xl text-gray-800 dark:text-white font-bold"
                >
                  Pengepul
                </a>
                <span class="text-sm text-gray-700 dark:text-gray-200">
                  Pendaur ulang sampah yang gitu-gitu
                </span>
              </div>
            </div>
            <div class="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto">
              <img
                class="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />

              <div class="py-5 text-center">
                <a
                  href="#"
                  class="block text-2xl text-gray-800 dark:text-white font-bold"
                >
                  Pengrajin
                </a>
                <span class="text-sm text-gray-700 dark:text-gray-200">
                  Pengrajin sampah gitu-gitu
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}
