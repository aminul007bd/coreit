import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    // Perform login logic
    login({ username: "user" });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
