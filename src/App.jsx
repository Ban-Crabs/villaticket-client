import style from "./App.module.scss";

import {Routes, Route} from "react-router-dom";


import ErrorPage from "./views/ErrorView/ErrorView";
import HomeView from "./views/HomeView/HomeView"
import AccountView from "./views/AccountView/AccountView";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/profile/*" element={<AccountView/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App