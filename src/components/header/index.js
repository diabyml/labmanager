import React, { useState } from "react";
import "./header.style.scss";
import { PAGES } from "../../seed/index";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiHealth } from "react-icons/bi";

import { useHistory } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(PAGES[0].id);
  const history = useHistory();

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  const handleLinkClick = (id, path) => {
    //change route with path
    history.push(path);
    //set active link id
    setActiveLink(id);
  };

  return (
    <header className="header  bg--primary">
      <div className="px-md pt-md flex items-center justify-between">
        {!isNavOpen && (
          <div className="header__brand-container flex items-center">
            <BiHealth className="header__icon mr-sm" />
            <h1 className="header__brand text--md mr-lg">DECLIC SANTE</h1>
          </div>
        )}
        <div>
          {!isNavOpen ? (
            <AiOutlineClose className="header__menu" onClick={toggleNav} />
          ) : (
            <AiOutlineMenu className="header__menu" onClick={toggleNav} />
          )}
        </div>
      </div>
      <nav className={`header__nav ${isNavOpen && "open"} mt-md`}>
        <ul>
          {PAGES.map(({ Icon, name, id, path }) => (
            <li
              key={id}
              onClick={() => handleLinkClick(id, path)}
              className={`px-md flex items-center ${
                isNavOpen && "apply-padding-y"
              } ${activeLink === id && "active-link"}`}
            >
              {<Icon className="header__icon mr-sm" />}
              {!isNavOpen && (
                <button className="reset header__nav-link text--md py-sm">
                  {name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
