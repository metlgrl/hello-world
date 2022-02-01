import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Burger from "../Burger/Burger";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;

  const Menu = (
    <div className="nav-right">
      <NavLink className="nav-link-right" to="about">
        About
      </NavLink>
      <NavLink className="nav-link-right" to="projects">
        Projects
      </NavLink>
      <a
        className="nav-link-right"
        href="https://drive.google.com/file/d/1rifByLkJPOOkMS9naQbVPC2nvvC5bOgC/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <NavLink className="nav-link-right" to="contact">
        Contact
      </NavLink>
    </div>
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setOpen(false);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <nav className="page-max">
      <div className="nav">
        <NavLink className="logo" to="/">
          Katie Boates-Goudreau
        </NavLink>
        {width < breakpoint ? (
          <Burger open={open} setOpen={setOpen} width={width} Menu={Menu} />
        ) : (
          <React.Fragment>{Menu}</React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
