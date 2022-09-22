import React, { useState, useEffect } from "react";
import Objectives from "../../Components/CoursePageComponents/ObjectivesSectionComponents/Objectives";
import Header2 from "../../Components/CoursePageComponents/Header2";
import Footer2 from "../../Components/CoursePageComponents/Footer2";
import CourseCard from "../../Components/CoursePageComponents/CourseCard";

function Page2({ APIData }) {
  const [course, setCourse] = useState();
  useEffect(() => {
    let index = 0;
    if (window.location.href[window.location.href.length - 2] !== "/") {
      index = window.location.href[window.location.href.length - 2];
      index += window.location.href[window.location.href.length - 1];
    } else {
      index = window.location.href[window.location.href.length - 1];
    }
    setCourse(APIData[index - 1]);
  }, []);
  return (
    <>
      {course === undefined ? (
        <i
          className="fa fa-sharp fa-solid fa-spinner fa-5x"
          style={{ marginLeft: "48%", marginTop: "60px" }}
        ></i>
      ) : (
        <>
          <Header2 course={course} />
          <Objectives course={course} />
          <CourseCard course={course} />
          <Footer2 />
        </>
      )}
    </>
  );
}
export default React.memo(Page2);
