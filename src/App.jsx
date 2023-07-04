import style from "./App.module.scss";

import {Routes, Route} from "react-router-dom";


import ErrorView from "./views/ErrorView/ErrorView";
import HomeView from "./views/HomeView/HomeView"
import AccountView from "./views/AccountView/AccountView";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EventDetails from "./components/EventDetails/EventDetails";
import BuyTicket from "./components/BuyTicket/BuyTicket";
import ConfirmOrder from "./components/ConfirmOrder/ConfirmOrder";
import OrderSuccessful from "./components/OrderSuccessful/OrderSuccessful";
import SearchResults from "./components/SearchResults/SearchResults";
import EventListHolder from "./components/EventListHolder/EventListHolder";
import AuthView from "./views/AuthView/AuthView";
// import TempView from "./components/SysadminPermit/SysadminPermit"


function App() {
  window.onbeforeunload = function() {
    localStorage.clear();
 }
  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/profile/*" element={<AccountView/>}/>
        <Route path="/event" element={<EventDetails/>}/>
        <Route path="/event/list" element={<EventListHolder/>}/>
        <Route path="/order" element={<BuyTicket/>}/>
        <Route path="/confirm-order" element={<ConfirmOrder/>}/>
        <Route path="/place-order" element={<OrderSuccessful/>}/>
        <Route path="/search" element={<SearchResults/>}/>
        <Route path="/auth/*" element={<AuthView/>}/>
        {/*
          SEARCH
          BUY
          EVENT
          QR
        */}
        <Route path="*" element={<ErrorView/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App