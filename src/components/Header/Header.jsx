import style from "./Header.module.scss";

import { getRolesLS, getTokenLS, getUserLS, getActivationCodeLS }  from "../../contexts/UserContext";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const Header = () => {
    const [user, setUser] = useState(getUserLS());
    const [roles, setRoles] = useState(getRolesLS());
    const [token, setToken] = useState(getTokenLS());
    const [search, setSearch] = useState("");

    const code = getActivationCodeLS();

    const navigate = useNavigate();

    useEffect(() => {
        const _user = getUserLS();
        const _roles = getRolesLS();
        const _token = getTokenLS();
        if (_user !== null) {
            setUser(_user);
        }
        if (_roles !== null) {
            setRoles(_roles);
        }
        if (_token !== null) {
            setToken(_token);
        }
    }, [])

    //TODO add conditional rendering to icons
    const hasRole = (role) => {
        let ans = false;
        if(roles === null) return false;
        else{
            roles.forEach(r => {
                if(r.name === role) ans = true;
            })
        }
        return ans;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        localStorage.setItem("search", search);
        navigate("/search");
    }

    const handleCheck = (e) => {
        e.preventDefault()
        navigate("/activate")
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
                    {(code !== null && user === null) ? <CheckBoxIcon onClick={handleCheck} fontSize="large"/> : null}
                </div>
            </div>
        </section>
    )
}

export default Header;