import style from "./FeaturedBanner.module.scss";
import ImageContainer from "../../ImageContainer/ImageContainer";
import cardImage from "../../../assets/image-bb-player.png";

const FeaturedBanner = () => {
    return(
        <div className={style["featured-container"]}>
            <div className={style["featured-title"]}>
                <h2>Score MLB Playoff Tickets!</h2>
                <p>Buy Tickets, Earn Rewards!</p>
            </div>
            <ImageContainer className={style["featured-image"]} src={cardImage} alt=""/>
        </div>
    );
}

export default FeaturedBanner;