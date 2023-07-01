import SysadminEventList from "../../../components/SysadminEventList/SysadminEventList";
import SysadminUserList from "../../../components/SysadminUserList/SysadminUserList";
import SysadminAccPage from "../../../components/SysadminAccPage/SysadminAccPage";
import SysadminPermit from "../../../components/SysadminPermit/SysadminPermit";
import { Routes, Route } from "react-router-dom";

const AdminView = () => {
    return(
        <Routes>
            <Route index element={<SysadminAccPage/>}/>
            <Route path="admin-events" element={<SysadminEventList/>}/>
            <Route path="users" element={<SysadminUserList/>}/>
            <Route path="permits" element={<SysadminPermit/>}/>

        </Routes>
    );
}
export default AdminView;