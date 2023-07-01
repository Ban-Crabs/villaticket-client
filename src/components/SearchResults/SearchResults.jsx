import { useNavigate } from "react-router-dom";
import style from "./SearchResults.module.scss";


const SearchResults = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={style["heading"]}>
                <h5>Results for</h5>
                <h1>New York Yankees</h1>
                <p>Tickets</p>
            </div>

            <div className={style["divider"]}></div>

            <div className={style["container"]}>

                <div className={style["card-list-container"]}>

                    <div className={style["card-item"]}>
                        <div className={style["card-item-info"]}>
                            <div className={style["card-item-date-info"]}>
                                <h4>May 23</h4>
                                <h5>Mon • 6:00pm - 11:00pm</h5>
                            </div>
                            <div className={style["card-item-event-info"]}>
                                <h4>New York Yankees @ New York Mets</h4>
                                <h5>Mon • 6:00pm - 11:00pm</h5>
                            </div>
                        </div>
                        <div onClick={()=> navigate("/event")} className={style["button-container"]}>
                            <button type="submit">Details</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default SearchResults;