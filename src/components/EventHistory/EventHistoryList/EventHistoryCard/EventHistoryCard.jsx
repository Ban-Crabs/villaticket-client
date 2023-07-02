import style from "./EventHistoryCard.module.scss";
import defaultImg from '../../../../assets/warriors-stadium.jpg'
import nextSvg from '../../../../assets/next.svg'
import { useUserContext } from "../../../../contexts/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EventHistoryCard = props => {
    const { attendance } = props;
    const { roles } = useUserContext();
    const [eventImg, setEventImg] = useState([]);
    const navigate = useNavigate();
    let dateComponents = {};

    useEffect(() => {
        fetchEventImg();
    }, [])

    useEffect(() => {
        setDates();
    }, [attendance])

    const fetchEventImg = async () => {
        try {
            const { data } = await axios.get(`/event/${attendance.event.id}/image`);
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
            month: attendance.event.date.getMonth(),
            day: attendance.event.date.getDay(),
            year: attendance.event.date.getFullYear(),
            startHour: attendance.event.startTime.getHours(),
            startMinute: attendance.event.startTime.getMinutes(),
            endHour: attendance.event.endTime.getHours(),
            endMinute: attendance.event.endTime.getMinutes()
        }
    }

    const checkRole = (role) => {
        return roles.includes(role);
    }

    const onDisableHandler = () => {
        console.log("Disable");
    }

    const onEditHandler = () => {
        console.log("Edit");
    }

    const onViewHandler = () => {
        navigate(`/event/${attendance.event.id}`);
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
                    <h3>{attendance.event.title}</h3>
                    <p>{dateComponents.month} / {dateComponents.day} / {dateComponents.year} • {dateComponents.startHour}:{dateComponents.startMinute} - {dateComponents.endHour}:{dateComponents.endMinute}</p>
                    <p>Attended on {attendance.timestamp}</p>
                    <p>{attendance.event.location.name}</p>
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

export default EventHistoryCard;