import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    color: "#1d71b8",
  };

  return (
    <header>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : null)}
        to="/"
      >
        Today
      </NavLink>
      <NavLink
        to="/hourly"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Hourly
      </NavLink>
      <NavLink
        to="/daily"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Daily
      </NavLink>
    </header>
  );
}
