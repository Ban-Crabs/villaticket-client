import style from "./EventCard.module.scss";
import defaultImg from '../../../../assets/warriors-stadium.jpg'
import nextSvg from '../../../../assets/next.svg'
import { useUserContext } from "../../../../contexts/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EventCard = props => {
    const { event } = props;
    const { Roles } = useUserContext();
    const [eventImg, setEventImg] = useState([]);
    const navigate = useNavigate();
    let dateComponents = {};

    useEffect(() => {
        fetchEventImg();
    }, [])

    useEffect(() => {
        setDates();
    }, [event])

    const fetchEventImg = async () => {
        try {
            const { data } = await axios.get(`/event/${event.id}/image`);
            if (data) {
                setEventImg(data);
            }
            else {
                setEventImg(defaultImg);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const setDates = () => {
        dateComponents = {
            month: event.date.getMonth(),
            day: event.date.getDay(),
            year: event.date.getFullYear(),
            startHour: event.startTime.getHours(),
            startMinute: event.startTime.getMinutes(),
            endHour: event.endTime.getHours(),
            endMinute: event.endTime.getMinutes()
        }
    }

    const checkRole = (role) => {
        return Roles.includes(role);
    }

    const onDisableHandler = () => {
        console.log("Disable");
    }

    const onEditHandler = () => {
        console.log("Edit");
    }

    const onViewHandler = () => {
        navigate(`/event/${event.id}`);
    }

    const onScannerHandler = () => {
        console.log("Scanner");
    }

    const onAnalyticsHandler = () => {
        console.log("Analytics");
    }

    return (
        <div className={style["event-card"]}>
            {/* EVENT IMG SECTION */}
            <div className={style["event-card-img"]}>
                <img src={eventImg[0]} alt="" />
            </div>
            {/* EVENT INFO SECTION */}
            <div className={style["event-card-info"]}>
                {/* DATE INFO  */}
                <div className={style["event-card-info-date"]}>
                    <h3>{event.title}</h3>
                    <p>{dateComponents.month} / {dateComponents.day} / {dateComponents.year} • {dateComponents.startHour}:{dateComponents.startMinute} - {dateComponents.endHour}:{dateComponents.endMinute}</p>
                    <p>{event.location.name}</p>
                </div>
                {/* EVENT BUTTON CONTAINER */}
                <div className={style["event-btn-container"]}>

                    <div className={style["container1"]}>

                        {checkRole("admin")
                            ? <div className={style["event-card-info-btn"]}>
                                <button className={style["disable-event"]} type="submit" onClick={() => onDisableHandler}>Disable</button>
                            </div>
                            : null
                        }

                        {checkRole("admin")
                            ? <div className={style["event-card-info-btn"]}>
                                <button className={style["edit-event"]} type="submit" onClick={() => onEditHandler}>Edit</button>
                            </div>
                            : null
                        }

                        {checkRole("user")
                            ? <div className={style["event-card-info-btn"]}>
                                <button className={style["view-event"]} type="submit" onClick={() => onViewHandler}>View</button>
                            </div>
                            : null
                        }
                    </div>

                    <div className={style["container1"]}>

                        {checkRole("employee")
                            ? <div className={style["event-card-info-btn"]}>
                                <button className={style["scanner-event"]} type="submit" onClick={() => onScannerHandler}>Scanner</button>
                            </div>
                            : null
                        }

                        {checkRole("analyst")
                            ? <div className={style["event-card-info-btn"]}>
                                <button className={style["analytics-event"]} type="submit" onClick={() => onAnalyticsHandler}>Analytics</button>
                            </div>
                            : null
                        }
                    </div>

                </div>
                {/* SVG */}
                <div className={style["event-card-info-svg"]}>
                    <img src={nextSvg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default EventCard;