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
import PlanetDetail from "./components/content/PlanetDetail";
import Crew from "./pages/Crew";
import CrewDetail from "./components/content/CrewDetail";
import Technology from "./pages/Technology";
import TechnologyDetail from "./components/content/TechnologyDetail";

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
        {
          path: "crew",
          element: <Crew />,
          loader: loaderCrew,
          children: [{ path: ":crewId", element: <CrewDetail /> }],
        },
        {
          path: "technology",
          element: <Technology />,
          loader: loaderTechnology,
          children: [{ path: ":technologyId", element: <TechnologyDetail /> }],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
