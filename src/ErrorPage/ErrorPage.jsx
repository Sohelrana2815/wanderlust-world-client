import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h2 className="text-center">404 Not found!</h2>
      <Link to="/">
        <button className="btn btn-sm btn-success">Go to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
