import style from "./App.module.scss";

import {Routes, Route} from "react-router-dom";

import ErrorPage from "./views/ErrorPage/ErrorPage";
import HomePage from "./views/HomePage/HomePage";
import ConfirmOrder from "./views/ConfirmOrder/ConfirmOrder";
import EventDetails from "./views/EventDetails/EventDetails";
import OrderSuccessful from "./views/OrderSuccessful/OrderSuccessful";
import QR from "./views/QrPage/QRPage";
import SearchResults from "./views/SearchResults/SearchResults";
import TrasnferSuccessful  from "./views/TransferSuccessful/TransferSuccessful";
import UserEventHistory from "./views/UserEventHistory/UserEventHistory";
import UserRedeemTicket from "./views/UserRedeemTicket/UserRedeemTicket";
import UserTransferTicket from "./views/UserTransferTicket/UserTransferTicket";
import BuyTicket from "./views/BuyTicket/BuyTicket";
import AuthView from "./views/AuthView/AuthView";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/buy-ticket" element={<BuyTicket/>}/>
        <Route path="/order-successful" element={<OrderSuccessful/>}/>
        <Route path="/event-details" element={<EventDetails/>}/>
        <Route path="/qr-page" element={<QR/>}/>
        <Route path="/search-results" element={<SearchResults/>}/>
        <Route path="/transfer-successful" element={<TrasnferSuccessful/>}/>
        <Route path="/confirm-order" element={<ConfirmOrder/>}/>
        <Route path="/user-event-history" element={<UserEventHistory/>}/>
        <Route path="/user-transfer-ticket" element={<UserTransferTicket/>}/>
        <Route path="/user-redeem-ticket" element={<UserRedeemTicket/>}/>
        <Route path="/user-ticket-history" element={<UserEventHistory/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App