import style from "./Header.module.scss";

import { getRolesLS, getTokenLS, getUserLS }  from "../../contexts/UserContext";
import {useNavigate} from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Header = () => {

    const token = getTokenLS();
    const user = getUserLS();
    const roles = getRolesLS();

    const navigate = useNavigate();

    const hasRole = (role) => {
        let ans = false;
        roles.forEach(r => {
            if(r.name === role) ans = true;
        })
        return ans;
    }

    const handleSearch = (e) => {
        e.preventDefault();
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
                    <p contentEditable>Search</p>
                    <SearchIcon onClick={handleSearch} className={style["search-icon"]}/>
                </div>
                <div className={style["icon-container"]}>
                    <PersonIcon onClick={handleProfile} fontSize="large"/>
                    <QrCodeScannerIcon onClick={handleQrScanner} fontSize="large"/>
                    <EqualizerIcon onClick={handleAnalytics} fontSize="large"/>
                </div>
            </div>
        </section>
    )
}

export default Header;