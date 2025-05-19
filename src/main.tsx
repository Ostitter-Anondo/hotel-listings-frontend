import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home";
import ContextProvider from "./utils/ContextProvider";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=>fetch(`${import.meta.env.VITE_dbApi}/hotels/`)
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      }
    ]
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
	</StrictMode>
);
