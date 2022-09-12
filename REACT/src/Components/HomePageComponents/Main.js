import React from "react";
import Styles from "../../CSS/HomePageStyles/Main.module.css";
import CourseData from "./CourseData";
import { useContext } from "react";
import { CheckContext, FunctionContext } from "../../App";

function Main({ APIData, Courses, Description }) {
  const changeTab = useContext(FunctionContext);
  const check = useContext(CheckContext);

  const inlineStyle_ul = { marginLeft: "-5%", fontWeight: "200" };

  return (
    <main>
      <div className={Styles.main}>
        <div className={Styles.broad}>
          <h1>A broad selection of courses</h1>
          <h5>
            Choose from 185,000 online video courses with new additions
            published every month
          </h5>
          <ul className={Styles.nav} style={inlineStyle_ul}>
            <li style={{ marginLeft: "35px" }} className={Styles.navItem}>
              <a
                className={` ${Styles.navLink} ${Styles.active}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeTab("python");
                }}
              >
                Python
              </a>
            </li>
            <li className={Styles.navItem}>
              <a
                className={Styles.navLink}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeTab("excel");
                }}
              >
                Excel
              </a>
            </li>
            <li className={Styles.navItem}>
              <a
                className={`${Styles.navLink} abled`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeTab("webdevelopment");
                }}
              >
                Web Development
              </a>
            </li>
            <li className={Styles.navItem}>
              <a
                className={`${Styles.navLink} abled`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeTab("javascript");
                }}
              >
                JavaScript
              </a>
            </li>
            <li className={Styles.navItem}>
              <a
                className={`${Styles.navLink} abled`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeTab("datascience");
                }}
              >
                Data science
              </a>
            </li>
            <li className={Styles.navItem}>
              <a
                className={`${Styles.navLink} abled`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeTab("awscertification");
                }}
              >
                AWS Certification
              </a>
            </li>
            <li className={Styles.navItem}>
              <a
                className={`${Styles.navLink} abled`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeTab("drawing");
                }}
              >
                Drawing
              </a>
            </li>
          </ul>
        </div>

        <div className={Styles.mainchild} id="mainchild">
          <h2 className="bold">{Description.header}</h2>
          <h6>{Description.description}</h6>
          <a Link to="/">
            <button>Explore {Description.name}</button>
          </a>
          <div
            className={`${Styles.topCategories} ${Styles.courses} row`}
            id="courses"
          >
            {check === ""
              ? APIData.map((course, index) => (
                  <CourseData key={index} Course={course} />
                ))
              : Courses.map((course, index) => (
                  <CourseData key={index} Course={course} />
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
