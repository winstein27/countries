import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Countries from "./pages/Countries";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Countries /> },
      { path: "/detail", element: <Detail /> },
    ],
  },
]);

export default router;
