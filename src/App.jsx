import style from "./App.module.scss";
import imgBbPlayer from "./assets/image-bb-player.png";

function App() {

  return (
    <>
      <div className={style["top-section"]}>
        <img className={style["image-bb-player"]} src={imgBbPlayer} alt="img-bb-player" />
        <h1 className={style["landing-text-title"]}>
          <span className={style["title"]}>
            Score MLB <br /> Playoff Tickets! <br />
          </span>
          <span className={style["span1"]}> Buy Tickets, Earn Rewards! </span>
        </h1>
      </div>
    </>
  )
}

export default App
