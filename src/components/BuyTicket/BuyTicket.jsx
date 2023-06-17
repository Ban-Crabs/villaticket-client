import style from "./BuyTicket.module.scss";

import eventImg from "../../assets/yankees-mets.jpg";
import pinSvg from "../../assets/location.svg";
import calendarSvg from "../../assets/calendar.svg";
import { useNavigate } from "react-router-dom";

const BuyTicket = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className={style["container"]}>
                {/* LEFT SECTION */}
                <div className={style["billing-info-container"]}>
                    <h1>Billing Information</h1>
                    <div className={style["warning-card"]}>
                        <p>Please enter the required information to continue with your transaction </p>
                    </div>
                    <div className={style["billing-info-form"]}>

                        <form>
                            <label for="card-name">Name on Card</label>
                            <input type="text" id="card-name" name="card-name" placeholder="John Doe" />

                            <label for="card-number">Name on Card</label>
                            <input type="text" id="card-number" name="card-number" placeholder="XXXX-XXXX-XXXX-XXXX" />

                            <ul>
                                <li>
                                    <label for="card-good-thru">Good Thru</label>
                                    <input type="text" id="card-good-thru" name="card-good-thru" placeholder="John Doe" />
                                </li>
                                <li>
                                    <label for="card-cvv">CVV</label>
                                    <input type="text" id="card-cvv" name="card-cvv" placeholder="John Doe" />
                                </li>
                            </ul>
                        </form>

                    </div>
                    <div onClick={()=> navigate("/confirm-order")} className={style["review-order-btn"]}>
                        <button type="submit">Review Your Order</button>
                    </div>
                </div>

                {/* RIGHT  SECTION */}
                <div className={style["event-details-container"]}>
                    <h3>Event details</h3>
                    <div className={style["event-details"]}>
                        <div className={style["event-details-img"]}>
                            <img src={eventImg} alt="event-img" />
                        </div>
                        <div className={style["event-details-info"]}>
                            <h2>Yankees @ Mets</h2>
                            <ul className={style["separation"]}>
                                <li>
                                    <img className={style["svg"]} src={pinSvg} alt="pin-svg" />
                                </li>
                                <li>Estadio Cuscatlan</li>
                            </ul>
                            <ul className={style["separation"]}>
                                <li>
                                    <img className={style["svg"]} src={calendarSvg} alt="pin-svg" />
                                </li>
                                <li>Mon, Apr 24 • <br /> 6:00-11:00pm</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style["divider"]}></div>
                    <div className={style["your-order-container"]}>
                        <h3>Your Order</h3>
                        <ul className={style["separation"]}>
                            <li># Tickets</li>
                            <li>3</li>
                        </ul>
                    </div>
                    <div className={style["divider"]}></div>
                    <div className={style["ticket-price-container"]}>
                        <ul className={style["separation"]}>
                            <li>Price</li>
                            <li>$39.99 x3</li>
                        </ul>
                        <ul className={style["separation"]}>
                            <li>Fees</li>
                            <li>-</li>
                        </ul>
                    </div>
                    <div className={style["divider"]}></div>
                    <div className={style["total-price-container"]}>
                        <ul className={style["separation"]}>
                            <li><b>Total</b></li>
                            <li><b>$119.97</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyTicket;