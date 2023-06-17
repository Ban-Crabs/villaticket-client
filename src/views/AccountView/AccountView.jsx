import { Routes, Route } from "react-router-dom";
import UserAccPage from "../../components/UserAccPage/UserAccPage";
import UserEventHistory from "../../components/UserEventHistory/UserEventHistory";
import EventList from "../../components/UserEventList/UserEventList";
import SysadminAccPage from "../../components/SysadminAccPage/SysadminAccPage";

const AccountView = () => {
    return(
        <Routes>
            <Route index element={<UserAccPage/>}/>
            <Route path="/history" element={<UserEventHistory/>}/>
            <Route path="/event-list" element={<EventList/>}/>
            <Route path="/admin" element={<SysadminAccPage/>}/>
        </Routes>
    );
}

export default AccountView;