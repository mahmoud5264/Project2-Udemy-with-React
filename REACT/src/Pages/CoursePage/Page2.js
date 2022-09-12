import React, { useState, useEffect } from "react";
import axios from "axios";
import Objectives from "../../Components/CoursePageComponents/ObjectivesSectionComponents/Objectives";
import Header2 from "../../Components/CoursePageComponents/Header2";
import Footer2 from "../../Components/CoursePageComponents/Footer2";
import CourseCard from "../../Components/CoursePageComponents/CourseCard";

function Page2() {
  const [APIData, setAPIData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:3000/Python"
        );
        let index = 0;
        if (window.location.href[window.location.href.length - 2] !== "/") {
          index = window.location.href[window.location.href.length - 2];
          index += window.location.href[window.location.href.length - 1];
        } else {
          index = window.location.href[window.location.href.length - 1];
        }
        console.log(index);
        setAPIData(response[index]);
        setLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchData();
  }, []);
  if (loading) return <h1>LOADING....</h1>;
  return (
    <>
      <Header2 course={APIData} />
      <Objectives course={APIData} />
      <CourseCard course={APIData} />
      <Footer2 />
    </>
  );
}
export default Page2;
