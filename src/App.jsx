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
import {Helmet} from "react-helmet"
import axios from "axios"
import QrScanner from "./components/QrScanner/QrScanner";
import AnalyticsPage from "./components/AnalyticsPage/AnalyticsPage";
// import TempView from "./components/SysadminPermit/SysadminPermit"
 //PASAR TOKEN ADJSDKJASBKDJSA 
// axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}


function App() {
  window.onbeforeunload = function() {
    localStorage.clear();
 }
  return (
    <>
      <Helmet>
        <title> Villaticket</title>
      </Helmet>
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
        <Route path="/scanner" element={<QrScanner/>}/>
        <Route path="*" element={<ErrorView/>}/>
        <Route path="/analytics" elemen={<AnalyticsPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App