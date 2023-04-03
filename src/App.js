import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  Link,
  Outlet,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { HomePage } from "./components/Home.page";
import ErrorPage from "./error-page";
import { QueryClient, QueryClientProvider } from "react-query";
import { TopNav } from "./components/TopNav";

function App() {
  const queyClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TopNav />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/super-heroes", element: <SuperHeroesPage /> },
        { path: "/rq-super-heroes", element: <RQSuperHeroesPage /> },
      ],
    },
    // {
    //   path: "/super-heroes",
    //   element: <SuperHeroesPage />,
    //   errorElement: <ErrorPage />,
    // },
    // {
    //   path: "/rq-super-heroes",
    //   element: <RQSuperHeroesPage />,
    //   errorElement: <ErrorPage />,
    //   //   children: [
    //   //     {
    //   //       path: "contacts/:contactId",
    //   //       element: <Contact />,
    //   //     },
    //   //   ],
    // },
  ]);
  return (
    <QueryClientProvider client={queyClient}>
      <RouterProvider router={router}>
        <TopNav />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
          <Outlet />
        </nav> */}
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
