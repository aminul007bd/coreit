import { GlobeAltIcon, LinkIcon } from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul>
            <li className="mb-2">
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/press" className="hover:underline">
                Press
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul>
            <li className="mb-2">
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/support" className="hover:underline">
                Support Center
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <GlobeAltIcon className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <LinkIcon className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <GlobeAltIcon className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <LinkIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
