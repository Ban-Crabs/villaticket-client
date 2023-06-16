import style from "./HomePage.module.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainSection from "./MainSection/MainSection";

const HomePage = () => {
    return (
        <>
            <Header/>

            <MainSection/>
            {/* TOP SECTION */}

        
            {/* <div className={style["top-section"]}>
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
            </div> */}

            

            

            {/* FOOTER */}
            <Footer />
        </>
    )
}

export default HomePage;