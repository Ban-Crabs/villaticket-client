import style from "./Header.module.scss";

import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
    return(
        <div className={style["header-container"]}>
            <div>
                <h1>villaticket</h1>
            </div>
            <div className={style["icon-container"]}>
                <PersonIcon fontSize="large"/>
            </div>  
        </div>
    )
}

export default Header;