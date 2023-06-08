import style from "./ModeratorUserList.module.scss";


const ModeratorUserList = () => {
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
                        <li>Permissions</li>
                    </ul>
                </div>

                <div className={style["cards-container"]}>
                    <div className={style["card-item"]}>
                        <div className={style["card-item-info"]}>
                            <ul className={style["list"]}>
                                <li>user@email.com</li>
                                <li>Username123</li>
                                <li>Client</li>
                            </ul>
                        </div>

                        <div className={style["card-item-btn"]}>
                            <button type="submit">Ban</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ModeratorUserList;