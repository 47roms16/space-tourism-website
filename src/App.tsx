import { createBrowserRouter, RouterProvider } from "react-router";

import {
  loaderCrew,
  loaderDestination,
  loaderTechnology,
} from "./helpers/loader";

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
          path: "destination",
          element: <Destination />,
          loader: loaderDestination,
          children: [{ path: ":planetId", element: <PlanetDetail /> }],
        },
        { path: "crew", element: <Crew />, loader: loaderCrew },
        {
          path: "technology",
          element: <Technology />,
          loader: loaderTechnology,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
