import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "@/components/App";
import { About } from "@/components/pages/about";
import { Shop } from "@/components/pages/shop";

const root = document.getElementById("root");

if (!root) throw new Error("DOM element root not found");

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

container.render(
  <StrictMode>
    <Suspense fallback={"loading..."}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
