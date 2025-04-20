import { createBrowserRouter, RouterProvider } from "react-router";

import Root from "./pages/Root";
import Errorpage from "./pages/Errorpage";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Errorpage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "destinations/:planet",
          element: <Destination />,
        { path: "crew", element: <Crew />,
        {
          path: "technology",
          element: <Technology />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
