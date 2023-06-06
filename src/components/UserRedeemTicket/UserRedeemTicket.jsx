import style from "./UserRedeemTicket.module.scss";

import cardImg from '../../assets/warriors-stadium.jpg'
import backSvg from '../../assets/left-arrow.svg'
import historySvg from '../../assets/history.svg'
import transferSvg from '../../assets/transfer.svg'
import ticketSvg from '../../assets/ticket.svg'

const UserRedeemTicket = () => {
    return (
        <>
            <div className={style["container"]}>
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
                                <img className={style["svg"]}src={historySvg} alt="" />
                                <a href="#">View History</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style["tickets-list"]}>
                    <h2>Your Tickets</h2>
                    <div className={style["tickets-list-container"]}>
                        <div className={style["tickets-list-card-item"]}>
                            <div className={style["check-box"]}>
                                <input type="checkbox" checked/>
                                <span className={style["checkmark"]}></span>
                            </div>
                            <div className={style["ticket-info-svg"]}>
                                <img src={ticketSvg} alt="" />
                            </div>
                            <div className={style["seat-details"]}>
                                <p>Platinum Ticket - Seat 113</p>
                            </div>
                        </div>
                    </div>
                    <div className={style["ticket-list-btn"]}>
                        <button type="submit">Redeem</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default UserRedeemTicket;