import { useState, useEffect } from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import style from './EventHistoryList.module.scss';
import EventHistoryCard from './EventHistoryCard/EventHistoryCard';
import Pagination from '../../Pagination/Pagination';
import axios from 'axios';

const EventHistoryList = () => {
    const { token, user } = useUserContext();
    const [attendances, setAttendances] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);
    const path = `/user/${user.username}/attendance`;
    let pageSize = 5;

    const fetchEvents = async (path) => {
        try {
            const { data } = await axios.get(`${path}`, {headers: { Authorization: `Bearer ${token}` }});
            setAttendances(data.content);
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
        if(attendances.length === 0)
            fetchEventsByPage(1);
    }, [])

    return (
        <div className={style["events-container"]}>
            {attendances.map((att) => {
                return <EventHistoryCard attendance={att} key={att.id} />
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

export default EventHistoryList;