import React from "react";
import Header from "../../Components/HomePageComponents/Header";
import Main from "../../Components/HomePageComponents/Main";
import Footer from "../../Components/HomePageComponents/Footer";

function Home({ Loading, APIData, Courses, Description }) {
  return (
    <>
      <Header />
      {Loading ? (
        <i className="fa fa-sharp fa-solid fa-spinner fa-5x"
          style={{ marginLeft: "48%", marginTop: "60px" }}
        ></i>
      ) : (
        <Main
          APIData={APIData}
          Courses={Courses}
          Description={Description}
        ></Main>
      )}
      <Footer />
    </>
  );
}

export default React.memo(Home);
