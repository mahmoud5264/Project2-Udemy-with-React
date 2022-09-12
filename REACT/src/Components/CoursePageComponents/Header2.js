import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../App";
import Styles from "../../CSS/CoursePageStyles/Header2.module.css";

function Header2({ course }) {
  const page = useContext(PageContext);
  return (
    <div className={Styles.header}>
      <Link to={`/course/${course.id}`} className="bold noline">
        Development
      </Link>{" "}
      &nbsp; &gt; &nbsp;
      <Link to={`/course/${course.id}`} className="bold noline">
        Programming Languages
      </Link>{" "}
      &nbsp; &gt; &nbsp;
      <Link to={`/course/${course.id}`} className="bold noline">
        {page}
      </Link>
      <h2>{course.title}</h2>
      <h5>{course.headline}</h5>
      <div className={Styles.small}>
        <span className={Styles.rating.rating}>
          <strong>{parseFloat(course.rating.rating).toFixed(1)}</strong>{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i
            className="fa fa-solid fa-star-half-empty"
            style={{ color: "#CD7F32" }}
          />{" "}
        </span>
        <Link to={`/course/${course.id}`}>
          ({course.reviewsNumber} ratings)
        </Link>
        {" " + course.studentsNumber} students
      </div>
      <div className={Styles.names}>
        Created by{" "}
        <Link to={`/course/${course.id}`}>{course.instructornames}</Link>
      </div>
      <div className={Styles.lasthead}>
        <i className="fa fa-certificate"></i> <span>Last updated </span>
        {course.date}{" "}
        <i className="material-icons" style={{ fontSize: "15px" }}>
          &#xe894;
        </i>{" "}
        English <i className="fa fa-cc"></i> English
      </div>
    </div>
  );
}

export default Header2;
