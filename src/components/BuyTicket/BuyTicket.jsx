import style from "./BuyTicket.module.scss";


const BuyTicket = () => {
    return (
        <>
            <div className={style["container"]}>
                {/* LEFT SECTION */}
                <div className={style["billing-info-container"]}>
                    <h1>Billing Information</h1>
                    <div className={style["warning-card"]}>
                        <p>Please enter the required information to continue with your transaction. </p>
                    </div>
                    <div className={style["billing-info-form"]}></div>
                    <div className={style["review-order-btn"]}>
                        <button type="submit">Review Your Order</button>
                    </div>
                </div>

                {/* RIGHT  SECTION */}
                <div className={style["event-details-container"]}>
                    <h3>Event details</h3>
                    <div className={style["event-details"]}>
                        <h4>img here</h4>
                        <div>
                            <h2>Yankees @ Mets</h2>
                            <ul className={style["separation"]}>
                                <li>svg</li>
                                <li>Estadio Cuscatlan</li>
                            </ul>
                            <ul className={style["separation"]}>
                                <li>svg</li>
                                <li>Mon, Apr 24 • 6:00-11:00pm</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style["divider"]}></div>
                    <div className={style["your-order-container"]}>
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
                            <li>Total</li>
                            <li>$119.97</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyTicket;