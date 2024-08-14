import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const validatePassword = (password) => {
    let error = "";
    if (!/[A-Z]/.test(password)) {
      error = "Password must contain an uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      error = "Password must contain a lowercase letter";
    } else if (password.length < 6) {
      error = "Password must be at least 6 characters";
    }
    setPasswordError(error);
    return error === "";
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    if (!validatePassword(password)) {
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log("User created successfully:", result.user);
        // Optionally, save the name to the user profile or database
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  // Regex pattern for validating photo URL
  const photoURLPattern =
    /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|svg))$/i;
  return (
    <>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => validatePassword(e.target.value)}
                />
                {passwordError && (
                  <span className="text-red-600">{passwordError}</span>
                )}
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
              {/* photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", {
                    required: "Photo URL is required",
                    pattern: {
                      value: photoURLPattern,
                      message:
                        "Invalid photo URL. Please provide a valid URL ending with an image extension like .jpg, .png, etc.",
                    },
                  })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />

                {errors.photoURL && (
                  <span className="text-red-600">
                    {errors.photoURL.message}
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
