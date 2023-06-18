import style from "./OrderSuccessful.module.scss";
import returnLogo from "../../assets/return.svg";
import phoneLogo from "../../assets/telephone.svg";
import mailLogo from "../../assets/envelope.svg";
import { useNavigate } from 'react-router-dom';

const OrderSuccessful = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={style["container"]}>
                <div className={style["success-message"]}>
                    <h1>Order Successful!</h1>
                </div>
                <div className={style["confirmation-message"]}>
                    <p>Your tickets have been sent to:</p>
                    <p className={style["underline"]}>user@email.com</p>
                </div>
                <div className={style["error-message"]}>
                    <p>Any problems receiving your tickets?</p>
                    <p className={style["underline"]}>Resend e-mail</p>
                </div>

                <div className={style["contact-container"]}>
                    <p>Need help? contact us at:</p>
                    <div className={style["contact-info"]}>
                        <div className={style["contact-info-cellphone"]}>
                            <img src={phoneLogo} alt="phone-logo" />
                            <p>+503 2525-2525</p>
                        </div>
                        <div className={style["contact-info-mail"]}>
                            <img src={mailLogo} alt="phone-logo" />
                            <p>help@email.com</p>
                        </div>
                    </div>
                </div>

                <div onClick={()=> navigate("/")} className={style["return-button"]}>
                    <button type="submit">
                        Go Home
                    </button>
                </div>
            </div>
        </>
    )
}

export default OrderSuccessful;