import { Link, useHistory } from 'react-router-dom';

export default function SidebarOffice() {
  const history = useHistory();
  const goToAddProduct = () => {
    history.push('/pasar/produk/add');
  };
  return (
    <div className="flex w-full p-4">
      <ul className="flex flex-col w-full">
        <li className="my-px">
          <div className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100">
            <span className="flex items-center justify-center text-lg text-gray-400">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </span>
            <span className="ml-3">Beranda Kantor</span>
          </div>
        </li>
        <li className="my-px">
          <div className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600">
            <span className="flex items-center justify-center text-lg text-gray-400">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
            </span>
            <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
              Manajemen Produk
            </span>
          </div>
        </li>
        <Link to="/office/produk/add">
          <li className="my-px">
            <div className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
              <span className="flex w-6 items-center justify-center text-lg text-gray-400"></span>
              <span className="ml-3 select-none">Tambah Produk</span>
            </div>
          </li>
        </Link>
        {/* <li className="my-px">
          <div className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
            <span className="flex w-6 items-center justify-center text-lg text-gray-400"></span>
            <span className="ml-3">Barang Jadi</span>
          </div>
        </li> */}
      </ul>
    </div>
  );
}
