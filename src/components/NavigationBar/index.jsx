import { useState, useCallback } from "react";
import "./style.css";

const NavigationBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = useCallback(() => {
    setClick((prev) => !prev);
  }, []);
  const handleCloseMobileMenu = useCallback(() => {
    setClick(false);
  }, []);
  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <a href="#">
              <span>&lt; Punch / &gt;</span>
            </a>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={() => handleCloseMobileMenu()}>
              <a href="#">ABOUT</a>
            </li>
            <li className="menu-link" onClick={() => handleCloseMobileMenu()}>
              <a href="#">CONTACT</a>
            </li>
            <li className="menu-link" onClick={() => handleCloseMobileMenu()}>
              <a href="#">BLOG</a>
            </li>
          </ul>
          <div
            className="mobile-menu"
            onClick={() => {
              handleClick();
            }}
          >
            {click ? <p>x</p> : <p>=</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
