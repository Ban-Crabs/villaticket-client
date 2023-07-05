
import axios from "axios";
import { toast } from "react-toastify";
import { useConfigContext } from "../../contexts/ConfigContext";
import { useState, useEffect } from "react";
import { getActivationCodeLS, getUserLS, logout } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import style from "./ConfirmEmail.module.scss"
const ConfirmEmail = () => {
    const {startLoading, stopLoading} = useConfigContext();
    // const [startLoading, stopLoading] = useConfigContext();

    const navigate = useNavigate();

    //USE LS instead of useState
    const [activationCode, setActivationCode] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const _activationCode = getActivationCodeLS();
        const _user = getUserLS();
        if (_activationCode !== null) {
            setActivationCode(_activationCode);
        }
        if (_user !== null) {
            setUser(_user);
        }
    }, [])

    const postActivationCode = async () => {
        try {
            console.log(activationCode)
            await axios.post("/user/activate", { code: `${activationCode}`, username: `${user.email}`}, {headers: {'Content-Type':'multipart/form-data'}})
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Submit")
        logout();
        postActivationCode();
    }
    

    return (
        <div className={style["container"]}>
            <h2>Final Step: Please confirm your loyalty to the Villaticket!</h2>
            <button onClick={onSubmitHandler}> Activate Account</button>
        </div>
    );
}
export default ConfirmEmail;