import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="text-white text-lg">
          <Link to="/" className="mr-4 hover:underline">
            Home
          </Link>
          <Link to="/blog" className="mr-4 hover:underline">
            Blog
          </Link>
          <Link to="/contact" className="mr-4 hover:underline">
            Contact
          </Link>
          <Link to="/job" className="mr-4 hover:underline">
            Job
          </Link>
          <Link to="/service" className="mr-4 hover:underline">
            Service
          </Link>
        </div>
        <div className="text-white text-lg">
          {user ? (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Account
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={logout}
                          className={`${
                            active ? "bg-gray-100" : ""
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Logout
                        </button>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          ) : (
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
