import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">Today</NavLink>
      <NavLink to="/hourly">Hourly</NavLink>
      <NavLink to="/daily">Daily</NavLink>
    </header>
  );
}
