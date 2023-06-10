import style from "./HomePage.module.scss";
import Footer from "../Footer/Footer";
import imgBbPlayer from "../../assets/image-bb-player.png";
import cardImage from "../../assets/yankees-mets.jpg";
import Header from "../Header/Header";

const HomePage = () => {
    return (
        <>
            <Header/>
            {/* TOP SECTION */}
            <div className={style["top-section"]}>
                <div className={style["top-section-container"]}>
                    <div className={style["top-left-section"]}>
                        <img src={imgBbPlayer} alt="img-bb-player" />
                    </div>
                    <div className={style["top-right-section"]}>
                        <h1 className={style["landing-text-title"]}>
                            <span className={style["title"]}>
                                Score MLB <br /> Playoff Tickets! <br />
                            </span>
                            <span className={style["span1"]}> Buy Tickets, Earn Rewards! </span>
                        </h1>
                    </div>
                </div>
                <div className={style["searchbar-container"]}>
                    <form>
                        <input type="text" placeholder="What are you looking for?" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>

            {/* MAIN TITLE */}
            <h1 className={style["upcoming"]}> Upcoming Events </h1>

            {/* CARDS */}
            <main>
                <div className={style["card"]}>
                    <div className={style["card-container"]}>
                        <div className={style["image-container"]}>
                            <img src={cardImage} alt="image-card" />
                        </div>
                        <div className={style["card-body"]}>
                            <div className={style["card-title-container"]}>
                                <div className={style["event-date"]}>
                                    <span>SEP</span>
                                    <h2>18</h2>
                                </div>
                                <div className={style["card-title"]}>
                                    <h3>New York Yankess @ Mets</h3>
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

            {/* FOOTER */}
            <Footer />
        </>
    )
}

export default HomePage;