import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import Home from "./Pages/HomePage/Home";
import Page2 from "./Pages/CoursePage/Page2";
import Nav from "./Components/Nav";
import usePageStates from "./Hooks/usePageStates";
export const CheckContext = React.createContext();
export const PageContext = React.createContext();
export const FunctionContext = React.createContext();
function App() {
  const [
    filterHandler,
    APIData,
    Description,
    Courses,
    setCourses,
    check,
    setCheck,
    Loading,
    setLoad,
    Tab,
    setTab,
    fetchData
  ] = usePageStates();
  const [prevTab, setPrev] = useState("Amr & Mahmoud");
  const changeTab = useCallback(
    (TabName) => {
      if (prevTab !== TabName) {
        console.log(TabName, prevTab);
        setLoad(true);
        setTab(TabName);
        setPrev(TabName);
      }
    },
    [Tab]
  );
  useEffect(() => {
    filterHandler();
  }, [check]);
  useEffect(() => {
    fetchData(Tab);
    setCourses([]);
    setCheck("");
  }, [Tab]);
  if (Loading) return <h1>gdsk </h1>;
  console.log(APIData);
  return (
    <div className="App">
      <Nav setCheck={setCheck}></Nav>
      <Routes>
        <Route
          path="/"
          element={
            <CheckContext.Provider value={check}>
              <FunctionContext.Provider value={changeTab}>
                {
                  <Home
                    Loading={Loading}
                    APIData={APIData}
                    Courses={Courses}
                    Description={Description}
                  />
                }
              </FunctionContext.Provider>
            </CheckContext.Provider>
          }
        ></Route>
        <Route
          path="/course/:couresid"
          element={
            <PageContext.Provider value={Description.name}>
              <Page2 APIData={APIData}> </Page2>
            </PageContext.Provider>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
