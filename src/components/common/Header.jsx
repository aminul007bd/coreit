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
          {user ? (
            <button onClick={logout} className="text-white hover:underline">
              Logout
            </button>
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
