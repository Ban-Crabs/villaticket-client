import style from "./EventHistory.module.scss";
import { useNavigate } from "react-router-dom";
import EventHistoryList from "./EventHistoryList/EventHistoryList";

const EventHistory = () => {
    const navigate = useNavigate();

    const backHandler = () => {
        navigate("/profile");
    }

    return (
        <section>
            <div className={style["heading"]}>
                <h1>Your Events</h1>
                <button className={style["add-event"]} onClick={() => backHandler}>Go Back</button>
            </div>
            <div className={style["container"]}>
                <div className={style["user-events"]}>
                    {/* UPCOMING EVENTS SECTION */}
                    <div className={style["container"]}>
                        <div className={style["user-events"]}>
                            {/* UPCOMING EVENTS SECTION */}
                            <h2 className={style["event-heading"]}>Associated Events</h2>
                            <EventHistoryList/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventHistory;