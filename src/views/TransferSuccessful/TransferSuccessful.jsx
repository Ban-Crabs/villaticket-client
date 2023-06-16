import style from './TransferSuccessful.module.scss'
import returnLogo from "../../assets/return.svg";
import phoneLogo from "../../assets/telephone.svg";
import mailLogo from "../../assets/envelope.svg";

const TransferSuccessful = () => {
    return (
        <>
            <div className={style["container"]}>
                <div className={style["success-message"]}>
                    <h1>Transfer Successful!</h1>
                </div>
                <div className={style["confirmation-message"]}>
                    <p>Your tickets have been sent to:</p>
                    <p className={style["underline"]}>otheruser@email.com</p>
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
                <div className={style["return-button"]}>
                    <button type="submit">
                        <img src={returnLogo} />
                        Go Home
                    </button>
                </div>
            </div>
        </>
    )
}

export default TransferSuccessful;