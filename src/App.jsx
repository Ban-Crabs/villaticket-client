import style from "./App.module.scss";

import {Routes, Route} from "react-router-dom";

import View from "./components/Home/HomePage";

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