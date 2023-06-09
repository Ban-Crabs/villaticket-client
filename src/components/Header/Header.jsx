import style from "./Header.module.scss";

import { getRolesLS, getTokenLS, getUserLS, getActivationCodeLS }  from "../../contexts/UserContext";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const Header = props => {
    const {user, roles, token, code} = props;
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        console.log(user, roles, token, code)
    }, [user, roles, token, code])

    //TODO add conditional rendering to icons
    const hasRole = (role) => {
        if(roles === null) return false;
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
        if(user === null){
            navigate("/auth/login")
        }
        else{
            navigate("/profile")
        }
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