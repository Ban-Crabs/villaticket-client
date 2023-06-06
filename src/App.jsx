import style from "./App.module.scss";

import {Routes, Route} from "react-router-dom";

import HomePage from "./components/Home/HomePage";

import View from "./components/UserTicketHistory/UserTicketHistory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App