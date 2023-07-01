import style from "./Header.module.scss";

import PersonIcon from '@mui/icons-material/Person';
import {useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
    const navigate = useNavigate();

    return(
        <div className={style["header-container"]}>
            <div onClick={() => navigate("/")}>
                <h1>villaticket</h1>
            </div>
            <div className={style["search-bar"]} >
                
                <p contentEditable>Search</p>
                <SearchIcon onClick={()=> navigate("/search")} className={style["search-icon"]}/>
            </div>
            <div className={style["icon-container"]}>
                <PersonIcon onClick={()=> navigate("/profile") } fontSize="large"/>
            </div>  
        </div>
    )
}

export default Header;