import style from "./Header.module.scss";

import { getRolesLS, getTokenLS, getUserLS }  from "../../contexts/UserContext";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Header = () => {
    const [user, setUser] = useState(null);
    const [roles, setRoles] = useState([]);
    const [token, setToken] = useState(null);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const user1 = getUserLS();
        const roles1 = getRolesLS();
        const token1 = getTokenLS();
        if(token1 == null || user1 == null || roles1.length === 0){
            return;
        }
        else{
            setUser(user1);
            setRoles(roles1);
            setToken(token1);
        }
    }, [])

    const hasRole = (role) => {
        let ans = false;
        roles.forEach(r => {
            if(r.name === role) ans = true;
        })
        return ans;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        localStorage.setItem("search", search);
        navigate("/search");
    }

    const handleAnalytics = (e) => {
        e.preventDefault();
        navigate("/analytics")
    }

    const handleQrScanner = (e) => {
        e.preventDefault();
        navigate("/scanner")
    }

    const handleProfile = (e) => {
        e.preventDefault();
        if(user !== null) navigate("/profile");
        else navigate("/auth/login");
    }

    return(
        <section>
            <div className={style["header-container"]}>
                <div onClick={() => navigate("/")}>
                    <h1>villaticket</h1>
                </div>
                <div className={style["search-bar"]} >
                    <input placeholder="Search" type="text" value={search} onChange={({target}) => setSearch(target.value)}/>
                    <SearchIcon onClick={handleSearch} className={style["search-icon"]}/>
                </div>
                <div className={style["icon-container"]}>
                    <PersonIcon onClick={handleProfile} fontSize="large"/>
                    {hasRole("employee") ? <QrCodeScannerIcon onClick={handleQrScanner} fontSize="large"/> : null}
                    {hasRole("analyst") ? <EqualizerIcon onClick={handleAnalytics} fontSize="large"/> : null}
                </div>
            </div>
        </section>
    )
}

export default Header;