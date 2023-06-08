import style from "./ModeratorUserList.module.scss";


const ModeratorUserList = () => {
    return (
        <>
            <div className={style["heading"]}>
                <h5>Showing now:</h5>
                <h1>All Users</h1>
            </div>
            <div className={style["container"]}>

                <div className={style["divider"]}></div>

                <div className={style["card-description-title"]}>
                    <ul>
                        <li><b>Email</b></li>
                        <li><b>Username</b></li>
                        <li><b>Permissions</b></li>
                    </ul>
                </div>

                <div className={style["card-list-container"]}>

                    <div className={style["card-item"]}>
                        <div className={style["card-item-info"]}>

                            <div className={style["card-item-users-info"]}>
                                <ul>
                                    <li><b>user@email.com</b></li>
                                    <li>User123</li>
                                    <li>Cliente</li>
                                </ul>
                            </div>
                            
                        </div>

                        <div className={style["button-container"]}>
                            <button type="submit">Ban</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ModeratorUserList;