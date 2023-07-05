import { useNavigate } from "react-router-dom"
import style from "./SearchCard.module.scss"
import { useEffect } from "react"

const SearchCard = ({ event = {}}) => {
    
    const navigate = useNavigate()



    return (
        <div className={style["card-list-container"]}>

            <div className={style["card-item"]}>
                <div className={style["card-item-info"]}>
                    <div className={style["card-item-date-info"]}>
                        <h4>{event.date ? null : "May 23"}</h4>
                        <h5>{event.status ? null : "Upcoming"}</h5>
                    </div>
                    <div className={style["card-item-event-info"]}>
                        <h4>{event.title ? null : "New York Yankees"} @ {event.location ? null : "New York Mets"}</h4>
                        <h5>{event.start ? null : "6:00pm"} - {event.end ? null : "11:00pm"}</h5>
                    </div>
                </div>
                <div onClick={() => { navigate("/event", {event} )}} className={style["button-container"]}>
                    <button type="submit">Details</button>
                </div>

            </div>

        </div>
    )
}

export default SearchCard