import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa6";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const displayName = `${firstName} ${lastName}`;
    const photoURL = form.photoURL.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least 6 characters, including one uppercase letter and one lowercase letter."
      );
      return;
    }

    const signUpInfo = {
      firstName,
      lastName,
      email,
      password,
      displayName,
      photoURL,
    };

    console.log(signUpInfo);

    createUser(email, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName: displayName,
          photoURL: photoURL,
        });
      })
      .then(() => {
        Swal.fire(
          "Success!",
          "Your account has been created successfully! Welcome aboard.",
          "success"
        );
        console.log("Profile Updated successfully");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  return (
    <form
      onSubmit={handleSignUp}
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="w-full max-w-sm p-10 py-10 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && (
          <p className="mb-4 text-base font-medium  text-red-500 text-center">
            {error}
          </p>
        )}
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            First Name
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            name="firstName"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Last Name
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            name="lastName"
          />
        </div>
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
            type={showPassword ? "text" : "password"} // Toggle input type
            name="password"
          />
          <div className="relative">
            <span
              className="absolute bottom-[22px] cursor-pointer  right-2 text-base "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle icon */}
            </span>
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Photo URL
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            name="photoURL"
          />
        </div>
        <button className="w-full uppercase px-4 py-2 font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:bg-gradient-to-l focus:outline-none focus:shadow-outline">
          Sign Up
        </button>
        <p className="text-center">
          Already have an account ?{" "}
          <Link to="/login" className="text-purple-500 font-medium">
            Login
          </Link>
        </p>
        <p className="text-center">-----OR-----</p>
        {/* icons */}
        <p className="flex justify-center gap-4">
          <button className="btn btn-sm rounded-full">
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

export default SignUp;
