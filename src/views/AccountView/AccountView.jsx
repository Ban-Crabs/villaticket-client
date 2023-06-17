import { Routes, Route } from "react-router-dom";
import UserAccPage from "../../components/UserAccPage/UserAccPage";
import UserEventHistory from "../../components/UserEventHistory/UserEventHistory";
import EventList from "../../components/UserEventList/UserEventList";

const AccountView = () => {
    return(
        <Routes>
            <Route index element={<UserAccPage/>}/>
            <Route path="/history" element={<UserEventHistory/>}/>
            <Route path="/event-list" element={<EventList/>}/>
        </Routes>
    );
}

export default AccountView;