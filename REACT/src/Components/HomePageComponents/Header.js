import React from "react";
import Styles from "../../CSS/HomePageStyles/Header.module.css";
import headerLink from "../../Photos/clock.jpg";

function Header() {
  return (
    <header>
      <div className={Styles.home} id="home">
        <div className={Styles.photodiv}>
          <div className={Styles.childhome}>
            <h2>New to Udemy? Lucky you.</h2>
            <h5>
              Courses start at E£169.99. Get your new-student offer before it
              expires.
            </h5>
          </div>
          <div className={Styles.photo}>
            <img src={headerLink} alt="clock" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
