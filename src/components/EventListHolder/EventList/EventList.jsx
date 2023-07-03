// EventList
import style from "./EventList.module.scss";

import EventCard from "./EventCard/EventCard";
import { getTokenLS } from "../../../contexts/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "../../Pagination/Pagination";

const EventList = props => {
    const { path } = props
    const token = getTokenLS();
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);
    let pageSize = 5;

    const fetchEvents = async (path) => {
        try {
            const { data } = await axios.get(`${path}`, {headers: { Authorization: `Bearer ${token}` }});
            setEvents(data.content);
            setTotalElements(data.totalElements);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchEventsByPage = async (page) => {
        try {
            const newPath = `${path}?page=${page-1}&amt=${pageSize}`;
            await fetchEvents(newPath);
            setCurrentPage(page);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(events !== null && events.length === 0)
            fetchEventsByPage(1);
    }, [])

    return (
        <div className={style["events-container"]}>
            {events.map((event) => {
                return <EventCard event={event} key={event.id} />
            })}

            <Pagination
                className={style["pagination-bar"]}
                currentPage={currentPage}
                totalCount={totalElements}
                pageSize={pageSize}
                onPageChange={page => fetchEventsByPage(page)}
            />
        </div>

    )
}

export default EventList;