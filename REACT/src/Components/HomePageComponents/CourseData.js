import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import Styles from "../../CSS/HomePageStyles/CourseData.module.css";

function CourseData({ Course }) {
  const popover = (
    <Popover>
      <Popover.Body>
        {" "}
        <Link
          to={`/course/${Course.id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <h5 style={{ fontWeight: "700", paddingTop: "20px" }}>
            {Course.title}
          </h5>
        </Link>
        <h6 style={{ color: "green", fontSize: "12px" }}>
          Updated <b>{Course.date}</b>
        </h6>
        <h6 style={{ color: "gray", fontSize: "12px" }}>
          {Course.hours} total hoursAll LevelsSubtitles
        </h6>
        <h6 style={{ fontSize: "15px", fontWeight: "450" }}>
          {Course.headline}
        </h6>
        <div>
          {Course.tasks.map((task) => (
            <>
              <i className="fa fa-solid fa-check"> </i> {task} <br></br>
            </>
          ))}
        </div>
        <div>
          <button
            style={{
              border: "none",
              marginTop: "10px",
              width: "65%",
              padding: "15px",
              backgroundColor: "#ba55d3",
              color: "white",
              marginRight: "30px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
          <button
            style={{
              width: "50px",
              padding: "10px",
              borderRadius: "50px",
              backgroundColor: "white",
            }}
          >
            <i className="fa fa-thin fa-heart"></i>
          </button>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className={`col-12 col-md-4 col-lg-2 ${Styles.coursedata}`}>
      <OverlayTrigger trigger="hover" placement="auto" overlay={popover}>
        <Link to={`/course/${Course.id}`}>
          <img src={Course.image} alt="courseImage" />
          <h6 style={{ fontWeight: "bold" }}>{Course.title}</h6>
          <h6>{Course.instructors[0].name}</h6>
          <span>
            <strong>{parseFloat(Course.rating.rating).toFixed(1)}</strong>{" "}
            <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
            <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
            <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
            <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
            <i
              className="fa fa-solid fa-star-half-empty"
              style={{ color: "#CD7F32" }}
            />{" "}
          </span>
          <h6 style={{ fontWeight: "bold" }}>E£{Course.price}</h6>
        </Link>
      </OverlayTrigger>
    </div>
  );
}

export default CourseData;
