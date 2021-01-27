import { useState } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { user } from '../query';
import { signOutFirebase } from '../config/firestore';
import ClickAwayListener from 'react-click-away-listener';
import { currentUserVar } from '../cache';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { data } = useQuery(user.GET_CURRENT_USER);
  const history = useHistory();

  const doLogout = () => {
    signOutFirebase();
    localStorage.clear();
    currentUserVar({});
  };
  const goToCart = () => {
    history.push('/keranjang');
  };
  const goToChat = () => {
    history.push('/chat');
  };

  return (
    <nav className="bg-green-500 w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md bg-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://media.discordapp.net/attachments/801791591927775257/802097289254404146/Untitled_design.png"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://media.discordapp.net/attachments/801791591927775257/802097289254404146/Untitled_design.png"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className="text-gray-900 hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="text-white"
                >
                  Beranda
                </NavLink>
                {data.getCurrentUser.firstName && 
                (
                  <NavLink
                    to="/office-list"
                    className="text-gray-900 hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="text-white"
                  >
                    Cari Rekan
                  </NavLink>
                )}
                <NavLink
                  to="/pasar"
                  className="text-gray-900 hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pasar
                </NavLink>
                <NavLink
                  to="/tentang-kami"
                  className="text-gray-900 hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tentang Kami
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-transparent p-1 rounded-full text-gray-600 focus:border-transparent focus:outline-none">
              <div
                className="ml-3 relative text-gray-900 hover:text-white flex flex-row items-center"
                onClick={goToChat}
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                {/* {showCart && (
                  <ClickAwayListener
                    onClickAway={() => {
                      setShowCart(!showCart);
                    }}
                  >
                    <CartPopup
                      onMouseLeave={() => {
                        setShowCart(!showCart);
                      }}
                    />
                  </ClickAwayListener>
                )} */}
              </div>
            </button>
            <button className="bg-transparent p-1 rounded-full text-gray-600 focus:border-transparent focus:outline-none">
              <div
                className="ml-3 relative text-gray-900 hover:text-white flex flex-row items-center"
                onClick={goToCart}
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {/* {showCart && (
                  <ClickAwayListener
                    onClickAway={() => {
                      setShowCart(!showCart);
                    }}
                  >
                    <CartPopup
                      onMouseLeave={() => {
                        setShowCart(!showCart);
                      }}
                    />
                  </ClickAwayListener>
                )} */}
              </div>
            </button>
            <div className="ml-3 relative">
              {data.getCurrentUser.firstName ? (
                <div onClick={() => setShowMenu(!showMenu)}>
                  <button
                    className="bg-transparent flex text-sm rounded-full focus:border-transparent focus:outline-none"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://api.hello-avatar.com/adorables/face"
                      alt=""
                    />
                  </button>
                </div>
              ) : (
                <div className="flex flex-row">
                  <Link
                    to="/login"
                    className="text-gray-900 hover:bg-transparent hover:text-white px-2 py-2 rounded-md text-sm font-medium flex flex-row gap-1"
                  >
                    Login
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/register"
                    className="text-gray-900 hover:bg-transparent hover:text-white px-2 py-2 rounded-md text-sm font-medium flex flex-row gap-1"
                  >
                    Register
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                      />
                    </svg>
                  </Link>
                </div>
              )}

              {showMenu && (
                <ClickAwayListener
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  ariaLabelledby="user-menu"
                  onClickAway={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  {/* <Link
                    to="/chat"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Chat Dashboard
                  </Link> */}
                  <Link
                    to="/office"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row gap-2 mx-1"
                    role="menuitem"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Kantor
                  </Link>
                  <div onClick={doLogout}>
                    <Link
                      to="/"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row gap-2 mx-1"
                      role="menuitem"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Sign out
                    </Link>
                  </div>
                  {/* <Link
                    to="/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    register
                  </Link> */}
                  {/* <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    login
                  </Link> */}
                </ClickAwayListener>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </a>
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div> */}
    </nav>
  );
}
