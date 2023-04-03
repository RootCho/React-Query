import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { QueryClientProvider } from "react-query";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: "/super-heroes", element: <SuperHeroesPage /> },
//       { path: "/rq-super-heroes", element: <RQSuperHeroesPage /> },
//     ],
//   },
//   // {
//   //   path: "/super-heroes",
//   //   element: <SuperHeroesPage />,
//   //   errorElement: <ErrorPage />,
//   // },
//   // {
//   //   path: "/rq-super-heroes",
//   //   element: <RQSuperHeroesPage />,
//   //   errorElement: <ErrorPage />,
//   //   //   children: [
//   //   //     {
//   //   //       path: "contacts/:contactId",
//   //   //       element: <Contact />,
//   //   //     },
//   //   //   ],
//   // },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <QueryClientProvider> */}
    {/* <RouterProvider router={router}> */}
    <App />
    {/* </RouterProvider> */}
    {/* </QueryClientProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
