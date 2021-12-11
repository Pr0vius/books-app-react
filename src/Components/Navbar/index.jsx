import React from "react";
import { Link } from "react-router-dom";
import {
  FaBookmark,
  FaBookReader,
  FaBoxOpen,
  FaCheckCircle,
  FaHeart,
  FaHome,
  FaListUl,
} from "react-icons/fa";
import "./style.css";

const Navbar = ({ clickHandler }) => {
  const pages = [
    {
      id: "hWW1UhPLO7",
      icon: FaHome,
      path: "/",
      name: "Home",
    },
    {
      id: "4w6DOohsf2",
      icon: FaHeart,
      path: "/favorites",
      name: "Favorites",
    },
    {
      id: "GvJAbg4erb",
      icon: FaBookmark,
      path: "/reading",
      name: "Reading Now",
    },
    {
      id: "HiUYv7N39q",
      icon: FaBookReader,
      path: "/purchased",
      name: "Purchased",
    },
    {
      id: "57mlRDuQVm",
      icon: FaListUl,
      path: "/pendings",
      name: "Pending",
    },
    {
      id: "Z4Q7AwbP9l",
      icon: FaCheckCircle,
      path: "/finished",
      name: "Have Read",
    },
    {
      id: "Dho6ZsILkF",
      icon: FaBoxOpen,
      path: "/ebooks",
      name: "My eBooks",
    },
  ];
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        {pages.map(e => (
          <li key={e.id} onClick={clickHandler} className="navbar__li">
            <Link to={e.path}>
              {<e.icon />} {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
