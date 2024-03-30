import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page";
import HabitContainer from "./components/HabitContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HabitContainer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
