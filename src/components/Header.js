import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">
        <Link className="link" to="/">
         Rick &amp; Morty Fan Page
         </Link>
         </h1>
    </header>
  );
}
