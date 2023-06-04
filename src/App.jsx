import style from "./App.module.scss";
import imgBbPlayer from "./assets/image-bb-player.png";
import cardImage from "./assets/yankees-mets.jpg";

function App() {

  return (
    <>
      {/* TOP SECTION */}
      <div className={style["top-section"]}>
        <img className={style["image-bb-player"]} src={imgBbPlayer} alt="img-bb-player" />
        <h1 className={style["landing-text-title"]}>
          <span className={style["title"]}>
            Score MLB <br /> Playoff Tickets! <br />
          </span>
          <span className={style["span1"]}> Buy Tickets, Earn Rewards! </span>
        </h1>
      </div>

      {/* TODO SEARCHBAR */}

      {/* MAIN TITLE */}
      <h1 className={style["upcoming"]}> Upcoming Events </h1>

      {/* CARDS */}
      <div className={style["card"]}>
        <div className={style["card-container"]}>
          <div className={style["image-container"]}>
            <img src={cardImage} alt="image-card" />
          </div>
          <div className={style["card-content"]}>
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

      {/* FOOTER */}
      <div className={style["footer"]}>
        <div className={style["footer-container"]}></div>
      </div>
    </>
  )
}

export default App
