import style from "./Header.module.scss";

import PersonIcon from '@mui/icons-material/Person';
import {useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { getUserLS } from "../../contexts/UserContext";

const Header = () => {
    const navigate = useNavigate();
    const user = getUserLS();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/search");
    }

    const handleProfile = (e) => {
        e.preventDefault();
        if(user !== null) navigate("/profile");
        else navigate("/auth/login");
    }

    return(
        <section>
            {user !== null 
            ? <div className={style["header-container"]}>
                <div onClick={() => navigate("/")}>
                    <h1>villaticket</h1>
                </div>
                <div className={style["search-bar"]} >
                    <p contentEditable>Search</p>
                    <SearchIcon onClick={handleSearch} className={style["search-icon"]}/>
                </div>
                <div className={style["icon-container"]}>
                    <PersonIcon onClick={handleProfile} fontSize="large"/>
                </div>
            </div>
            : <div className={style["header-container"]}>
            <div onClick={() => navigate("/")}>
                <h1>villaticket</h1>
            </div>
            <div className={style["search-bar"]} >
                <p contentEditable>Search</p>
                <SearchIcon onClick={handleSearch} className={style["search-icon"]}/>
            </div>
            <div className={style["icon-container"]}>
                <PersonIcon onClick={handleProfile} fontSize="large"/>
            </div>
        </div> 
            }
        </section>
    )
}

export default Header;