import style from "./EventDetails.module.scss";

import locationsImg from "../../assets/locations.png";

const EventDetails = () => {
    return (
        <>
            <div className={style["container"]}>
                {/* LEFT SECTION */}
                <div className={style["locations-container"]}>
                    <div className={style["event-heading"]}>
                        <h1>Yankees @ Mets</h1>
                        <h2>Mon Apr 24 at 6:00pm · Estadio Cuscatlán, El Salvador, SS</h2>
                    </div>

                    <div className={style["location-cards-container"]}>
                        <div className={style["location-card-item"]}>
                            <div className={style["card-item-info"]}>
                                <h3>Sol General (1)</h3>
                                <h4>Row 12</h4>
                                <h5>$9.99 ea</h5>
                            </div>
                            <div className={style["card-item-btn"]}>
                                <button type="submit">Buy Now</button>
                            </div>
                        </div>

                        <div className={style["location-card-item"]}>
                            <div className={style["card-item-info"]}>
                                <h3>Sol General (1)</h3>
                                <h4>Row 12</h4>
                                <h5>$9.99 ea</h5>
                            </div>
                            <div className={style["card-item-btn"]}>
                                <button type="submit">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div className={style["location-img-container"]}>
                    <img src={locationsImg} alt="locations-img" />
                </div>
            </div>
        </>
    )
}

export default EventDetails;