export default function ProductAdd() {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="bg-white flex flex-col justify-center items-center w-3/4">
        <div className="w-3/4 text-left">
          <h1 class="text-3xl font-bold text-orange-500 mb-2 font-custom">
            Tambah Produk
          </h1>
        </div>
        <div class="w-3/4 text-center">
          <div className="flex flex-row w-full justify-between">
            <div className="w-1/4 text-left mt-2 flex items-center">
              <label htmlFor="email">Nama Produk</label>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Nama Produk"
              autocomplete="off"
              class="w-3/4 mt-2 bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="w-1/4 text-left mt-2 flex items-center">
              <label htmlFor="email">Harga</label>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Harga"
              autocomplete="off"
              class="w-3/4 mt-2 bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="w-1/4 text-left mt-2 flex items-center">
              <label htmlFor="email">Kategori</label>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Kategori"
              autocomplete="off"
              class="w-3/4 mt-2 bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="w-1/4 text-left mt-2 flex items-center">
              <label htmlFor="email">Stok</label>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Stok"
              autocomplete="off"
              class="w-3/4 mt-2 bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="w-1/4 text-left mt-2 flex items-center">
              <label htmlFor="email">Gambar</label>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Gambar"
              autocomplete="off"
              class="w-3/4 mt-2 bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full flex justify-between mt-3">
            <div className="flex flex-col justify-center">
              <button className="bg-gray-100 hover:bg-gray-900 hover:text-white px-3 py-2">
                Upload Produk
              </button>
            </div>
            <img src="https://dummyimage.com/400x400/000/fff.jpg&text=+UPLOADED+IMAGE"></img>
          </div>
          <div className="mt-8 flex justify-center">
            <button class="bg-green-600 w-1/2 py-2 font-custom hover:bg-orange-600 text-white px-3  rounded text-lg focus:outline-none shadow">
              Tambah Produk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
