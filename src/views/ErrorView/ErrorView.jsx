import style from "./ErrorView.module.scss";

import imgError from "../../assets/error-logo.png";
import returnLogo from "../../assets/return.svg";

const ErrorView = () => {
    return (
        <>
            <div className={style["container"]}>
                <h3>You musn't be here!</h3>
                <div className={style["image-container"]}>
                    <img src={imgError} alt="error-page-not-found" />
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

export default ErrorView;