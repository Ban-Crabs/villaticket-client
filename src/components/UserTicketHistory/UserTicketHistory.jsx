import style from "./UserTicketHistory.module.scss";

import cardImg from '../../assets/warriors-stadium.jpg'
import backSvg from '../../assets/left-arrow.svg'
import transferSvg from '../../assets/transfer.svg'
import qrSvg from '../../assets/temp-qr.svg'
import cartSvg from '../../assets/shopping-cart.svg'
import { useNavigate } from "react-router-dom";


const UserTicketHistory = () => {

    const navigate = useNavigate()

    

    return (
        <>
            <div className={style["container"]}>
                {/* LEFT SECTION */}
                <div className={style["ticket-info"]}>
                    <div className={style["ticket-info-return"]}>
                        <img src={backSvg} alt="" />
                        <a href="#">Back To Tickets</a>
                    </div>
                    <div className={style["ticket-info-img"]}>
                        <img src={cardImg} alt="" />
                    </div>
                    <div className={style["ticket-info-details"]}>
                        <h3>Lakers @ Warriors</h3>
                        <p>Wed, Jul 5, 2023 • 7:00pm - 9:00pm</p>
                        <p>Chase Center</p>
                    </div>
                    <div className={style["ticket-info-other-options"]}>
                        <h4>Other Options</h4>
                        <ul>
                            <li>
                                <img className={style["svg"]} src={transferSvg} alt="" />
                                <a href="#">Transfer your Ticket</a>
                            </li>
                            <li>
                                <img className={style["svg"]} src={qrSvg} alt="" />
                                <a href="#">Use your tickets</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* RIGHT SECTION */}
                <div className={style["tickets-list"]}>
                    <h2>History</h2>
                    <div className={style["tickets-list-container"]}>
                        <div className={style["tickets-list-card-item"]}>

                            <div className={style["card-title"]}>
                                <img className={style["svg"]} src={cartSvg} alt="" />
                                <h3>You Purchased 3 Tickets</h3>
                            </div>

                            <div className={style["puchase-info-container"]}>
                                <div>
                                    <h4>3 Tickets Confirmed</h4>
                                </div>
                                <div className={style["purchase-details"]}>
                                    <ul className={style["purchase-details-left"]}>
                                        <li>Tickets</li>
                                        <li>Payment Method</li>
                                        <li>Order #</li>
                                    </ul>
                                    <ul className={style["purchase-details-right"]}>
                                        <li>3 Platinum</li>
                                        <li>**** 7745</li>
                                        <li>6P27K4DG</li>
                                    </ul>
                                </div>
                                <div className={style["divider"]}></div>
                                <div className={style["purchase-payment"]}>
                                    <ul>
                                        <li>Total Payment</li>
                                        <li>$390.99</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserTicketHistory;