import style from "./AccountPage.module.scss";

import nextSvg from "../../assets/next.svg";
import { useNavigate } from "react-router-dom";
import useUserContext  from "../../contexts/UserContext";
import { useState } from "react";
import axios from "axios";

const AccountPage = () => {
    const {token, user, roles} = useUserContext();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reNewPassword, setReNewPassword] = useState("");


    const hasRole = (role) => {
        return roles.includes(role);
    }

    const handleUpdate = async(e) => {
        e.preventDefault();
        updateInfo();
    }

    const onPasswordChange = async(e) => {
        e.preventDefault();
        changePassword();
    }

    const updateInfo = async() => {
        try{
            await axios.post(`/user/${user.id}/details`, {username, email}, {headers: {"Authorization": `Bearer ${token}`}})
        }catch(err){
            console.log(err);
        }
    }

    const changePassword = async() => {
        try{
            if(newPassword !== reNewPassword) throw new Error("Passwords do not match");
            await axios.post(`/user/${user.id}/password`, {username, email, 'password':`${newPassword}`, oldPassword}, {headers: {"Authorization": `Bearer ${token}`}})
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <div className={style["container"]}>

                {/* LEFT SECTION */}
                <div className={style["other-options-container"]}>
                    
                    <h1>Welcome, {user.username}!</h1>

                    <div className={style["button-wrapper"]}>
                        {hasRole("user")
                        ? <button onClick={()=> navigate("/profile/ticket-history") } >
                            Ticket List
                            <img  className={style["svg"]} src={nextSvg} alt="" />
                        </button>
                        : null
                        }

                        {hasRole("user")
                        ? <button onClick={()=> navigate("/profile/history") }>
                            Event List
                            <img  className={style["svg"]} src={nextSvg} alt="" />
                        </button>  
                        : null
                        }

                        {hasRole("admin")
                        ? <button onClick={()=> navigate("profile/admin/users") }>
                            User List
                            <img  className={style["svg"]} src={nextSvg} alt="" />
                        </button>
                        : null
                        }

                        {hasRole("admin")
                        ? <button onClick={()=> navigate("profile/admin/permits") }>
                            Permits
                            <img  className={style["svg"]} src={nextSvg} alt="" />
                        </button>
                        : null
                        }

                        {hasRole("sysadmin")
                        ? <button className={style["close-sys-btn"]}>
                            Close System
                        </button>
                        : null
                        }
                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div className={style["update-info-container"]}>
                    <div className={style["forms-container"]}>

                        <form>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter your email" value={email} onChange={({target}) => setEmail(target.value)}/>
                            
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter your username" value={username} onChange={({target}) => setUsername(target.value)}/>
                            
                            <button type="button" onClick={handleUpdate}>Update Info</button>
                        </form>

                        <form>
                            <label htmlFor="old-password">Old Password</label>
                            <input type="text" id="old-password" name="old-password" placeholder="Enter old password" value={oldPassword} onChange={({target}) => setOldPassword(target.value)}/>

                            <label htmlFor="new-password">Enter New Password</label>
                            <input type="text" id="new-password" name="new-password" placeholder="Enter New Password" value={newPassword} onChange={({target}) => setNewPassword(target.value)}/>

                            <label htmlFor="re-new-password">Re-enter New Password</label>
                            <input type="text" id="re-new-password" name="re-new-password" placeholder="Re-enter New Password" value={reNewPassword} onChange={({target}) => setReNewPassword(target.value)}/>

                            <button type="button" onClick={onPasswordChange}>Change Password</button>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AccountPage;