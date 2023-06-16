import style from "./UpcomingEvents.module.scss";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
import cardImage from "../../../../assets/yankees-mets.jpg";

const UpcomingEvents = () => {
    return(
        <>
            {/* MAIN TITLE */}
            <h2 className={style["upcoming"]}> Upcoming Events </h2>
            <hr></hr>
            {/* CARDS */}
            <main>
                <div className={style["card"]}>
                    <div className={style["card-container"]}>
                        <div className={style["image-container"]}>
                            <ImageContainer src={cardImage} alt=""/>
                        </div>
                        <div className={style["card-body"]}>
                            <div className={style["card-title-container"]}>
                                <div className={style["event-date"]}>
                                    <span>SEP</span>
                                    <h3>18</h3>
                                </div>
                                <div className={style["card-title"]}>
                                    <h4>New York Yankess @ Mets</h4>
                                </div>
                            </div>
                            <div className={style["card-body"]}>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste similique eius illum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* LOAD MORE EVENTS */}
            <div className={style["load-more"]}>
                <button>Load More</button>
            </div>
        </>
    );
}
export default UpcomingEvents;