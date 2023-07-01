import { Routes, Route } from "react-router-dom";
import UserAccPage from "../../components/UserAccPage/UserAccPage";
import UserEventHistory from "../../components/UserEventHistory/UserEventHistory";
import EventList from "../../components/UserEventList/UserEventList";
import AdminView from "./AdminView/AdminView"
import UserTicketHistory from "../../components/UserTicketHistory/UserTicketHistory";

const AccountView = () => {
    return(
        <Routes>
            <Route index element={<UserAccPage/>}/>
            <Route path="history" element={<UserEventHistory/>}/>
            <Route path="event-list" element={<EventList/>}/>
            <Route path="ticket-history" element={<UserTicketHistory/>}/>
            <Route path="admin/*" element={<AdminView/>}/>
        </Routes>
    );
}

export default AccountView;