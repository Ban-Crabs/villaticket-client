import style from "./QR.module.scss";


const QR = () => {
    return (
        <>
            <div className={style["container"]}>
                <div className={style["title"]}>
                    <h1>Your QRs</h1>
                </div>
                <div className={style["divider"]}></div>
                <div className={style["qr-list-container"]}>
                    <div className={style["qr-card"]}>
                        {/* TODO: IMPLEMENT QR-CARD */}
                        <span>QR</span>
                        <span>QR</span>
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