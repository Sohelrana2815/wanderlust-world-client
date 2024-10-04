/* eslint-disable react/no-unescaped-entities */
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Password requires a lowercase letter";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Password requires a uppercase letter";
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "Password requires a number";
  } else if (!/.{6,20}/.test(values.password)) {
    errors.password = "Password must be between 6 and 20 characters long";
  }
  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex w-full">
        <div className="text-center lg:text-left ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6  text-3xl">Formik Form Library</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={formik.handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
                className="input input-bordered"
                required
              />
              {formik.errors.email ? (
                <p className="text-red-600">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
                className="input input-bordered"
                required
              />
              {formik.errors.password ? (
                <p className="text-red-600">{formik.errors.password}</p>
              ) : null}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-center ">
              Don't have an account?{" "}
              <Link to="/signUp" className="font-medium text-primary">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
