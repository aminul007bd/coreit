import { Link } from "react-router-dom";
import React from "react";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
