import { Routes, Route } from "react-router-dom";
import UserAccPage from "../../components/UserAccPage/UserAccPage";
import EventHistory from "../../components/EventHistory/EventHistory";
import EventListHolder from "../../components/EventListHolder/EventListHolder";
import UserTicketHistory from "../../components/UserTicketHistory/UserTicketHistory";
import UserList from "../../components/UserList/UserList";
import SysadminPermit from "../../components/SysadminPermit/SysadminPermit";

const AccountView = () => {
    return(
        <Routes>
            <Route index element={<UserAccPage/>}/>
            <Route path="history" element={<EventHistory/>}/>
            <Route path="event-list" element={<EventListHolder/>}/>
            <Route path="ticket-history" element={<UserTicketHistory/>}/>
            <Route path="admin/users" element={<UserList/>}/>
            <Route path="admin/permits" element={<SysadminPermit/>}/>
        </Routes>
    );
}

export default AccountView;