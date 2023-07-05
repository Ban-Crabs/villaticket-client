import style from "./UpcomingEvents.module.scss";
import { useNavigate } from "react-router-dom";
import SingleEvent from "./SingleEvent/SingleEvent";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpcomingEvents = () => {
    const token = localStorage.getItem("token");
    const [events, setEvents] = useState([]);

    useEffect(() =>{
        if(token != null){
            fetchUpcomingEvents();
            console.log(events)
        }
        else{
            toast.error("Please login to view events")
        }
    }, [token])

    const fetchUpcomingEvents = async () => {
        try {
            const {data} = await axios.get("/event/")
            setEvents(data.content)

        } catch (error) {
            console.log(error)
            toast.error(error)
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