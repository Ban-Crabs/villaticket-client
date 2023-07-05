import style from "./SearchResults.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import {getTokenLS} from "../../contexts/UserContext"
import SearchCard from "./SearchCard/SearchCard"
import { useEffect, useState } from "react";
import axios from "axios";

const SearchResults = () => {
    const token = getTokenLS();
    const { keyword } = localStorage.getItem("search") || "";
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

    

    useEffect(() => {
        fetchSearchResults()
    }, [])

    const fetchSearchResults = async () => {
        try {
            const {data} = await axios.get(`/event/?query=${keyword}`, {headers: {'Authorization': `Bearer ${token}`}});
            setEvents(data.content)
        } catch (error) {
            console.log(error)
        }
    }
    const mappedEvents = events.map( event => {
        return(
            <SearchCard event={event} key={event.id}/>
        )
    })
    return (
        <>
            <div className={style["heading"]}>
                <h5>Results for</h5>
                <h1>{keyword || "New York Yankees"}</h1>
                <p>Tickets</p>
            </div>

            <div className={style["divider"]}></div>

            <div className={style["container"]}>
                { events == [] ? mappedEvents :<SearchCard/>}
            </div>
        </>
    )
}

export default SearchResults;