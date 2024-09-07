/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const Login = () => {
  const { login, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

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
        setError("");
      })
      .catch((error) => {
        console.log(error);
        const customMessage = getErrorMessage(error.code);
        setError(customMessage);
      });
  };

  //

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        console.log(error.message);
        const customMessage = getErrorMessage(error.code);
        setError(customMessage);
      });
  };
  // Function to get a custom error message based on Firebase error codes
  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/invalid-credential":
        return "Your email with your password are wrong";
      default:
        return "An unexpected error occurred. Please try again.";
    }
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
        {error && <span className="text-red-600">{error}</span>}
        <input
          type="submit"
          className="w-full btn px-4 py-2 font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:bg-gradient-to-l focus:outline-none focus:shadow-outline"
        />
        <p className="text-center">
          Don't have an account ?{" "}
          <Link to="/signUp" className="text-pink-500 font-medium">
            Sign Up
          </Link>
        </p>
        <p className="text-center">-----OR-----</p>
        {/* icons */}
        <p className="flex justify-center gap-4">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-sm rounded-full"
          >
            <FcGoogle className="text-2xl " />
          </button>
          <button className="btn btn-sm rounded-full">
            <FaGithub className="text-2xl " />
          </button>
        </p>
      </div>
    </form>
  );
};

export default Login;
