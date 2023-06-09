import style from "./App.module.scss";

import {Routes, Route} from "react-router-dom";

import HomePage from "./components/Home/HomePage";

import View from "./components/EmployeeEventList/EmployeeEventList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<View />} />
      </Routes>
    </>
  )
}

export default App