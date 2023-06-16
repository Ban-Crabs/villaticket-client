import style from "./SysadminAccPage.module.scss";

import nextSvg from "../../assets/next.svg";

const SysadminAccPage = () => {
    return (
        <>
            <div className={style["container"]}>

                {/* LEFT SECTIOn */}
                <div className={style["other-options-container"]}>
                    <h1>Welcome User!</h1>

                    <div className={style["button-wrapper"]}>
                        <button>
                            <a href="/">Event History</a>
                            <img  className={style["svg"]} src={nextSvg} alt="" />
                        </button>

                         <button>
                            <a href="/">Event List</a>
                            <img  className={style["svg"]} src={nextSvg} alt="" />
                        </button>

                        <button>
                            <a href="/">User List</a>
                            <img  className={style["svg"]} src={nextSvg} alt="" />
                        </button>

                        <button className={style["close-sys-btn"]}>
                            <a href="/">Close System</a>
                        </button>
                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div className={style["update-info-container"]}>
                    <div className={style["forms-container"]}>

                        <form>
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter your email" />
                            
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter your username" />
                            
                            <button type="submit">Updtae Info</button>
                        </form>

                        <form>
                            <label for="old-password">Old Password</label>
                            <input type="text" id="old-password" name="old-password" placeholder="Enter old password" />

                            <label for="new-password">Enter New Password</label>
                            <input type="text" id="new-password" name="new-password" placeholder="Enter New Password" />

                            <label for="re-new-password">Re-enter New Password</label>
                            <input type="text" id="re-new-password" name="re-new-password" placeholder="Re-enter New Password" />

                            <button type="submit">Change Pasword</button>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SysadminAccPage;