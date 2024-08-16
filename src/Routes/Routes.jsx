import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTouristsSpots from "../Pages/AddTouristsSpots/AddTouristsSpots";
import PrivateRoute from "../Private/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AllTouristsSpots from "../Pages/AllTouristsSpots/AllTouristsSpots";
import MyList from "../Pages/MyList/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addTourist",
        element: (
          <PrivateRoute>
            <AddTouristsSpots />,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allTouristSpots",
        element: <AllTouristsSpots />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/spots"),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
