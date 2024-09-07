/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginInfo = { email, password };
    console.log(loginInfo);

    login(email, password)
      .then((result) => {
        console.log("Login user", result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="w-full max-w-sm p-10 py-16 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Email
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
          />
        </div>
        <input
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:bg-gradient-to-l focus:outline-none focus:shadow-outline"
        />
        <p className="text-center">
          Don't have an account ?{" "}
          <Link to="/signUp" className="text-pink-500 font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
