import React from "react";
import Styles from "../../CSS/HomePageStyles/Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={Styles.footer}>
        <h1 className="my-5">Top Categories</h1>
        <div className={`row ${Styles.topCategories}`}>
          <div className="col-12 col-md-4 col-lg-3">
            <img
              alt="Design"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
            />
            <p className={Styles.bold}>Design</p>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <img
              alt="Development"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
            />
            <p className={Styles.bold}>Development</p>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <img
              alt="Marketing"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
            />
            <p className={Styles.bold}>Marketing</p>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <img
              alt="IT and Software"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
            />
            <p className={Styles.bold}>IT and Software</p>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <img
              alt="Personal Development"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
            />
            <p className={Styles.bold}>Personal Development</p>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <img
              alt="Business"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
            />
            <p className={Styles.bold}>Business</p>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <img
              alt="Photography"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
            />
            <p className={Styles.bold}>Photography</p>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <img
              alt="Music"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
            />
            <p className={Styles.bold}>Music</p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </footer>
  );
}

export default Footer;
