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

import TempView from "./components/UserEventList/UserEventList"


function App() {
  return (
    <>
      <Header/>
      <Routes>
        {/* <Route index element={<HomeView />} /> */}
        <Route index element={<TempView />} />
        <Route path="/profile/*" element={<AccountView/>}/>
        <Route path="/event" element={<EventDetails/>}/>
        <Route path="/order" element={<BuyTicket/>}/>
        <Route path="/confirm-order" element={<ConfirmOrder/>}/>
        <Route path="/place-order" element={<OrderSuccessful/>}/>
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