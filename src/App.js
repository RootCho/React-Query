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
import { ReactQueryDevtools } from "react-query/devtools";
import { TopNav } from "./components/TopNav";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { ParallelQueriesPage } from "./components/ParallelQueries.page";
import { DynamicParallelPage } from "./components/DynamicParallel.page";
import { DependentQueriesPage } from "./components/DependentQueries.page";

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
        { path: "/rq-super-heroes/:heroId", element: <RQSuperHeroPage /> },
        { path: "/rq-parallel", element: <ParallelQueriesPage /> },
        {
          path: "/rq-dynamic-parallel",
          element: <DynamicParallelPage heroIds={[1, 3]} />,
        },
        {
          path: "/rq-dependent",
          element: <DependentQueriesPage email="visit@example.com" />,
        },
      ],
    },
    // {
    //   path: "/rq-super-heroes",
    //   element: null,
    //   errorElement: <ErrorPage />,
    //   children: [
    //     { path: "/rq-super-heroes/:heroId", element: <RQSuperHeroPage /> },
    //   ],
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
      </RouterProvider>
      <ReactQueryDevtools InitialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
