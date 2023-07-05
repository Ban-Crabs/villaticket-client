import { Routes, Route } from "react-router-dom";
import EventHistory from "../../components/EventHistory/EventHistory";
import UserTicketHistory from "../../components/UserTicketHistory/UserTicketHistory";
import UserList from "../../components/UserList/UserList";
import SysadminPermit from "../../components/SysadminPermit/SysadminPermit";
import AccountPage from "../../components/AccountPage/AccountPage";
import ErrorView from "../ErrorView/ErrorView";
import CreateEvent from "../../components/CreateEvent/CreateEvent"
const AccountView = () => {
    return(
        <Routes>
            <Route index element={<AccountPage/>}/>
            <Route path="panel" element={<CreateEvent/>}/>
            <Route path="history" element={<EventHistory/>}/>
            <Route path="ticket-history" element={<UserTicketHistory/>}/>
            <Route path="admin/users" element={<UserList/>}/>
            <Route path="admin/permits" element={<SysadminPermit/>}/>
            <Route path="*" element={<ErrorView/>}/>
        </Routes>
    );
}

export default AccountView;