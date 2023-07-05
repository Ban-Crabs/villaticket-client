
import axios from "axios";
import { toast } from "react-toastify";
import { useConfigContext } from "../../contexts/ConfigContext";
import { useState } from "react";
import style from "./ConfirmEmail.module.scss"
const ConfirmEmail = () => {
    const {startLoading, stopLoading} = useConfigContext();
    // const [startLoading, stopLoading] = useConfigContext();

    //USE LS instead of useState
    const [activationCode, setActivationCode] = useState("")


    const postActivationCode = async () => {
        startLoading()
        try {
            await axios.post("/user/google", { code: activationCode})
        } catch (error) {
            toast.error(error)
            console.error(error)
        } finally {
            stopLoading()
        }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        postActivationCode();
    }
    

    return (
        <div className={style["container"]}>
            <h2>Final Step: Please confirm your loyalty to the Villaticket!</h2>
            <button  onSubmit={onSubmitHandler}> Activate Account</button>
        </div>
    );
}
export default ConfirmEmail;