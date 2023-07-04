import style from "./EventDetails.module.scss";

import locationsImg from "../../assets/locations.png";
import Button from "../../components/Button/Button"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react"

const EventDetails = () => {

    const [tickets, setTickets] = useState([]);

    const fetchTickets = async () => {
        try {
            const {data} = await axios.get("")
            setTickets(data.tickets)
        } catch (error) {
            console.log(error)
        }
    }

    const mappedTickets = tickets.map(tickets => {
        return(
            <li>{tickets.name}</li>
        );
    })


    const navigate = useNavigate();
    return (
        <>
            <div className={style["container"]}>
                {/* LEFT SECTION */}
                <div className={style["locations-container"]}>
                    <div className={style["event-heading"]}>
                        <h1>Yankees @ Mets</h1>
                        <h2>Mon Apr 24 at 6:00pm · Estadio Cuscatlán, El Salvador, SS</h2>
                    </div>

                    <div className={style["location-cards-container"]}>
                        <div className={style["location-card-item"]}>
                            <div className={style["card-item-info"]}>
                                <h3>Sol General (1)</h3>
                                <h4>Row 12</h4>
                                <h5>$9.99 ea</h5>
                            </div>
                            <div onClick={()=> navigate("/order")} className={style["card-item-btn"]}>
                                <button type="submit">Buy Now</button>
                            </div>
                        </div>

                        <div className={style["location-card-item"]}>
                            <div className={style["card-item-info"]}>
                                <h3>Sol General (1)</h3>
                                <h4>Row 12</h4>
                                <h5>$9.99 ea</h5>
                            </div>
                            <div onClick={()=> navigate("/order")} className={style["card-item-btn"]}>
                                <button type="submit">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div className={style["location-img-container"]}>
                    <img src={locationsImg} alt="locations-img" />
                </div>
            </div>
        </>
    )
}

export default EventDetails;