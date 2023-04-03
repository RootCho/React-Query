import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

export const TopNav = () => {
  return (
    <nav>
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
    </nav>
  );
};
