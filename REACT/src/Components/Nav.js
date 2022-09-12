import React, { useRef } from "react";
import Styles from "../CSS/Nav.module.css";
import navLink from "../Photos/logo-udemy.svg";
import { Link, useNavigate } from "react-router-dom";
import useScroll from "../Hooks/useScroll";

const Nav = ({ setCheck }) => {
  const ref = useRef(null);
  let navigate = useNavigate();
  function searchPrevent(event) {
    event.preventDefault();
    setCheck(ref.current.value);
    navigate("../");
  }
  const position = useScroll();
  const check = window.location.href.includes("course");

  return (
    <nav style={{ display: position > 37 && check ? "none" : "" }}>
      <div className={`${Styles.pad} ${Styles.hidden}`}>
        <Link to="/">
          <i className="fa fa-bars fa-lg"></i>
        </Link>
      </div>
      <div className={`${Styles.notpad} ${Styles.udemy}`}>
        <Link to="/">
          <img src={navLink} alt="udemy" className={Styles.logo} />
        </Link>
      </div>
      <div className={`${Styles.pad} ${Styles.seen} ${Styles.cat}`}>
        <Link to="/">Categories</Link>
      </div>
      <div className={`${Styles.form} ${Styles.seen}`}>
        <form action="GET" onSubmit={searchPrevent}>
          <button type="submit">
            <i className="fa fa-search search"></i>
          </button>
          <input
            id="search"
            type="text"
            ref={ref}
            name="course"
            placeholder="Search for anything."
          />
        </form>
      </div>
      <div className={`${Styles.pad} ${Styles.seen1}`}>
        <Link to="/">Udemy Business</Link>
      </div>
      <div className={`${Styles.pad} ${Styles.seen2}`}>
        <Link to="/">Teach on Udemy</Link>
      </div>
      <div className={`${Styles.pad} ${Styles.hidden}`}>
        <Link to="/">
          <i className="fa fa-search search"></i>
        </Link>
      </div>
      <div className={`${Styles.notpad} ${Styles.cart}`}>
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
            alt="carticon"
            className={Styles.carticon}
          />
        </Link>
      </div>
      <div className={`${Styles.notpad} ${Styles.seen} ${Styles.log}`}>
        <Link to="/">
          <button className={Styles.navbutton}>Log in</button>
        </Link>
      </div>
      <div className={`${Styles.notpad} ${Styles.seen} ${Styles.log}`}>
        <Link to="/">
          <button className={`${Styles.navbutton} ${Styles.black}`}>
            Sign up
          </button>
        </Link>
      </div>
      <div className={`${Styles.notpad} ${Styles.seen} ${Styles.lang}`}>
        <Link to="/">
          <button
            className={Styles.navbutton}
            style={{ width: "40px", paddingTop: "4px" }}
          >
            <i className="material-icons">&#xe894;</i>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
