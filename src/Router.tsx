import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Countries from "./pages/Countries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Countries /> }],
  },
]);

export default router;
