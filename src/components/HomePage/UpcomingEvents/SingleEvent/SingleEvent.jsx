import { useNavigate } from "react-router-dom";
import cardImage from "../../../../assets/yankees-mets.jpg";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
import style from "./SingleEvent.module.scss"

const SingleEvent = ({event= {}}) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/event")} className={style["card"]}>
            <div className={style["card-container"]}>
                <div className={style["image-container"]}>
                    <ImageContainer src={event.image ? null : cardImage } alt="" />
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
    );
}

export default SingleEvent;