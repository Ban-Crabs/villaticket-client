// SysadminPermit

import style from "./SysadminPermit.module.scss";


const SysadminPermit = () => {
    return (
        <>
            <div className={style["container"]}>

                <div className={style["heading"]}>
                    <h5>Showing now:</h5>
                    <h1>All Users</h1>

                    <div className={style["divider"]}></div>
                </div>

                <div className={style["titles"]}>
                    <ul className={style["list"]}>
                        <li>Email</li>
                        <li>Username</li>
                    </ul>
                </div>

                <div className={style["cards-container"]}>
                    <div className={style["card-item"]}>
                        <div className={style["card-item-info"]}>
                            <ul className={style["list"]}>
                                <li>user@email.com</li>
                                <li>Username123</li>
                            </ul>
                        </div>

                        <div className={style["btn-container"]}>
                            <div className={style["card-item-btn"]}>
                                <button className={style["save"]} type="submit">Save Changes</button>
                            </div>

                            <div className={style["card-item-btn"]}>
                                <button type="submit">Ban</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style["permissions"]}>
                    {/* ASSIGNED PERMISSIONS */}
                    <ul>
                        <li><h4>Assigned Permissions</h4></li>
                        <li>
                            <div className={style["card-item-btn"]}>
                                <button className={style["permission-btn"]} type="submit">Client ⓧ</button>
                            </div>
                        </li>
                        <li>
                            <div className={style["card-item-btn"]}>
                                <button className={style["permission-btn"]} type="submit">Employee ⓧ</button>
                            </div>
                        </li>
                    </ul>

                    {/* UNASSIGNED PERMISSIONS */}
                    <ul>
                    <li><h4>Unassigned Permissions</h4></li>
                        <li>
                            <div className={style["card-item-btn"]}>
                                <button className={style["permission-btn"]} type="submit">Admin ✚</button>
                            </div>
                        </li>
                        <li>
                            <div className={style["card-item-btn"]}>
                                <button className={style["permission-btn"]} type="submit">Moderator ✚</button>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

        </>
    )
}

export default SysadminPermit;