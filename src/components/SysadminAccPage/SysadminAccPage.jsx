import style from "./SysadminAccPage.module.scss";

import nextSvg from "../../assets/next.svg";
import { useNavigate } from "react-router-dom";

const SysadminAccPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={style["container"]}>

                {/* LEFT SECTIOn */}
                <div className={style["other-options-container"]}>
                    
                    <h1>Welcome User!</h1>

                    <div className={style["button-wrapper"]}>
                        <button onClick={()=> navigate("/profile/history") } >
                            Ticket List
                            <img  className={style["svg"]} src={nextSvg} alt="" />
                        </button>

                         <button onClick={()=> navigate("profile/admin/events") }>
                            Event List
                            <img  className={style["svg"]} src={nextSvg} alt="" />
                        </button>

                        <button onClick={()=> navigate("profile/admin/users") }>
                            User List
                            <img  className={style["svg"]} src={nextSvg} alt="" />
                        </button>

                        <button onClick={()=> navigate("profile/admin/permits") }>
                            Permits
                            <img  className={style["svg"]} src={nextSvg} alt="" />
                        </button>

                        <button className={style["close-sys-btn"]}>
                            Close System
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
                            
                            <button type="submit">Update Info</button>
                        </form>

                        <form>
                            <label for="old-password">Old Password</label>
                            <input type="text" id="old-password" name="old-password" placeholder="Enter old password" />

                            <label for="new-password">Enter New Password</label>
                            <input type="text" id="new-password" name="new-password" placeholder="Enter New Password" />

                            <label for="re-new-password">Re-enter New Password</label>
                            <input type="text" id="re-new-password" name="re-new-password" placeholder="Re-enter New Password" />

                            <button type="submit">Change Password</button>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SysadminAccPage;