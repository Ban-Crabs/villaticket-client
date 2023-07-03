import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import style from './EventListHolder.module.scss';
import EventList from './EventList/EventList';

const EventListHolder = () => {
    const { token, roles } = useUserContext();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (token == null) {
            navigate('/auth/login');
        }
    }, [token])

    const checkRole = (role) => {
        if(!roles) return false;
        return roles.includes(role);
    }

    return (
        <section>
            {!roles 
            ? <div className={style["wrapper"]}>
                <div className={style["heading"]}>
                    <h1>Your Events</h1>
                    {checkRole("admin")
                        ? <div className={style["event-card-info-btn"]}>
                            <button className={style["add-event"]} type="submit" onClick={() => navigate("/event/create")}>Add Event</button>
                        </div>
                        : null
                    }
                </div>
                <div className={style["container"]}>
                    <div className={style["user-events"]}>
                        {/* UPCOMING EVENTS SECTION */}
                        <h2 className={style["event-heading"]}>Active Events</h2>
                        <EventList path={"/event/upcoming"} />
                        {/* PAST EVENTS SECTION */}
                        <h2 className={style["event-heading"]}>Inactive Events</h2>
                        <EventList path={"/event/finished"} />
                    </div>
                </div>
            </div>
            : null
            }
        </section>
    );

}

export default EventListHolder;