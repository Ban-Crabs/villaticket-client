import style from "./App.module.scss";

import { Routes, Route } from "react-router-dom";


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
import { Helmet } from "react-helmet";
import axios from "axios"
import QrScanner from "./components/QrScanner/QrScanner";
import AnalyticsPage from "./components/AnalyticsPage/AnalyticsPage";
import ConfirmEmail from "./components/ConfirmEmail/ConfirmEmail";
import { getUserLS, getActivationCodeLS, getRolesLS, getTokenLS } from "./contexts/UserContext";
import { useEffect, useState } from "react";


function App() {

  const [token, setToken] = useState(getTokenLS());
  const [user, setUser] = useState(getUserLS());
  const [roles, setRoles] = useState(getRolesLS());
  const [code, setCode] = useState(getActivationCodeLS());

  useEffect(() => {
    const _token = getTokenLS();
    if (_token !== null) {
      setToken(_token);
    }
    const _user = getUserLS();
    if (_user !== null) {
      setUser(_user);
    }
    const _roles = getRolesLS();
    if (_roles !== null) {
      setRoles(_roles);
    }
    const _code = getActivationCodeLS();
    if (_code !== null) {
      setCode(_code);
    }
  }, [])

  return (
    <section>
      <Helmet>
        <title> Villaticket</title>
      </Helmet>
      <Header token={token} user={user} roles={roles} code={code} />
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/profile/*" element={<AccountView />} />
        <Route path="/event" element={<EventDetails />} />
        <Route path="/event/list" element={<EventListHolder />} />
        <Route path="/order" element={<BuyTicket />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
        <Route path="/place-order" element={<OrderSuccessful />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/auth/*" element={<AuthView />} />
        <Route path="/scanner" element={<QrScanner />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/activate" element={<ConfirmEmail />} />
        <Route path="*" element={<ErrorView />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App