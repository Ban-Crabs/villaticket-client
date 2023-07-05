import style from "./SearchResults.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import {getTokenLS} from "../../contexts/UserContext"
import SearchCard from "./SearchCard/SearchCard"
import { useEffect, useState } from "react";
import axios from "axios";

const SearchResults = () => {
    const token = getTokenLS();
    const {search} = useLocation();
    const { eventsResponse } = localStorage.getItem("search") || "";
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

    

    useEffect(() => {
        fetchSearchResults()
    }, [])


    if(eventsResponse){
        const mappedEvents = eventsResponse.map( event => {
            return(
                <SearchCard event={event} key={event.id}/>
            )
        })
    }

    return (
        <>
            <div className={style["heading"]}>
                <h5>Results for</h5>
                <h1>{search || "New York Yankees"}</h1>
                <p>Tickets</p>
            </div>

            <div className={style["divider"]}></div>

            <div className={style["container"]}>
                { eventsResponse != [] ? mappedEvents :<SearchCard/>}
            </div>
        </>
    )
}

export default SearchResults;