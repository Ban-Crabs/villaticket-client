import style from "./UpcomingEvents.module.scss";


import { useNavigate } from "react-router-dom";
import SingleEvent from "./SingleEvent/SingleEvent";
import axios from "axios";
import { useEffect, useState } from "react";
const UpcomingEvents = () => {
    
    const [events, setEvents] = useState([]);
    useEffect(() =>{
        fetchUpcomingEvents();
        console.log(events)
    }, [])

    const fetchUpcomingEvents = async () => {
        try {
            //TODO endpoint que traiga por keyword status = upcoming o que el coso tire las mas proximas a realizarse XD dunno
            const {data} = await axios.get("/")
            setEvents(data.content)

        } catch (error) {
            console.log(error)
        }
    }

    const mappedEvents = events.map(event => {
        return(
            <SingleEvent event={event}/>
        )
    })

    const navigate = useNavigate();
    return (
        <>
            {/* MAIN TITLE */}
            <h2 className={style["upcoming"]}> Upcoming Events </h2>
            <hr />
            {/* CARDS */}
            { events == [] ? mappedEvents : <SingleEvent/>}
            
            {/* LOAD MORE EVENTS */}
            <div className={style["load-more"]}>
                <button onClick={() => navigate("/event/list")}>Load More</button>
            </div>
        </>
    );
}
export default UpcomingEvents;