import style from "./App.module.scss";

import {Routes, Route} from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";

import View from "./components/BuyTicket/BuyTicket";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<View/>}/>
      </Routes>
    </>
  )
}

export default App