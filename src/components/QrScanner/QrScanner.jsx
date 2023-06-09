import style from "./QrScanner.module.scss";

import eventImg from "../../assets/yankees-mets.jpg";

const QrScanner = () => {
    return (
        <>
            <div className={style["container"]}>

                {/* TOP SECTION */}
                <div className={style["verify-qr-container"]}>
                    <div className={style["qr-reader"]}></div>
                    <input type="text" id="qr-code" name="qr-code" placeholder="QR Code" />
                    <button>Verify Ticket</button>
                </div>

                <div className={style["divider"]}></div>

                {/* BOTTOM SECTION */}
                <div className={style["event-details-container"]}>

                    <div className={style["event-info"]}>
                        <div>
                            <div className={style["img-wrapper"]}>
                                <img src={eventImg} alt="" />
                            </div>
                            <p>*Data refreshes periodically</p>
                        </div>

                        <div className={style["event-title"]}>
                            <h2>Yankees @ Mets</h2>
                            <p>Wed, Jul 5, 2023 • 7:00 - 9:00pm</p>
                            <p><b>Sold Tickets:</b> 0000</p>
                            <p><b>Redeemed Tickets:</b> 0000</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default QrScanner;