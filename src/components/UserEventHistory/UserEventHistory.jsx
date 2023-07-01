import style from "./UserEventHistory.module.scss";

import eventImg from '../../assets/warriors-stadium.jpg'
import nextSvg from '../../assets/next.svg'
import { useNavigate } from "react-router-dom";

const UserEventHistory = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={style["heading"]}>
                <h1>Your Events</h1>
            </div>
            <div className={style["container"]}>
                <div className={style["user-events"]}>
                    {/* UPCOMING EVENTS SECTION */}
                    <h2 className={style["event-heading"]}>Upcoming Events</h2>
                    <div className={style["upcoming-events-container"]}>
                        <div className={style["event-card"]}>
                            {/* EVENT IMG SECTION */}
                            <div className={style["event-card-img"]}>
                                <img src={eventImg} alt="" />
                            </div>
                            {/* EVENT INFO SECTION */}
                            <div className={style["event-card-info"]}>
                                {/* DATE INFO  */}
                                <div className={style["event-card-info-date"]}>
                                    <h3>Lakers @ Warriors</h3>
                                    <p>Wed, Jul 5, 2023 • 7:00 - 9:00pm</p>
                                    <p>Chase Center</p>
                                </div>
                                {/* EVENT BUTTON VIEW TICKET */}
                                <div onClick={()=> navigate("/profile/ticket-history")} className={style["event-card-info-btn"]}>
                                    <button type="submit">View Tickets</button>
                                </div>
                                {/* SVG */}
                                <div className={style["event-card-info-svg"]}>
                                    <img src={nextSvg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PAST EVENTS SECTION */}
                    <h2 className={style["event-heading"]}>Past Events</h2>
                    <div className={style["past-events-container"]}>
                        <div className={style["event-card"]}>
                            {/* EVENT IMG SECTION */}
                            <div className={style["event-card-img"]}>
                                <img src={eventImg} alt="" />
                            </div>
                            {/* EVENT INFO SECTION */}
                            <div className={style["event-card-info"]}>
                                {/* DATE INFO  */}
                                <div className={style["event-card-info-date"]}>
                                    <h3>Lakers @ Warriors</h3>
                                    <p>Wed, Jul 5, 2023 • 7:00 - 9:00pm</p>
                                    <p>Chase Center</p>
                                </div>
                                {/* EVENT BUTTON VIEW TICKET */}
                                <div className={style["event-card-info-btn"]}>
                                    <button type="submit">View Tickets</button>
                                </div>
                                {/* SVG */}
                                <div className={style["event-card-info-svg"]}>
                                    <img src={nextSvg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserEventHistory;