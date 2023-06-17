import style from "./ConfirmOrder.module.scss";

import mailSvg from '../../assets/envelope.svg'
import secureSvg from '../../assets/secure.svg'
import creditCardSvg from '../../assets/visa.svg'
import { useNavigate } from "react-router-dom";


const ConfirmOrder = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={style["container"]}>
                {/* LEFT SECTION */}
                <div className={style["confirm-payment-container"]}>

                    <div className={style["confirm-payment-heading"]}>
                        <h1>Confirm Payment</h1>
                        <h5>
                            These are e-tickets and can be accesed through the <a href="#"> My Events</a> section.
                        </h5>
                    </div>

                    <div className={style["user-info"]}>
                        <ul>
                            <li>
                                <img className={style["svg"]} src={mailSvg} alt="mail-img" />
                                user@email.com
                            </li>
                            <li>
                                <img className={style["svg"]} src={creditCardSvg} alt="mail-img" />
                                Card ending 7428
                            </li>
                        </ul>
                    </div>

                    <div className={style["accept-terms-container"]}>

                        <div className={style["accept-terms-card"]}>
                            <div className={style["check-box"]}>
                                <input type="checkbox" checked />
                                <span className={style["checkmark"]}></span>
                            </div>
                            <div className={style["accept-terms-text"]}>
                                <h5>By purchasing a ticket, you agree to have an account with VillaTicket and be bound to <br />
                                    the Terms of Use and Privacy Policy </h5>
                            </div>
                        </div>
                    </div>


                    <div onClick={() => navigate("/place-order")} className={style["place-order-btn"]}>
                        <button type="submit">Place Order</button>
                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div className={style["event-info-container"]}>
                    <h2>Event Info</h2>
                    <h3>Yankees @ Mets</h3>
                    <h4>Mon Apr 24 at 6:40pm <br />Yankee Stadium, New York, NYC</h4>

                    <div className={style["tickets-info"]}>
                        <div className={style["puchase-info-container"]}>
                            <div className={style["purchase-details"]}>
                                <ul className={style["purchase-details-left"]}>
                                    <li>Tickets</li>
                                    <li>Tax</li>
                                </ul>
                                <ul className={style["purchase-details-right"]}>
                                    <li>$39.99</li>
                                    <li>$7.99</li>
                                </ul>
                            </div>
                            <div className={style["purchase-payment"]}>
                                <ul>
                                    <li><b>Total Payment</b></li>
                                    <li><b>$47.98</b></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={style["divider-container"]}>
                        <div className={style["divider"]}></div>
                    </div>
                    <div className={style["ticket-warranty"]}>
                        <img className={style["svg"]} src={secureSvg} alt="" />
                        <p>Every ticket is protected. If your event gets cancelled, we'll make it right.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmOrder;