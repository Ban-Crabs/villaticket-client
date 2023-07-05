import { useNavigate, useLocation } from "react-router-dom";
import style from "./SearchResults.module.scss";
import SearchCard from "./SearchCard/SearchCard"
import { useEffect, useState } from "react";
import axios from "axios";

const SearchResults = () => {
    const { keyword } = useLocation();
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchSearchResults()
    }, [])

    const fetchSearchResults = async () => {
        try {  
            console.log(axios.defaults.headers.common.Authorization)
            const {data} = await axios.get("/event/")
            setEvents(data.content)
        } catch (error) {
            console.log(error)
        }
    }
    const mappedEvents = events.map( event => {
        return(
            <SearchCard event={event}/>
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