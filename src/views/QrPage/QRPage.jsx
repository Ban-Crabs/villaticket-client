import style from "./QRPage.module.scss";
import qrImage from "../../assets/temp-qr.svg"


const QR = () => {
    return (
        <>
            <div className={style["container"]}>
                <div className={style["title"]}>
                    <h1>Redeem your QR</h1>
                </div>
                <div className={style["divider"]}></div>

                <div className={style["qr-list-container"]}>
                    <div className={style["qr-card-item"]}>
                        <div className={style["qr-card-item-title"]}>
                            <h4>Username</h4>
                            <h2>QR <br />Code:</h2>
                            <p>XXXXXXXXX</p>
                        </div>
                        <div className={style["divider"]}></div>
                        <div className={style["qr-card-item-body"]}>
                            <h3>Yankees @ Mets</h3>
                            <div className={style["qr-item-body-info"]}>
                                <img src={qrImage} alt="qr-temp-img" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style["pagination"]}>
                    <ul>
                        <li> <a href="#" className={style["prev"]}>Prev</a> </li>
                        <li className={style["pageNumber"]}> 1 <a href="#"></a> </li>
                        <li className={style["pageNumber"]}> 2 <a href="#"></a> </li>
                        <li className={style["pageNumber"]}> 3 <a href="#"></a> </li>
                        <li> <a href="#" className={style["next"]}>Next</a> </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default QR;